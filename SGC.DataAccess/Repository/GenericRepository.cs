using Microsoft.EntityFrameworkCore;
using SGC.DataAccess.Context;
using SGC.Domain;
using SGC.Domain.Entities;
using System.Linq.Expressions;

namespace SGC.DataAccess.Repository
{
    public class GenericRepository<TEntity> : IRepository<TEntity>
        where TEntity : BaseEntity
    {
        private readonly ConsorcioContext _context;
        private DbSet<TEntity> _dbSet;

        public GenericRepository(ConsorcioContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }

        public async Task<TEntity> Add(TEntity item)
        {
            _dbSet.Add(item);
            await Save();
            return item;
        }

        public async Task<TEntity> Update(TEntity item)
        {
            var localEntity = _dbSet.Local.FirstOrDefault(x => x.Id == item.Id);
            if (localEntity != null)
                _context.Entry(localEntity).State = EntityState.Detached;
            _context.Entry(item).State = EntityState.Modified;
            await Save();
            return item;
        }

        public async Task<TEntity> Get(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }

        public IQueryable<TEntity> GetFiltered(Expression<Func<TEntity, bool>> filter)
        {
            return _dbSet.Where(filter);
        }

        //TODO: Validar ya que es una sql query
        public async Task<IEnumerable<T>> ExecuteQuery<T>(string sqlQuery, params object[] parameters)
        {
            return _context.Database.SqlQueryRaw<T>(sqlQuery, parameters);
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
    }
}

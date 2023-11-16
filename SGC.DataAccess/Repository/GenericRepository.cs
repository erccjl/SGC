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

        public TEntity Add(TEntity item)
        {
            _dbSet.Add(item);
            Save();
            return item;
        }

        public TEntity Update(TEntity item)
        {
            _dbSet.Attach(item);
            _context.Entry(item).State = EntityState.Modified;
            Save();
            return item;
        }

        public TEntity Get(int id)
        {
            return _dbSet.Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbSet.ToList();
        }

        public virtual IQueryable<TEntity> GetFiltered(Expression<Func<TEntity, bool>> filter)
        {
            return _dbSet.Where(filter);
        }

        //TODO: Validar ya que es una sql query
        public IEnumerable<T> ExecuteQuery<T>(string sqlQuery, params object[] parameters)
        {
            return _context.Database.SqlQueryRaw<T>(sqlQuery, parameters);
        }

        public void Remove(object id)
        {
            TEntity item = _dbSet.Find(id);
            Remove(item);
        }

        public virtual void Remove(TEntity item)
        {
            if (_context.Entry(item).State == EntityState.Detached)
            {
                _context.Attach(item);
            }
            _context.Remove(item);
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}

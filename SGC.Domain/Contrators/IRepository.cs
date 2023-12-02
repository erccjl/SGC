using SGC.Domain.Entities;
using System.Linq.Expressions;

namespace SGC.Domain
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        Task<TEntity> Add(TEntity item);

        Task<TEntity> Update(TEntity item);

        Task<TEntity> Get(int id);

        Task<IEnumerable<TEntity>> GetAll();

        IQueryable<TEntity> GetFiltered(Expression<Func<TEntity, bool>> filter);

        Task<IEnumerable<T>> ExecuteQuery<T>(string sqlQuery, params object[] parameters);

        Task Save();
    }
}

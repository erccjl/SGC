using SGC.Domain.Entities;
using System.Linq.Expressions;

namespace SGC.Domain
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        TEntity Add(TEntity item);

        void Remove(TEntity item);

        TEntity Update(TEntity item);

        TEntity Get(int id);

        IEnumerable<TEntity> GetAll();

        IQueryable<TEntity> GetFiltered(Expression<Func<TEntity, bool>> filter);

        IEnumerable<T> ExecuteQuery<T>(string sqlQuery, params object[] parameters);

        void Save();
    }
}

using SGC.Domain.Contrators;
using SGC.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SGC.Domain
{
    public interface IRepository<TEntity> where  TEntity : BaseEntity
    {
        void Add(TEntity item);

        void Remove(TEntity item);

        void Update(TEntity item);

        TEntity Get(int id);

        IEnumerable<TEntity> GetAll();

        IQueryable<TEntity> GetFiltered(Expression<Func<TEntity, bool>> filter);

        IEnumerable<T> ExecuteQuery<T>(string sqlQuery, params object[] parameters);

    }
}

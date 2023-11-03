using SGC.DataAccess.Context;
using SGC.Domain.Contrators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SGC.DataAccess.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ConsorcioContext _context;

        public UnitOfWork(ConsorcioContext context)
        {
            _context = context;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }

        public void RollbackChanges()
        {
            throw new NotImplementedException();
        }
    }
}

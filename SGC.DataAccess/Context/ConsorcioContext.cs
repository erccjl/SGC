using Microsoft.EntityFrameworkCore;
using SGC.Domain.Entities;

namespace SGC.DataAccess.Context
{
    public class ConsorcioContext : DbContext
    {
        public ConsorcioContext(DbContextOptions<ConsorcioContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }


        public DbSet<Unidad> Unidades { get; set; }

    }
}

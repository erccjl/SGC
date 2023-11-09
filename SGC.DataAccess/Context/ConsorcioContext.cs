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

        public DbSet<Consorcio> Consorcios { get; set; }

        public DbSet<Movimiento> Movimientos { get; set; }

        public DbSet<Persona> Personas { get; set; }

        public DbSet<PersonaHumana> PersonasHumana { get; set; }

        public DbSet<PersonaJuridica> PersonasJuridica { get; set; }

        public DbSet<TipoMovimiento> TipoMovimientos { get; set; }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Consorcista> Consorcistas { get; set; }
    }
}

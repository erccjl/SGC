using SGC.Domain.Enums;

namespace SGC.Domain.Entities
{
    public class Movimiento : BaseEntity
    {
        public string Nota { get; set; }
        public decimal Monto { get; set; }
        public TipoExpensa TipoExpensa { get; set; }
        public int TipoMovimientoId { get; set; }

        public virtual TipoMovimiento TipoMovimiento { get; set; }
    }
}


namespace SGC.Domain.Entities
{
    public class TipoMovimiento : BaseEntity
    {
        public string Nombre { get; set; }
        public bool EsSuma { get; set; }
    }
}


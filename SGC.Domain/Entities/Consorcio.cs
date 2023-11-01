using SGC.Domain.Enums;

namespace SGC.Domain.Entities
{
    public class Consorcio : BaseEntity
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Direccion { get; set; }
        public TipoConsorcio Tipo { get; set; }

        public virtual ICollection<Unidad> Unidades { get; set; }
    }
}


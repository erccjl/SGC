using SGC.Domain.Enums;

namespace SGC.Domain.Entities
{
    public class Consorcista : BaseEntity
    {
        public TipoConsorcista TipoConsorcista { get; set; }
        public int PersonaId { get; set; }
        public int UnidadId { get; set; }

        public virtual Persona Persona { get; set; }
        public virtual Unidad Unidad { get; set; }
    }
}


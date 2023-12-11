using SGC.Domain.Enums;

namespace SGC.Domain.Entities
{
    public class Unidad : BaseEntity
    {
        public string Codigo { get; set; }
        public string Grupo { get; set; }
        public decimal Porcentaje { get; set; }
        public TipoGrupo TipoGrupo { get; set; }
        public TipoUnidad TipoUnidad { get; set; }
        public int ConsorcioId { get; set; }

        public virtual Consorcio Consorcio { get; set; }
        public virtual ICollection<Consorcista> Consorcistas { get; set; }
    }
}


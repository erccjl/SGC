using SGC.Domain.Entities;
using SGC.Domain.Enums;

namespace SGC.Application.Dtos
{
    public class ConsorcioDto 
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Direccion { get; set; }
        public TipoConsorcio Tipo { get; set; }
    }
}

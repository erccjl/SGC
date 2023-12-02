namespace SGC.Application.Dtos
{
    public class UnidadDto : BaseEntityDto
    {
        public string Codigo { get; set; }
        public decimal? Porcentaje { get; set; }
        public int? ConsorcioId { get; set; }
    }
}
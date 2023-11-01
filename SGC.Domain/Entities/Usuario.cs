namespace SGC.Domain.Entities
{
	public class Usuario : BaseEntity
	{
		public string Nombre { get; set; }
		public string Codigo { get; set; }
		public string Contraseña { get; set; }
	}
}


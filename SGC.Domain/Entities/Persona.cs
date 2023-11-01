namespace SGC.Domain.Entities
{
    public class Persona : BaseEntity
    {
        public string Email { get; set; }
        public string Celular { get; set; }
        public string Telefono { get; set; }

        public virtual ICollection<Consorcista> Consorcistas { get; set; }
    }
}


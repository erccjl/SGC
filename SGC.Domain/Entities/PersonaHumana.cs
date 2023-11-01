namespace SGC.Domain.Entities
{
    public class PersonaHumana : Persona
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Documento { get; set; }
        public DateTime FechaNacimiento { get; set; }
    }
}


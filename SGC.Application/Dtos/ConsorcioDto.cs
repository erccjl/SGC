﻿using SGC.Domain.Enums;

namespace SGC.Application.Dtos
{
    public class ConsorcioDto : BaseEntityDto
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Direccion { get; set; }
        public TipoConsorcio Tipo { get; set; }
        public string Encabezado { get; set; }
        public string Contenido { get; set; }
    }
}

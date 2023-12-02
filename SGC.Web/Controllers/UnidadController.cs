using Microsoft.AspNetCore.Mvc;
using SGC.Application.Dtos;
using SGC.Application.Service;

namespace SGC.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnidadController : GenericController<IUnidadService, UnidadDto>
    {
        public UnidadController(IUnidadService unidadService)
            :base(unidadService)
        {
        }
    }
}


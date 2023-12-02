using Microsoft.AspNetCore.Mvc;
using SGC.Application.Dtos;
using SGC.Application.Service;

namespace SGC.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnidadController : GenericController<IUnidadService, UnidadDto>
    {
        private readonly IUnidadService _unidadService;

        public UnidadController(IUnidadService unidadService)
            :base(unidadService)
        {
            _unidadService = unidadService;
        }

        [HttpGet("getByConsorcioId")]
        public async Task<ActionResult<List<UnidadDto>>> GetByConsorcioId(int id)
        {
            return Ok(await _unidadService.GetByConsorcioId(id));
        }
    }
}


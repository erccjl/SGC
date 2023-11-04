using Microsoft.AspNetCore.Mvc;
using SGC.Application.Dtos;
using SGC.Application.Service;

namespace SGC.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsorcioController : ControllerBase
    {
        private readonly IConsoricioService _consorcioService;

        public ConsorcioController(IConsoricioService consoricioService)
        {
            _consorcioService = consoricioService;
        }


        [HttpPost("createConsorcio")]
        public async Task<IActionResult> CreateConsorcio([FromBody] ConsorcioDto model)
        {
            return Ok("Consorcio creado exitosamente");
            //try
            //{
            //    _consorcioService.CreateConsorcio(consorcioDto);
            //    return Ok();
            //}
            //catch (Exception ex)
            //{
            //    throw ex;
            //}
        }
    }
}
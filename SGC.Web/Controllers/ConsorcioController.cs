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


        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] ConsorcioDto model)
        {
            try
            {
                _consorcioService.CreateConsorcio(model);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost("edit")]
        public async Task<IActionResult> Edit([FromBody] ConsorcioDto model)
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
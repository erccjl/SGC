using Microsoft.AspNetCore.Mvc;
using SGC.Application.Dtos;
using SGC.Application.Service;

namespace SGC.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsorcioController : GenericController<IConsorcioService, ConsorcioDto>
    {
        private readonly IConsorcioService _consorcioService;

        public ConsorcioController(IConsorcioService consoricioService)
            : base(consoricioService)
        {
            _consorcioService = consoricioService;
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var consorcios = await _consorcioService.GetAll();
                return Ok(consorcios);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
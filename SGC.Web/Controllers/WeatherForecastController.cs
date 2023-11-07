using Microsoft.AspNetCore.Mvc;
using SGC.Application.Dtos;
using SGC.Application.Service;

namespace SGC.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private IConsoricioService _consorcioService;

        public WeatherForecastController( IConsoricioService consoricioService)
        {
            _consorcioService = consoricioService;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpPost("createConsorcio")]
        public async Task<IActionResult> CreateConsorcio(ConsorcioDto consorcioDto)
        {
            try
            {
                _consorcioService.CreateConsorcio(consorcioDto);
                return Ok(true);
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }
    }
}
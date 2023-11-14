using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SGC.Application.Dtos;
using SGC.Application.Service;
using SGC.Domain.Entities;

namespace SGC.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsorcioController : ControllerBase
    {
        private readonly IConsorcioService _consorcioService;
        private readonly ILogger<ConsorcioController> _logger;

        public ConsorcioController(IConsorcioService consoricioService, ILogger<ConsorcioController> logger)
        {
            _consorcioService = consoricioService;
            _logger = logger;
        }


        [HttpPost("createConsorcio")]
        public async Task<IActionResult> CreateConsorcio([FromBody] ConsorcioDto model)
        {
            try
            {
                var consorcio = _consorcioService.CreateConsorcio(model);
                return Ok(consorcio);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("editConsorcio")]
        public async Task<IActionResult> EditConsorcio([FromBody] ConsorcioDto model)
        {
            try
            {
                var consorcio = _consorcioService.EditConsorcio(model);
                return Ok(consorcio);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getAllConsorcios")]
        public async Task<IActionResult> GetAllConsorcios()
        {
            try
            {
                var consorcio = _consorcioService.GetAllConsorcios();
                return Ok(consorcio);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
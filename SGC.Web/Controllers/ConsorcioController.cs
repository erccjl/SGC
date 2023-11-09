﻿using AutoMapper;
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


        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] ConsorcioDto model)
        {
            try
            {
                var consorcio = _consorcioService.CreateConsorcio(model);
                return Ok(consorcio);
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
using AutoMapper;
using SGC.Application.Dtos;
using SGC.Domain;
using SGC.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SGC.Application.Service
{
    public class ConsorcioService : IConsoricioService
    {
        private readonly IRepository<Consorcio> _consorcioRepository;
        private readonly IMapper _mapper;

        public ConsorcioService(IRepository<Consorcio> consorcioRepo, IMapper mapper)
        {
            _consorcioRepository = consorcioRepo;
            _mapper = mapper;
        }

        public void CreateConsorcio(ConsorcioDto consorcioDto)
        {
           
            var consorcio = _mapper.Map<Consorcio>(consorcioDto);
            consorcio.CreatedDate = DateTime.Now;
           //var consorcio =  new Consorcio() { Descripcion = "hh", UsuarioId= 1 };
            _consorcioRepository.Add(consorcio);
            _consorcioRepository.Save();
        }

    }
}

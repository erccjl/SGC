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
    public class ConsorcioService : IConsorcioService
    {
        private readonly IRepository<Consorcio> _consorcioRepository;
        private readonly IMapper _mapper;

        public ConsorcioService(IRepository<Consorcio> consorcioRepo, IMapper mapper)
        {
            _consorcioRepository = consorcioRepo;
            _mapper = mapper;
        }

        public ConsorcioDto CreateConsorcio(ConsorcioDto consorcioDto)
        {
            var newConsorcio = _mapper.Map<Consorcio>(consorcioDto);
            newConsorcio.CreatedDate = DateTime.Now;
            newConsorcio.UpdatedDate = DateTime.Now;
            newConsorcio.UsuarioId = 1;
            var consorcio =_consorcioRepository.Add(newConsorcio);

            return _mapper.Map<ConsorcioDto>(consorcio);
        }

    }
}

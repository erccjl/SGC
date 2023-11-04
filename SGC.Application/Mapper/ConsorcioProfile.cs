using AutoMapper;
using SGC.Application.Dtos;
using SGC.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SGC.Application.Mapper
{
    public class ConsorcioProfile : Profile
    {
        public ConsorcioProfile()
        {
            CreateMap<Consorcio, ConsorcioDto>().ReverseMap();
        }
    }
}

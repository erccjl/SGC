using AutoMapper;
using SGC.Application.Dtos;
using SGC.Domain.Entities;

namespace SGC.Application.Mapper
{
	public class UnidadProfile : Profile
    {
		public UnidadProfile()
		{
            CreateMap<UnidadDto, Unidad>()
                .ReverseMap();
        }
	}
}


using AutoMapper;
using SGC.Application.Dtos;
using SGC.Domain;
using SGC.Domain.Entities;

namespace SGC.Application.Service.Implementations
{
    public class UnidadService : IUnidadService
    {
        private readonly IRepository<Unidad> _repository;
        private readonly IMapper _mapper;

        public UnidadService(IRepository<Unidad> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UnidadDto> Get(int id)
        {
            var model = await _repository.Get(id);
            var dto = _mapper.Map<UnidadDto>(model);
            return dto;
        }

        public async Task<bool> Exists(int id)
        {
            var model = await _repository.Get(id);
            return model != null;
        }

        public Task Activate(int id)
        {
            throw new NotImplementedException();
        }

        public Task Inactivate(int id)
        {
            throw new NotImplementedException();
        }

        public Task Save(UnidadDto dto)
        {
            throw new NotImplementedException();
        }

        public Task<(bool isValid, string message)> Validate(int? id, UnidadDto dto)
        {
            throw new NotImplementedException();
        }
    }
}


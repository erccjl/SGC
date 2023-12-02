using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using SGC.Application.Dtos;
using SGC.Application.Helpers;
using SGC.Application.Validations;
using SGC.Domain;
using SGC.Domain.Entities;

namespace SGC.Application.Service
{
    public class ConsorcioService : IConsorcioService
    {
        private readonly IRepository<Consorcio> _repository;
        private readonly IMapper _mapper;
        private const int _usuarioId = 1; //TODO: Modificar por el codigo del usuario autenticado

        public ConsorcioService(IRepository<Consorcio> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ConsorcioDto> Get(int id)
        {
            var consorcio = await _repository.Get(id);
            return _mapper.Map<ConsorcioDto>(consorcio);
        }

        public async Task<bool> Exists(int id)
        {
            return await _repository.Get(id) != null;
        }

        public async Task Activate(int id)
        {
            var consorcio = await _repository.Get(id);
            BaseEntityHelper.SetActive(consorcio, _usuarioId);
            await _repository.Update(consorcio);
        }

        public async Task Inactivate(int id)
        {
            var consorcio = await _repository.Get(id);
            BaseEntityHelper.SetInactive(consorcio, _usuarioId);
            await _repository.Update(consorcio);
        }

        public async Task Save(ConsorcioDto dto)
        {
            if (dto.Id.Equals(0))
            {
                var newConsorcio = _mapper.Map<Consorcio>(dto);
                BaseEntityHelper.SetCreated(newConsorcio, _usuarioId);
                await _repository.Add(newConsorcio);
            }
            else
            {
                var updatedConsorcio = _mapper.Map<Consorcio>(dto);
                BaseEntityHelper.SetUpdated(updatedConsorcio, _usuarioId);
                await _repository.Update(updatedConsorcio);
            }
        }

        public async Task<(bool isValid, string message)> Validate(int? id, ConsorcioDto dto)
        {
            var validations = new List<(bool isValid, string message)>();

            var validator = new ConsorcioValidator();
            var result = await validator.ValidateAsync(dto);
            validations.Add((result.IsValid, string.Join(Environment.NewLine, result.Errors.Select(x => $"Campo {x.PropertyName} invalido. Error: {x.ErrorMessage}"))));

            var existConsorcio = _repository.GetFiltered(x => x.Id != id && x.Nombre == dto.Nombre).Any();
            validations.Add((!existConsorcio, "Ya existe un consorcio con el mismo nombre"));

            return (isValid: validations.All(x => x.isValid),
                    message: string.Join(Environment.NewLine, validations.Where(x => !x.isValid).Select(x => x.message)));
        }

        public async Task<List<ConsorcioDto>> GetAll()
        {
            return await _repository.GetFiltered(x => x.State == Domain.Enums.BaseState.Activo)
                .ProjectTo<ConsorcioDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}

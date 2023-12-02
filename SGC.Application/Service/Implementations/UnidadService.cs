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
    public class UnidadService : IUnidadService
    {
        private readonly IRepository<Unidad> _repository;
        private readonly IMapper _mapper;
        private const int _usuarioId = 1; //TODO: Modificar por el codigo del usuario autenticado

        public UnidadService(IRepository<Unidad> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UnidadDto> Get(int id)
        {
            var model = await _repository.Get(id);
            return _mapper.Map<UnidadDto>(model);
        }

        public async Task<bool> Exists(int id)
        {
            return await _repository.Get(id) != null;
        }

        public async Task Activate(int id)
        {
            var unidad = await _repository.Get(id);
            BaseEntityHelper.SetActive(unidad, _usuarioId);
            await _repository.Update(unidad);
        }

        public async Task Inactivate(int id)
        {
            var unidad = await _repository.Get(id);
            BaseEntityHelper.SetInactive(unidad, _usuarioId);
            await _repository.Update(unidad);
        }

        public async Task Save(UnidadDto dto)
        {
            if (dto.Id.Equals(0))
            {
                var newUnidad = _mapper.Map<Unidad>(dto);
                BaseEntityHelper.SetCreated(newUnidad, _usuarioId);
                await _repository.Add(newUnidad);
            }
            else
            {
                var updatedUnidad = _mapper.Map<Unidad>(dto);
                BaseEntityHelper.SetUpdated(updatedUnidad, _usuarioId);
                await _repository.Update(updatedUnidad);
            }
        }

        public async Task<(bool isValid, string message)> Validate(int? id, UnidadDto dto)
        {
            var validations = new List<(bool isValid, string message)>();

            var validator = new UnidadValidator();
            var result = await validator.ValidateAsync(dto);
            validations.Add((result.IsValid, string.Join(Environment.NewLine, result.Errors.Select(x => $"Campo {x.PropertyName} invalido. Error: {x.ErrorMessage}"))));

            return (isValid: validations.All(x => x.isValid),
                    message: string.Join(Environment.NewLine, validations.Where(x => !x.isValid).Select(x => x.message)));
        }
        
        public async Task<List<UnidadDto>> GetByConsorcioId(int consorcioId)
        {
            return await _repository.GetFiltered(x => x.ConsorcioId == consorcioId && x.State == Domain.Enums.BaseState.Activo)
                .ProjectTo<UnidadDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }
    }
}


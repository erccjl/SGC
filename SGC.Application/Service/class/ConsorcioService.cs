using AutoMapper;
using FluentValidation;
using SGC.Application.Dtos;
using SGC.Application.Validations;
using SGC.Domain;
using SGC.Domain.Entities;

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

        public ConsorcioDto CreateConsorcio(ConsorcioDto model)
        {
            if (ExistConsorcio(model.Nombre))
            {
                throw new Exception("El consorcio que desea crear ya existe");
            }

            var validator = new ConsorcioValidator();
            validator.ValidateAndThrow(model);

            var newConsorcio = _mapper.Map<Consorcio>(model);
            newConsorcio.CreatedDate = DateTime.Now;
            newConsorcio.UpdatedDate = DateTime.Now;
            newConsorcio.UsuarioId = 1;

            var consorcio = _consorcioRepository.Add(newConsorcio);

            return _mapper.Map<ConsorcioDto>(consorcio);
        }


        public ConsorcioDto EditConsorcio(ConsorcioDto model)
        {

            if (!ExistConsorcio(model.Nombre))
            {
                throw new Exception("El consorcio que desea editar no existe");
            }
            if (model.Id == 0)
            {
                throw new Exception("Debe ingresar el Id del consorcio que desea editar");
            }

            var validator = new ConsorcioValidator();
            validator.ValidateAndThrow(model);

            var newConsorcio = _mapper.Map<Consorcio>(model);
            newConsorcio.UpdatedDate = DateTime.Now;
            newConsorcio.UsuarioId = 1;

            var consorcio = _consorcioRepository.Update(newConsorcio);

            return _mapper.Map<ConsorcioDto>(consorcio);
        }

        public bool ExistConsorcio(string consorcio)
        {
            return _consorcioRepository.GetFiltered(c => c.Nombre == consorcio).Any();
        }

        public List<ConsorcioDto> GetAllConsorcios()
        {
            var consorciosDto = new List<ConsorcioDto>();
            var consorcios = _consorcioRepository.GetAll().ToList();

            foreach(var consorcio in consorcios)
            {
                consorciosDto.Add(_mapper.Map<ConsorcioDto>(consorcio));
            }

            return consorciosDto;
        }
    }
}

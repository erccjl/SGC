using SGC.Application.Dtos;

namespace SGC.Application.Service
{
    public interface IConsorcioService : IGenericService<ConsorcioDto>
    {
        Task<List<ConsorcioDto>> GetAll();
    }
}

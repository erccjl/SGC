using SGC.Application.Dtos;

namespace SGC.Application.Service
{
    public interface IUnidadService: IGenericService<UnidadDto>
    {
        Task<List<UnidadDto>> GetByConsorcioId(int consorcioId);
    }
}
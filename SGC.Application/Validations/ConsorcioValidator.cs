using FluentValidation;
using SGC.Application.Dtos;

namespace SGC.Application.Validations
{
    public class ConsorcioValidator : AbstractValidator<ConsorcioDto>
    {
        public ConsorcioValidator()
        {
            RuleFor(c => c.Nombre).NotNull();
            RuleFor(c => c.Direccion).NotNull();
            RuleFor(c => ((int)c.Tipo)).GreaterThan(0); 
        }
    }
}

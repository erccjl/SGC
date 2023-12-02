using FluentValidation;
using SGC.Application.Dtos;

namespace SGC.Application.Validations
{
    public class UnidadValidator : AbstractValidator<UnidadDto>
    {
        public UnidadValidator()
        {
            RuleFor(c => c.Codigo).NotNull();
            RuleFor(c => c.Porcentaje)
                .Cascade(CascadeMode.Stop)
                .NotNull()
                .BeValidPercentage(0, 100);
            RuleFor(c => c.ConsorcioId).NotNull();
        }
    }
}

using FluentValidation;

namespace SGC.Application.Validations
{
    public static class CustomValidators
    {
        public static IRuleBuilderOptions<T, decimal?> BeValidPercentage<T>(this IRuleBuilder<T, decimal?> ruleBuilder, decimal minValue, decimal maxValue)
        {
            return ruleBuilder.Must(value => value >= minValue && value <= maxValue)
                              .WithMessage($"El valor debe estar entre {minValue} y {maxValue}.");
        }
    }
}
﻿using SGC.Application.Dtos;

namespace SGC.Application.Service
{
	public interface IGenericService<TDto>
		where TDto : BaseDto
	{
		Task<TDto> Get(int id);
		Task<bool> Exists(int id);
		Task Activate(int id);
		Task Inactivate(int id);
		Task Save(TDto dto);
		Task<(bool isValid, string message)> Validate(int? id, TDto dto);
	}
}


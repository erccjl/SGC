﻿using SGC.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SGC.Application.Service
{
    public interface IConsorcioService
    {
        ConsorcioDto CreateConsorcio(ConsorcioDto consorcio);
        ConsorcioDto EditConsorcio(ConsorcioDto model);
        List<ConsorcioDto> GetAllConsorcios();
    }
}

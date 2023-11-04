using SGC.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SGC.Application.Service
{
    public interface IConsoricioService
    {
        void CreateConsorcio(ConsorcioDto consorcio);
    }
}

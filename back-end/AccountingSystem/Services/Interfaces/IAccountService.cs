﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using AccountingSystem.Data.Models;

namespace AccountingSystem.Services.Interfaces
{
    public interface IAccountService
    {
        int AddUser(User user);
    }
}

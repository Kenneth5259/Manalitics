using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using ManalyticsBackend;
using ManalyticsBackend.Models;

namespace ManalyticsBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ManalyticsDbContext _db;

        public AdminController(ManalyticsDbContext db) {
            _db = db;
        }

        [HttpPost]
        [Route("[controller]/set/csv")]
        public IActionResult InsertSetFromCSV(IFormCollection form) {
            Console.WriteLine(form);
            return null;
        }

    }
}

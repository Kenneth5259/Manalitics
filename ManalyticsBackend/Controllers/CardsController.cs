using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ManalyticsBackend;
using ManalyticsBackend.Models;

namespace ManalyticsBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CardsController : ControllerBase
    {
        private readonly ManalyticsDbContext _db;

        public CardsController(ManalyticsDbContext db) {
            _db = db;
        }

        // route to return all cards
        [HttpGet]
        public ActionResult Get() 
        {
            var allCards = _db.Cards.ToList();
            return Ok(allCards);

        }
    }
}

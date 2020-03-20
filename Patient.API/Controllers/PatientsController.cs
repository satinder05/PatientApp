using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Infrastructure.Persistence;
using API.Model;
using API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : Controller
    {
        private readonly PatientDbContext _context;
        private readonly PatientService _service;

        public PatientsController(PatientDbContext context)
        {
            if (context == null)
                throw new ArgumentNullException(nameof(context));
            _context = context;
            _service = new PatientService(_context);
        }

        [HttpPost]
        public async Task CreateAsync([FromBody]Patient patient)
        {
            await _service.CreatePatientAsync(patient, CancellationToken.None);
        }
    }
}
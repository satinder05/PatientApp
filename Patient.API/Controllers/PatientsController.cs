using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Infrastructure.Persistence;
using API.Model;
using API.Service;
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

        [HttpGet]
        public async Task<List<Patient>> GetAllAsync()
        {
            return await _service.GetAllPatientsAsync();
        }

        [HttpPost]
        public async Task CreateAsync([FromBody]Patient patient)
        {
            await _service.CreatePatientAsync(patient);
        }
    }
}
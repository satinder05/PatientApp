using API.Infrastructure.Persistence;
using API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace API.Service
{
    public class PatientService
    {
        private readonly PatientDbContext _context;

        public PatientService(PatientDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Patient>> GetAllAsync()
        {
            var products = await _context.Patients.ToListAsync();
            return products;
        }

        [HttpPost]
        public async Task<int> CreatePatientAsync(Patient patient)
        {
            var item = new Patient
            {
                Name = patient.Name,
                Email = patient.Email,
                Mobile = patient.Mobile
            };
            _context.Patients.Add(item);
            await _context.SaveChangesAsync();
            return item.Id;
        }
    }
}

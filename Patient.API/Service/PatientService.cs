using API.Infrastructure.Persistence;
using API.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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

        public async Task<List<Patient>> GetAllPatientsAsync()
        {
            var products = await _context.Patients.ToListAsync();
            return products;
        }
    }
}

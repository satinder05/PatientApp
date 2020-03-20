using API.Infrastructure.Persistence;
using API.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public async Task<int> CreatePatientAsync(Patient patient, CancellationToken cancellationToken)
        {
            var item = new Patient
            {
                Name = patient.Name,
                Email = patient.Email,
                Mobile = patient.Mobile
            };
            _context.Patients.Add(item);
            await _context.SaveChangesAsync(cancellationToken);
            return item.Id;
        }
    }
}

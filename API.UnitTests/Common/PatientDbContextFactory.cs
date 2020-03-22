using API.Infrastructure.Persistence;
using System;
using Microsoft.EntityFrameworkCore;
using System.Text;
using API.Model;

namespace API.UnitTests.Common
{
    public class PatientDbContextFactory
    {
        public static PatientDbContext Create()
        {
            var options = new DbContextOptionsBuilder<PatientDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;

            var context = new PatientDbContext(options);
            context.Database.EnsureCreated();

            //Add Test data
            //Patients
            context.Patients.AddRange(new[] {
                new Patient { Name = "John Smith", Email = "John.Smith@mail.com", Mobile = "+61410929102"},
                new Patient { Name = "Test Patient", Email = "TestEmail@gmail.com", Mobile = "0400000000"},
            });

            context.SaveChanges();

            return context;
        }

        public static void Destroy(PatientDbContext context)
        {
            context.Database.EnsureDeleted();

            context.Dispose();
        }
    }
}

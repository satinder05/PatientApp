using API.Infrastructure.Persistence;
using System;

namespace API.UnitTests.Common
{
    public class TestBase : IDisposable
    {
        protected readonly PatientDbContext _context;

        public TestBase()
        {
            _context = PatientDbContextFactory.Create();
        }

        public void Dispose()
        {
            PatientDbContextFactory.Destroy(_context);
        }
    }
}

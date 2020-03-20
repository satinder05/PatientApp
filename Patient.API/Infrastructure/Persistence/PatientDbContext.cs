using Microsoft.EntityFrameworkCore;
using API.Model;
using API.Infrastructure.Persistence.Configurations;
using System.Threading.Tasks;
using System.Threading;

namespace API.Infrastructure.Persistence
{
    public class PatientDbContext : DbContext
    {
        public PatientDbContext(DbContextOptions<PatientDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Patient> Patients { get; set; }

        //public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        //{
        //    return base.SaveChangesAsync(cancellationToken);
        //}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new PatientEntityTypeConfiguration());
        }
    }
}

using API.Model;
using API.Service;
using API.UnitTests.Common;
using Shouldly;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace API.UnitTests.Service
{
    public class PatientServiceTests : TestBase
    {
        private PatientService _patientService;
        public PatientServiceTests()
        {
            _patientService = new PatientService(_context);
        }
        [Fact]
        public async Task CreatePatientAsync_GivenValidPatient_ShouldCreatePatient()
        {
            //Arrange
            Patient patient = new Patient
            {
                Name = "Test Name",
                Email = "testemail@test.com.au",
                Mobile = "0421000000"
            };

            //Act
            var result = await _patientService.CreatePatientAsync(patient);

            //Assert
            result.ShouldBeOfType<Patient>();
            result.Id.ShouldBeOfType<int>();
        }

        [Fact]
        public async Task CreatePatientAsync_GivenPatientWithNoEmailAndMobile_ShouldCreatePatient()
        {
            //Arrange
            Patient patient = new Patient
            {
                Name = "Another Patient"
            };

            //Act
            var result = await _patientService.CreatePatientAsync(patient);

            //Assert
            result.ShouldBeOfType<Patient>();
            result.Id.ShouldBeOfType<int>();
        }

        [Fact]
        public async Task GetAllPatientsAsync_ShouldCreatePatient()
        {
            int minimumTestPatientCount = 1;

            //Act
            var result = await _patientService.GetAllPatientsAsync();

            //Assert
            result.ShouldBeOfType<List<Patient>>();
            result.Count.ShouldBeGreaterThan(minimumTestPatientCount);
        }
    }
}

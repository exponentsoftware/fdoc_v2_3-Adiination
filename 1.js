const companies = [
    {
      name: 'Company 1',
      employees: [
        { name: 'Alice', role: 'Developer', department: 'Engineering' },
        { name: 'Bob', role: 'Manager', department: 'Engineering' },
        { name: 'Charlie', role: 'Designer', department: 'Design' },
      ],
    },
    // ... (more companies)
  ];
  
  function processCompanies(companies) {
    return companies.map((company) => {
      const numEmployees = company.employees.length;
      const departments = {};
  
      company.employees.forEach((employee) => {
        const department = employee.department;
  
        if (departments.hasOwnProperty(department)) {
          departments[department]++;
        } else {
          departments[department] = 1;
        }
      });
  
      return {
        ...company.employees,
        numEmployees,
        departments,

      };
    });
  }
  
  const updatedCompanies = processCompanies(companies);
  console.log(updatedCompanies);
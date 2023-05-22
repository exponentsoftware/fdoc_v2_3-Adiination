function processCompanies(companies) {
    return companies.map((company) => { //mapping over all the object in company array
      const { employees } = company; 
      const numEmployees = employees.length;
  
      const departments = employees.reduce((acc, employee) => { //.reduce to do below fucntion on all the object in the employees array.
        const { department } = employee; //extracting department property from employee
        acc[department] = (acc[department] || 0) + 1; //retrieves the current count (or 0 if it's undefined or falsy), and then + 1 increments the count by 1.
        return acc;
      }, {}); //initial value is an empty object
  
      return {
        ...company, 
        numEmployees,
        departments,
      };
    });
  }
  
  // Example:
  const companies = [
    {
      name: 'Company 1',
      employees: [
        { name: 'Alice', role: 'Developer', department: 'Engineering' },
        { name: 'Bob', role: 'Manager', department: 'Engineering' },
        { name: 'Charlie', role: 'Designer', department: 'Design' },
        {name: 'Aditya', role: 'Developer',department:'Engineering'}
      ],
    },
    // ... (more companies)
  ];
  
  console.log(processCompanies(companies));
  
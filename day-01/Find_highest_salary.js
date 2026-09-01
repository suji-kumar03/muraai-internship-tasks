employees = [{ id: 1, name: "John", department: "IT", salary: 40000 }, { id: 2, name: "Jane", department: "HR", salary: 55000 }
]
function find_highest_salary() {

    let high_salary = employees[0].salary;

    employees.forEach(emp => {

        if (emp.salary > high_salary) {
            high_salary = emp.salary;
        }

    });

    return high_salary;
}

console.log(find_highest_salary());
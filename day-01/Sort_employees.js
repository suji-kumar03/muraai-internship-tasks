employees = [{ id: 1, name: "John", department: "IT", salary: 60000 }, { id: 2, name: "Jane", department: "HR", salary: 55000 }
]
function sort_employees() {
    employees.sort((a, b) => { return a.salary - b.salary });
    console.log(employees);
}
sort_employees();

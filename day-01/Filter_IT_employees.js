employees = [{ id: 1, name: "John", department: "IT", salary: 40000 }, { id: 2, name: "Jane", department: "HR", salary: 35000 }
]
function filter_it_employee(dept) {
    let new_arr = employees.filter(emp => {
        return emp.department == dept
    });
    return new_arr;
}
console.log(filter_it_employee('IT'));

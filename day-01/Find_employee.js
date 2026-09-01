employees = [{ id: 1, name: "John", department: "IT", salary: 40000 }, { id: 2, name: "Jane", department: "HR", salary: 35000 }
]
function find_employee(id) {
    let new_arr = employees.find(emp => {
        return emp.id == id;
    }); return new_arr;
}
console.log(find_employee(2));

let users = [
    {"id": 1, "name": "Sasha"},
    {"id": 3, "name": "Dks"},
    {"id": 2, "name": "dsfa"},
    {"id": 4, "name": "xlcma"},
    {"id": 67, "name": "ldfksm"}
]

let getUsers = () => {
    return users
}
let addUser = (name) => {
    users.push({"id": 89, "name": name})
}
let deleteUser = (id) => {
    users.filter(u => u.id !== id)
}

module.exports.getUsers = getUsers
module.exports.addUser = addUser
module.exports.deleteUser = deleteUser
const fs = require("fs");
const {readJsonFromFile, writeJsonToFile} = require("./fs-utils.ts");

let getUsers = () => {
    return readJsonFromFile("users.json");
};

let addUser = async (name: any) => {
    let users = await getUsers();
    users.push({id: 89, name: name});
    writeJsonToFile("users.json", users);
};

let deleteUser = async (id: any) => {
    let users = await getUsers();
    users.filter((u: any) => u.name !== id);
    writeJsonToFile("users.json", users);
};

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;

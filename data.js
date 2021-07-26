const fs = require("fs");
const { readJsonFromFile, writeJsonToFile } = require("./fs-utils.js");

let getUsers = () => {
  return readJsonFromFile("users.json");
};

let addUser = async (name) => {
  let users = await getUsers();
  users.push({ id: 89, name: name });
  writeJsonToFile("users.json", users);
};

let deleteUser = async (id) => {
  let users = await getUsers();
  users.filter((u) => u.name !== id);
  writeJsonToFile("users.json", users);
};

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;

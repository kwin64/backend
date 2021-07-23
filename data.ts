const fs = require("fs");

let getUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("users.json", function (err, buf) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(buf.toString()));
      }
    });
  });
};

let addUser = async (name) => {
  let users = await getUsers();
  users.push({ id: 89, name: name });

  return new Promise((resolve, reject) => {
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

let deleteUser = (id) => {
  users.filter((u) => u.name !== id);
};

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;

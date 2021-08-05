let { getUsers, deleteUser, addUser } = require("./data.js");

module.exports.usersController = async (req, res) => {
  if (req.method === "POST") {
    let result = await addUser("new");
    res.write(JSON.stringify({ success: true }));
    res.end();
  } else {
    let users = await getUsers();
    res.write(JSON.stringify(users));
    res.end();
  }
  if (req.method === "DELETE") {
    let users = await deleteUser("new");
  }
};



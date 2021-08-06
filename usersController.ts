// let {getUsers, deleteUser, addUser} = require("./data.ts")
// @ts-ignore
import {getUsers, deleteUser, addUser} from "./data.ts"

module.exports.usersController = async (req: any, res: any) => {
    if (req.method === "POST") {
        let result = await addUser("new");
        res.write(JSON.stringify({success: true}));
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



let { getUsers, deleteUser, addUser } = require('./data.ts')

module.exports.usersController = (req,res)=>{
    if (req.method === "POST") {
        addUser('new')
        res.write(JSON.stringify({ success: true }))
    } else {
        res.write(JSON.stringify(getUsers()))
    }
    if (req.method === 'DELETE') {
        deleteUser('Dks')
    } 
}

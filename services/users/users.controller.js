const User = require("./users.model")

const getUsers = async (_req, res) => {
    const users = await User.find()
    res.send(users)
}

const addUsers = async (req, res ) => {
    const new_user = await User.create( req.body )
    res.send( new_user)
}

const updateUsers = async (req, res ) => {
    const updated_user = await User.findOneAndUpdate( req.params.id, req.body, {new: true} )
    res.send( updated_user)
}

const deleteUsers = async (req, res ) => {
    const user_id = req.params.id
    await User.findByIdAndRemove( user_id )
    res.send(`user ${user_id} was deleted`)
}

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}
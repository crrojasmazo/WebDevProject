const User = require("./users.model")

const getUsers = async (_req, res) => {
    const users = await User.find()
    res.send(users)
}

const addUsers = async (req, res ) => {
    const new_user = await User.create( req.body )
    res.status(201).send( new_user)
}

const updateUsers = async (req, res ) => {
    const updated_user = await User.findOneAndUpdate( { _id: req.params.id }, req.body, {new: true} )
    res.status(200).send( updated_user)
}

const deleteUsers = async (req, res ) => {
    const user_id = req.params.id
    await User.findOneAndDelete(user_id)
    res.status(204).end()
}

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}
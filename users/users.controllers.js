const uuid = require('uuid')
const usersDB = []

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const data = usersDB.find(user => user.id === id)
    return data
}

const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    usersDB.push(newUser)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}
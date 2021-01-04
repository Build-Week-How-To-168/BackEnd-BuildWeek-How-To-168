const db = require("../dbConfig")

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove

}

function find() {
    return db('users').orderBy("id")
}

function findBy(filter) {
    return db("users").where(filter).orderBy("id")
}

function findById(id) {
    return db("users").where({id}).first()
}

function update(id, changes) {
    return db('users').where('id', id).update(changes).then((count) => (count > 0 ? get(id) : null));
}

 async function add(user) {
    try{
        const [id] = await db("users").insert(user, "id")
        return findById(id)
    } catch(error) {
        throw error;
    }
}

function remove(id) {
    return db('users').where('id', id).del()
}
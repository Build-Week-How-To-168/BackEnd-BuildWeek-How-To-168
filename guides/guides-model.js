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
    return db('guides').orderBy("id")
}

function findBy(filter) {
    return db("guides").where(filter).orderBy("id")
}

function findById(id) {
    return db("guides").where({id}).first()
}

function update(id, changes) {
    return db('guides').where('id', id).update(changes).then((count) => (count > 0 ? get(id) : null));
}

 async function add(guide) {
    try{
        const [id] = await db("guides").insert(guide, "id")
        return findById(id)
    } catch(error) {
        throw error;
    }
}

function remove(id) {
    return db('guides').where('id', id).del()
}



const User = require('./users/users-model.js')
const db = require("./dbConfig")

describe("user model", () => {
    describe("add", () => {
        beforeEach(async() => {
            await db("users").truncate();
        })
        it("should have the correct length after insertion", async() => {
            await User.add({first_name:"test1", last_name:"test1", email:"test1@yahoo.com",username: "test1", password: "test1"});
            await User.add({first_name:"test2", last_name:"test2", email:"test2@yahoo.com",username: "test2", password: "test2"});

            const users = await db("users");
            expect(users).toHaveLength(2);
        })
  
    })

    describe("findBy", () => {
        it("should return user based on any part of user object", async() => {
            const foundName = await User.findBy({username: "test1"});

            expect(foundName).toEqual([{first_name:"test1", last_name:"test1", email:"test1@yahoo.com",username: "test1", password: "test1", id:1}]);


        })
    })

    describe("remove", () => {
        it("should remove user", async() => {
            const deleted = await User.remove(1);

            expect(deleted).toBe(1);
        })
    })
})
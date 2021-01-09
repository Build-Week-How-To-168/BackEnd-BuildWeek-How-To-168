const Guide = require('./guides/guides-model')
const db = require("./dbConfig")

describe("guides model", () => {
    describe("add", () => {
        beforeEach(async() => {
            await db("guides").truncate();
        })
        it("should have the correct length after insertion", async() => {
            await Guide.add({title:"Testing the title", body:"Guide to the body test"});
            await Guide.add({title:"Testing the title2", body:"Guide to the body test2"});

            const guides = await db("guides");
            expect(guides).toHaveLength(2);
        })
  
    })

    describe("findBy", () => {
        it("should return a guide based on any part of guide object", async() => {
            const foundGuide = await Guide.findBy({title: "Testing the title"});

            expect(foundGuide).toEqual([{title:"Testing the title", body:"Guide to the body test", id:1, likes:0, user_id:null}]);


        })
    })

    describe("remove", () => {
        it("should remove a guide", async() => {
            const deleted = await Guide.remove(1);

            expect(deleted).toBe(1);
        })
    })
})
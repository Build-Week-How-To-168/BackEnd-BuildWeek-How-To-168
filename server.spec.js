const server = require("./server");
const request = require('supertest');
const userRouter = require('./auth/auth-router')
const db = require("./dbConfig")

const testUser = {
    first_name:"Peter",
    last_name: "Griffin",
    email:"familyguy@yahoo.com",
    username:"familyguy",
    password:"briangriffin"
};

const failUser = {
    first_name:"Bob",
    last_name:"Thomas",
    email:"loseraccount@gmail.com",
    username:"whatsupyall",
    password:undefined

}
describe('server.js', () => {

    test('that the testing environment is set up', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 ok', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
    describe("register api endpoint", () => {
        it("should return code 201 on testUser", async() => {
            await db("users").truncate();

            const res = await request(server).post("/api/auth/register").send(testUser);
            expect(res.status).toBe(201)
        });
        it("should return 500 for invalid user", async() => {
            const res = await request(server).post("/api/auth/register").send(failUser)
            expect(res.status).toBe(500)
        });
    });
    describe("login endpoint", () => {
        it("should return status code 200 on testUser", async() => {
            const res = await request(server).post("/api/auth/login").send(testUser); 
            expect(res.status).toBe(200)
        });
        it("should return 500 for invalid user", async() => {
            const res = await request(server).post("/api/auth/login").send(failUser)
            expect(res.status).toBe(401)
        });
    })
    

    
    
});
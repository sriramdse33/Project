const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');

//Assertions
chai.should();

chai.use(chaiHttp);

let ACCESS_TOKEN = '';

describe('users API ', () => {

    //POST LOGIN TO GET ACCESS TOKEN
    describe("POST /api/login", () => {
        it("It should get all the users ", (done) => {
            const login= {
                Username: "riddlet@hogwarts.com",
                Password: "123"
            }
            chai.request(server)
            .post("/api/login")
            .send(login)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('token')
                ACCESS_TOKEN = response.body.token
            done();
            })
        })
    })



// TEST GET ALL USERS
    describe("GET /api/users/all", () => {
        it("It should get all the users ", (done) => {
            chai.request(server)
            .get("/api/users/all")
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
            done();
            })
        })
    })

//




// //TEST POST ROUTES
let uid ;
describe("POST /api/register/", () => {
    it("It should add a user to the database", (done) => {
        const user = {
                "name": {"first": "Kamine", "last": "DDD"},
                "email": "gabilam12@gmail.com",
                "address": "601 Uni Drive",
                "password": "123"
        };
        chai.request(server)
        .post("/api/register/")
        .send(user)
        .end((error, response) => {
            response.should.have.status(200);
            response.should.be.a('object')

        done();
        }) //CHAI END
    })//IT END
}); //DESCRIBE END



// //TEST PATCH ROUTES
describe("PATCH /api/users/:id", () => {
    it("It should update a user given user ID ", (done) => {
        const uid = "6076428be45aff9c50515dbc"
        const user = {
            "mobile": 5126186687
        };
        chai.request(server)
        .patch("/api/users/"+uid)
        .send(user)
        .end((error, response) => {
            response.should.have.status(200);
            response.body.user.should.have.property('mobile').eq(user.mobile)
        done();
        })
    });

});




// //TEST DELETE ROUTES
// describe("DELETE /api/users/:id", () => {
//     it("It should get user by user ID ", (done) => {
//         const did = "6083743de518fa3795ef2b31"
//         chai.request(server)
//         .delete("/api/users/"+did)
//         .end((error, response) => {
//             response.should.have.status(200);
//         done();
//         })
//     });

// });



});



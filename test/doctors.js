const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');

//Assertions
chai.should();

chai.use(chaiHttp);


describe('Doctors API ', () => {

// TEST GET ALL DOCTORS
    describe("GET /api/doctors/", () => {
        it("It should get all the doctors ", (done) => {
            chai.request(server)
            .get("/api/doctors")
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(15);
            done();
            })
        })
    })

//

// // TEST GET DOCTOR BY ID

describe("GET /api/doctors/:id", () => {
    it("It should get doctor by doctor ID ", (done) => {
        const did = "607a25cd7d53bf68d31c5ba4"
        chai.request(server)
        .get("/api/doctors/"+did)
        .end((error, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('_id');
            response.body.should.have.property('qualifications');
            response.body.should.have.property('specialities');
            response.body.should.have.property('practiceStartDate');
            response.body.should.have.property('dob');
            response.body.should.have.property('address');
            response.body.should.have.property('email');
            response.body.should.have.property('_id').eq(did)
        done();
        })
    })



    it("It should throw a error when doctor ID not found", (done) => {
        const did = "607ba857b1f134234f056e3efd"
        chai.request(server)
        .get("/api/doctors"+did)
        .end((error, response) => {
            response.should.have.status(404);
        done();
        })
    })


});



//TEST PATCH ROUTES
describe("PATCH /api/doctors/:id", () => {
    it("It should update a doctor given doctor ID ", (done) => {
        const did = "607a26c17d53bf68d31c5ba5"
        const doctor = {
            "mobile": 5126186687
        };
        chai.request(server)
        .patch("/api/doctors/"+did)
        .send(doctor)
        .end((error, response) => {
            response.should.have.status(200);
            response.body.should.have.property('mobile').eq(5126186687)
        done();
        })
    });

});




});



import Chai, { should } from 'chai';
import ChaiHTTP from 'chai-http';
import { describe, it} from 'mocha';
import application from '../Server.js';
import StatusCode from '../configurations/StatusCode.js'

Chai.should();
Chai.use(ChaiHTTP);

const randomString = Math.random().toString(36).substring(7);

const testingNonExistingRoute = () => {
    describe('testingNonExistingRoute', () => {
        it('HTTP Call against a route that does not exist in API', done => {
            Chai.request(application)
                .get(`/${randomString}`)
                .end((request, response) => {
                    response.should.have.a.status(StatusCode.NOT_FOUND);
                    done();
                });
        });
    });
}

const getAllUsers = () => {
    describe('getAllUsers', () => {
    it('Expecting a return of all users in database', done => {
        Chai.request(application)
            .get('/user')
            .end((request, response) => {
                response.should.have.a.status(StatusCode.OK);
                response.body.should.be.a('array');
              //  response.body.length.should.be.a.eq(12);
                done();
            });
        });
    });
}

const updateUser = () => {
    const userID = '604e6ecaca86452912f9a626'
    describe('getAllUsers', () => {
    it('Should manipulate data of a current a object in the user entity ', done => {
        Chai.request(application)
            .put(`/user/${userID}`)
            .send( {username: 'Tester123' })
            .end((request, response) => {
                response.should.have.a.status(StatusCode.OK);       
                response.should.be.a('object');
                response.body.should.have.property('_id').eq(userID);
                done();  
                response.body.should.have.property('username').eq('Tester123');
            });
        });
    });
}

describe('TESTING THE USER API ENTITY', () => {
    testingNonExistingRoute();
    getAllUsers();
    updateUser();
});
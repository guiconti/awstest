should  = require('chai').should();
expect  = require('chai').expect;

supertest = require('supertest');
api = supertest('http://localhost:3300');

describe('Sample test', function(){

    it('Sample test', function(done){

        api
            .get('/')
            .end(function(err, res){

                if (err){

                    done(err);

                } else {

                    expect(res.status, 'Status').to.equal(200);
                    done();

                }
            });
    });
});
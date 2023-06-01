/**
 * THIS IS A TEST FILE
 */

const expect = require('chai').expect;
const getUserMW = require('../../MWs/user/getUser');

describe('getUser middleware', function(){
    it('should return a specific user', function(done){
        const mw = getUserMW({
            User:{
                findOne: (p1,cb)=>{
                    expect(p1).to.be.eql({_id:12})
                    cb(null, 'mockuser')
                }
            }
        });

        const resMock = {locals:{}};
        const reqMock = {params:{userid : 12}};
        const nextMock = function (err){
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({user:'mockuser'});
            done();
        }

        mw(reqMock,resMock,nextMock);
    });


    it('should return an error', function(done){
        const mw = getUserMW({
            User:{
                findOne: (p1,cb)=>{
                    expect(p1).to.be.eql({_id:12})
                    cb("nagynagyhiba", 'mockuser')
                }
            }
        });

        const resMock = {locals:{}};
        const reqMock = {params:{userid : 12}};
        const nextMock = function (err){
            expect(err).to.be.eql("nagynagyhiba");
            done();
        }

        mw(reqMock,resMock,nextMock);
    });
});
/**
 * THIS IS A TEST FILE
 */
const expect = require('chai').expect;
const delExpense = require('../../MWs/expense/delExpense');

describe('delExpense middleware', function(){
    it('should delete the given expense', function(done){
        const mw = delExpense({});
        const resMock = {locals:{
            expense: {
                remove: (cb) => {
                    cb(null)
                }
            }
        }};
        const reqMock = {params:{userid : 12}};
        const nextMock = function (err){
            expect(err).to.be.eql(undefined);
            done();
        }

        mw(reqMock,resMock,nextMock);
    });

    it('should get back the given error', function(done){
        const mw = delExpense({});
        const resMock = {locals:{
                expense: {
                    remove: (cb) => {
                        cb("e")
                    }
                }
            }};
        const reqMock = {params:{userid : 12}};
        const nextMock = function (err){
            expect(err).to.be.eql("e");
            done();
        }

        mw(reqMock,resMock,nextMock);
    });
});
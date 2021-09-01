import chai from 'chai'
import hello from '../../src/service/test_data'

const expect = chai.expect

describe('src/service/test_data', function () {
    context('When everything goes right', function () {
        describe('hello()', function () {
            it('Should return a string "hello world"', async function () {
                let result = await hello()
                expect(result).to.be.a('string')
                expect(result).to.equal('hello world')
            })
        })
    })
})

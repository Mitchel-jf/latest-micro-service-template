import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../src/index'

chai.use(chaiHttp)
const expect = chai.expect

describe('src/api/index', () => {

    describe('GET /test/data', () => {
        it('should respond with a 200 status code i.e a RESPONSE.passed object for a GET request', (done) => {
            chai.request(app)
                .get('/api/test/data')
                .send({
                    userId: '1234',
                    userName: 'Sammy Ayo the Boss',
                })
                .end((err, res) => {
                    let statusCode = res.status
                    let data = res.body
                    expect(statusCode).to.equal(200)
                    expect(data).to.be.an('object')
                    expect(data).to.have.property('code', 200)
                    // expect(data).to.have.deep.property('data', {message:'hello world'})
                    expect(data).to.have.property('success', true)
                    done()
                })
        })

        it('should respond with a 404 status code i.e a RESSPONSE.notFound object for a POST request', (done) => {
            chai.request(app)
                .post('/api')
                .end((err, res) => {
                    let statusCode = res.status
                    let data = res.body
                    expect(statusCode).to.equal(404)
                    expect(data).to.be.a('object')
                    expect(data).to.have.property('code', 404)
                    expect(data).to.have.property('success', false)
                    done()
                })
        })
    })
})
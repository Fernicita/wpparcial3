const supertest = require('supertest');

const app = require('../app');

describe("Probar el login de la aplicacion", ()=>{
    it("Debería de obtener un login con un user y un pass ok",(done)=>{
        supertest(app).post("/login")
        .send({"email":"dev@dev.com", "password":"dev"})
        .expect(200)
        .end(function(err,res){
            if(err){
                done(err);
            }else{
                done(); 
            }

        });
    });

    it("Deberia de rechazar un login con user y password incorrectos", (done)=>{
        supertest(app).post('/login')
        .send({"email": "dev@dev.com", "password": "1114"})
        .expect(403)
        .end(function(err, res){
            if(err){
                done(err)
            }else{
                done();
            }
        });
    });

});

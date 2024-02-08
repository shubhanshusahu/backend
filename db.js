const {createPool} = require('mysql')
const pool =  createPool({
    host :'localhost',
    user: 'root',
    password: '',
    database : 'tododb',

})
pool.query('select * from users', (err,result)=>{
    if(!err){
        console.log(result,'database connected!')
    }
    else{
        console.log(err,'error')
    }
})

module.exports = pool;
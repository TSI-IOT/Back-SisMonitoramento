const Device = require('../model/Device')
module.exports = async (id) =>{
     Device.remove({id:id})
        .then((data)=>{
            const resposta = data;
        });

     const resposta = await Device.remove({id:id});
}
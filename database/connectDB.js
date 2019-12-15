const config = require('config');
const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const uri = config.get('mongoURI');
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(uri, options);
        console.log("Conectado ao MongoAtlas!")
    } catch (e) {
        console.log("Problema na conexão com o banco!"+ e)
    }
};
const config = {
    mongo: {
        host: '3.16.158.6',
        port: 27017,
        database: 'ecomfort_prod',
        user: 'admin',
        password: 'ecomfort*2018',
        options: {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        },
    }    
}

module.exports = config;
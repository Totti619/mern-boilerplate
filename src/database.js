const
    URI = 'mongodb://localhost/mern-tasks'
    mongoose = require('mongoose')
;

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected!'))
    .catch(err => console.error(err))
    ;

module.exports = mongoose;
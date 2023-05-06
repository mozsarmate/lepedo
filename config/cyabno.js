var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/cyabno', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 }).then(
    ()=> console.log("connected")
);
//koszi a tippet, a localhost helyett a spec ip patikan megy

module.exports = mongoose;
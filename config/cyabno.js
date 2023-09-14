var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL).then(
    ()=> console.log("connected to new")
);
//koszi a tippet, a localhost helyett a spec ip patikan megy

module.exports = mongoose;
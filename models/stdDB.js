const mongoose = require('mongoose');

const HostSchema = new mongoose.Schema(
    {


        'name': {
            type:String
        }


    },

);
// module.exports = mongoose.models.rx || mongoose.model("rx", rxf);

exports.host = mongoose.models.stdDB || mongoose.model('stdDB', HostSchema);
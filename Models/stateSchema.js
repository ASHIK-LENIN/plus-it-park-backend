const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    local: {
        type: {
            type: String,
            required: [true, 'Please enter local area'],
            enum: {
                values: ['panchayath', 'municipality', 'corporation']
            }
        }
    },
    assembly: {
        name: {
            type: String,
            required: [true, 'Please enter assembly name']
        },
        locals: [{
            type: String
        }]
    },
    constituency: {
        name: {
            type: String,
            required: [true, 'Please enter constituency name']
        },
        assemblies: [{
            type: String
        }]
    },
    district: {
        name: {
            type: String,
            required: [true, 'Please enter district name']
        },
        constituencies: [{
            type: String
        }]
    },
    districts: [{
        type: String,
        required: [true, 'Please enter district']
    }]
});

module.exports = mongoose.model('State', stateSchema);

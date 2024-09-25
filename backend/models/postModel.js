const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    visitDate: {
        type: Date,
        required: true,
    },
    industryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Industry',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Post', PostSchema);

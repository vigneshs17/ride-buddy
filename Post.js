var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: { type: String, required: true, default: 'John Appleseed' },
    from: { type: String, required: true },
    to: { type: String, required: true },
    dateTime: { type: Date },
    fee: { type: Number },
})

module.exports = mongoose.model('Post', PostSchema);

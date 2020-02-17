import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for book
 */
const Bookmodel = new Schema({
    title: {
        type: String,
        required: "What is the book's title?"
    },
    author: {
        type: String,
        required: "Who is the book's author?"
    },
    releasedOn: {
        type: String,
        required: "What is the Book's release date?"
    },
    publisher: {
        type: String,
        required: "Who is the publisher of the book?"
    },
    releaseNumber: {
        type: Number,
        default: 1
    },
    genre: {
        type: String,
        required: "What is the book's genre?"
    },
    awards: {
        type: String,
        required: "Which awards have the book won?"
    },
    price: {
        type: Number,
        required: "What is the price of the book?"
    }
});

export default mongoose.model('Book', Bookmodel);
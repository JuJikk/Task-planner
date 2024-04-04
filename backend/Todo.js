import mongoose, { Document } from "mongoose";

// export interface ITodo extends Document {
//     title: string;
// }

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    done: {type: Boolean, required: true}
});

export default mongoose.model('TodoSchema', TodoSchema);
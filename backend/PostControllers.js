import TodoSchema from "./Todo.js";

class PostController {
    async create(req, res) {
        try {
            const { title, done } = req.body;
            const todo = await TodoSchema.create({ title, done });
            res.json(todo);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const todos = await TodoSchema.find();
            return res.json(todos);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const todo = req.body[0];
            if (!req.body[0]._id) {
                return res.status(400).json({ message: "ID not found" });
            }
            const updatedTodo = await TodoSchema.findByIdAndUpdate(
                todo._id,
                todo
            );
            return res.json(updatedTodo);
        } catch (error) {
            console.error("An error occurred while updating todo:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }


    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedTodo = await TodoSchema.findByIdAndDelete(id);
            return res.json(deletedTodo);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();

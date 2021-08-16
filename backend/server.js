const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Todo.find((error, todo) => {
    if (error) {
      console.log(error);
    } else {
      res.json(todo);
    }
  });
});

app.post("/create", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.get(":/id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (error, todo) => {
    res.json(todo);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27019/todoList", {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connection establish succesfully");
});

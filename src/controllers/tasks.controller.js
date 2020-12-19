// Database connection
import { connect } from "../database";
import { ObjectId } from "mongodb";

const list = async (req, res) => {
  //console.log(req.body);
  const db = await connect();
  let result;
  try {
    result = await db.collection("tasks").find().toArray();
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

  res.send({ data: result });
  //res.json(result);
};

const getTask = async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  let result;
  try {
    result = await db
      .collection("tasks")
      .findOne({ _id: ObjectId(id) })
      .catch((error) => {
        error.statusCode = 400;
        next(error);
      });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

  res.send({ data: result, message: "successful" });
};

const create = async (req, res, next) => {
  const db = await connect();
  const task = { title: req.body.title, description: req.body.description };
  let result;

  try {
    result = await db.collection("tasks").insert(task);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

  res.send({ message: "created task" });
};

const update = async (req, res) => {
  const { id } = req.params;
  const updateTask = {
    title: req.body.title,
    description: req.body.description,
  };

  const db = await connect();
  let result;

  try {
    result = await db
      .collection("tasks")
      .updateOne({ _id: ObjectId(id) }, { $set: updateTask });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

  res.send({ message: `Task ${id} upadated` });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  let result;
  try {
    result = await db.collection("tasks").deleteOne({ _id: ObjectId(id) });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

  res.send({ message: `Task ${id} deleted`, result });
};

module.exports = {
  list,
  getTask,
  create,
  update,
  remove,
};

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;




// const DB_URL = process.env.DB_URL;

// mongoose.connect(DB_URL).then( () => {
//     console.log(`mongodb is connected..`)
// }).catch( (error) => {
//     console.log(error);
// })


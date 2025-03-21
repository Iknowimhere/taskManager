const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const taskRoutes = require("./routes/task.routes");
const app = express();
let PORT = process.env.PORT || 8082;
let DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/task-manager';
mongoose.connect(DB_URI).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
});


app.use(express.json());
app.use(cors());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port 8082');
})
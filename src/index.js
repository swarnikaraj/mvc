const express = require('express');
const userController = require('./controller/user.controller');
const studentController = require('./controller/student.controller');
const evaluationController  = require('./controller/evaluation.controller');

const app = express();

app.use(express.json());

app.use("/users",userController);
app.use("/students",studentController);
app.use("/evaluations",evaluationController);

module.exports = app;
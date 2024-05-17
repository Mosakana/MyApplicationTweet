const express = require("express");
const userRouter = require("../router/user");
const postRouter = require("../router/post");
const friendRouter = require("../router/friend");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;



app.use("/users", userRouter);
app.use("/users", postRouter);
app.use("/users", friendRouter);

app.listen(8000, () => {
  console.log("server set up");
})

app.listen(PORT, () => {
  console.log(`server started up on port ${PORT}`);
});


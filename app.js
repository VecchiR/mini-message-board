const express = require("express");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");


const app = express();

const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});


app.get('/', indexRouter);
const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");


const app = express();

const PORT = 3000;

const links = [
    { href: "/", text: "Index" },
    { href: "/new", text: "New message" },
];


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log('server running on port', PORT);
});


// Set the "links" array as a local variable for all views
app.use((req, res, next) => {
    res.locals.links = links;
    next();
});

app.use(express.urlencoded({ extended: true }));

app.use('/new', newRouter);
app.use('/message', messageRouter);
app.use('/', indexRouter);

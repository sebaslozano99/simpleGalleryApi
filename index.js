const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const galleryRoute = require("./routes/galleryRoutes.js");
const userRoute = require("./routes/userRoutes.js");



const app = express();


//SETTINGS



//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(express.static("uploads")); //allow access to the Fronted to all the pictures saved inside 'uploads' folder



//ROUTES
app.use("/api/auth", userRoute);
app.use("/api", galleryRoute);



const PORT = 5000;


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});
const path = require("path");
const express = require("express");
const router = express.Router()
const cors = require("cors")
const nodemailer = require("nodemailer")

const port = process.env.PORT || 5500

// create express app
const app = express();

// add middlewares
app.use(cors())
app.use(express.json())
app.use("/", router)
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(port, () => {
    console.log("server started on port " + port);
});

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "michaeldimimu@gmail.com",
        pass: "jdzmqkoscurnyjec",
    }
})

contactEmail.verify(error => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send")
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const mail = {
        from: name,
        to: "michaeldimimu@gmail.com",
        subject: "Contact form submission",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" })
        } else {
            res.json({ status: "Message Sent" })
        }
    })
})
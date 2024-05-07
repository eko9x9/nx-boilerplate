import express from "express";
const app = express()
const PORT = process.env.PORT || 2000;

app.get("/", (_, res) => {
    res.json({
        msg: "ok!"
    })
})

app.listen(PORT, () => {
    console.log("Server listen on port "+ PORT)
});
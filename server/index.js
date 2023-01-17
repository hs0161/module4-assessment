const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postCompliment, updateCompliment, deleteCompliment, getComplimentList } = require('./controller');

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/compliment", postCompliment);

app.put("/api/compliment/:id", updateCompliment);

app.delete("/api/compliment/:id", deleteCompliment);

app.get("/api/complimentList", getComplimentList);


app.listen(4000, () => console.log("Server running on 4000"));
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put (
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        { headers: {"private-key": "d8b5dd37-5525-4595-a425-5ac3cf39f86c"}}
    )
    return res.status(r.status).json(r.data);

  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);


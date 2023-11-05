const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   try {
//     const r = await axios.put(
//       "https://api.chatengine.io/users/",
//       { username: username, secret: username, first_name: username },
//     //   { headers: { "private-key": "52de048d-833e-4a32-a58f-8e1871ca33f7" } }
//       { headers: { "private-key": "8c63dbce-80a7-455a-890b-9368d16e1dcb" } }
//       );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     // return res.status(e.response.status).json(e.response.data);
//     return res.status(e.response.status).json(e.response.data);
//   }
// });
app.post("/authenticate", async (req, res) => {
  try {
    const username = req.body.username; // Assuming "username" is in the request body
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username, secret: username, first_name: username },
      { headers: { "private-key": "52de048d-833e-4a32-a58f-8e1871ca33f7" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the case where there was no response object (e.g., network error)
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});
app.listen(3001);

import express from "express";

import { rtdb } from "../src/realdatabase";
import { json } from "body-parser";
import * as cors from "cors";

const port = 8001;
const app = express();

/* app.use(json());
app.use(cors());

app.post("/messages", function (req, res) {
  const chatroomRef =  rtdb.ref("/chatrooms/messages");
  chatroomRef.push({
    nombre: "prueba",
    message: "prueba",
  }, function(){
    res.json("listo")
  })

});  */

app.listen(port, () => {
  console.log("Server connected at http://localhost:${port}");
});


console.log("Server listo") 
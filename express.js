const express = require("express");
const addEventRoutes = require("./event-routes");
const server = express();
const port = 3000;

server.use(express.json());
addEventRoutes(server);

server.listen(port, () => {
  console.log("server running on port 3000");
});

// server.get("*", (req, res) => {
//   console.log("return information here", req.method, req.ip);
//   res.send("hello express");
//   res.status(200);
// });

// server.post("/products", (req, res) => {
//   console.log("post information here", req.method);
//   //   res.send("hello express");
//   res.status(200).send({ ok: true });
// });
// server.get("/events", (req, res) => {
//   //   console.log("return information here", req.method, req.ip);
//   //   res.send("hello express");
//   //   res.status(200);

//   res.send(events);
// });

// server.post("/events", (req, res) => {
//   try {
//     console.log("post information here", req.method);
//     req.push(events);
//     //   res.send("hello express");
//     res.status(200).send({ ok: true });
//   } catch {
//     res.status(400).send({ ok: false });
//   }
// });

// server.get("*", (req, res) => {
//   console.log("return information here", req.method);
//   res.send("hello express");
// });

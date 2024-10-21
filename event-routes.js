//For handling events👇
let events = [];
let organizers = [];
let participants = [];

module.exports = (server) => {
  server.get("/events", (req, res) => {
    if (events.length != 0) {
      res.send(events);
    } else {
      return res.status(404).send("No events to be listed");
    }
  });

  server.get("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    if (events[id]) {
      res.status(200);
      res.send(events[id]);
    } else {
      res.status(404);
      res.send("Event not found");
      res.end();
    }
  });
  server.post("/events", (req, res) => {
    events.push(req.body);
    if (!req.body.name.length) {
      throw new Error("Name is required");
    }
    res.status(201);
    res.send(events);
    console.log(events);
  });

  server.patch("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    events[id] = {
      ...events[id],
      ...req.body,
    };
  });
  server.delete("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    events[id] = undefined;
    events = events.filter((event) => !!event);
    res.status(200);
    res.send(events);
  });

  //For handling organizers👇

  server.get("/organizers", (req, res) => {
    res.send(organizers);
  });

  server.get("/organizers/:id", (req, res) => {
    const id = Number(req.params.id);
    if (organizers[id]) {
      res.status(200);
      res.send(organizers[id]);
    } else {
      res.status(404);
      res.send("Event not found");
      res.end();
    }
  });
  server.post("/organizers", (req, res) => {
    organizers.push(req.body);
    if (!req.body.name.length) {
      throw new Error("Name is required");
    }
    res.status(201);
    res.send(organizers);
  });

  server.patch("/organizers/:id", (req, res) => {
    const id = Number(req.params.id);
    organizers[id] = {
      ...organizers[id],
      ...req.body,
    };
  });
  server.delete("/organizers/:id", (req, res) => {
    const id = Number(req.params.id);
    organizers[id] = undefined;
    if (!organizers[id]) {
      return res.status(404).send("Organizer not found");
    }
    organizers = organizers.filter((event) => !!event);
    res.status(200);
    res.send(organizers);
  });

  //For handling participants👇

  server.get("/participants", (req, res) => {
    res.send(participants);
    console.log(participants);
  });

  server.get("/participants/:id", (req, res) => {
    const id = Number(req.params.id);
    if (participants[id]) {
      res.status(200);
      console.log(participants);
      res.send(participants[id]);
    } else {
      res.status(404);
      res.send("Event not found");

      res.end();
    }
  });
  server.post("/participants", (req, res) => {
    participants.push(req.body);
    if (!req.body.name.length) {
      throw new Error("Name is required");
    }
    console.log(participants);
    res.status(201);
    res.send(participants);
  });

  server.patch("/participants/:id", (req, res) => {
    const id = Number(req.params.id);
    participants[id] = {
      ...participants[id],
      ...req.body,
    };
  });
  server.delete("/participants/:id", (req, res) => {
    const id = Number(req.params.id);
    participants[id] = undefined;
    participants = participants.filter((event) => !!event);
    res.status(200);
    res.send(participants);
  });
};

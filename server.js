const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// health for k8s probes
app.get("/health", (req, res) => res.status(200).send("ok"));

// root
app.get("/", (req, res) => {
  res.json({
    service: "eks-senior-api",
    status: "running",
    time: new Date().toISOString(),
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`server listening on 0.0.0.0:${port}`);
});

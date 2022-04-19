import app from "./app";

app.get("/", (req, res) => {
  res.send("api success");
});

app.listen(app.get("port"), () =>
  console.log(`app listen in port ${app.get("port")}`)
);

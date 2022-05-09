import app from "./app";

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ok",
  });
});

app.listen(app.get("port"), () =>
  console.log(`app listen in port ${app.get("port")}`)
);

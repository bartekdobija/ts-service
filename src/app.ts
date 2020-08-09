import process from "process";
import app from "./server";

process.on("SIGINT", () => {
  process.exit(0);
});

const port = Number(process.env.API_PORT) || 8080;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

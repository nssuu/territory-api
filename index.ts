import express, { Request, Response } from "express";
import houses from "./data/houseData";

const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: (
      origin: string,
      callback: (err: Error | null, origins: string[]) => void,
    ) => {
      callback(null, [origin]);
    },
  }),
);

app.use(express.json());

app.get("/houses", (req: Request, res: Response) => {
  console.log(`${req.method} ${req.url}`);

  const { name } = req.query;

  if (name) {
    const filteredHouses = houses.filter((house) =>
      house.name.toLowerCase().includes(name.toString().toLowerCase()),
    );
    res.json(filteredHouses);
  } else {
    res.json(houses);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
  console.log(`Check house list on port http://localhost:${PORT}/houses`);
  console.log("Press CTRL + C to stop server");
});

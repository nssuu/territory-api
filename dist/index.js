"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const houseData_1 = __importDefault(require("./data/houseData"));
const cors = require("cors");
const app = (0, express_1.default)();
const PORT = 4000;

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, [origin]);
    },
  }),
);

app.use(express_1.default.json());

app.get("/houses", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  const { name } = req.query;
  if (name) {
    const filteredHouses = houseData_1.default.filter((house) =>
      house.name.toLowerCase().includes(name.toString().toLowerCase()),
    );
    res.json(filteredHouses);
  } else {
    res.json(houseData_1.default);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
  console.log(`Check house list on port http://localhost:${PORT}/houses`);
  console.log("Press CTRL + C to stop server");
});

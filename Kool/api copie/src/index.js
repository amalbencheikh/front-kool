import express from "express";
import mongoose from "mongoose";
import config from "./config/config";
import middlewaresConfig from "./config/middlewares";

mongoose.Promise = global.Promise;
// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(config.MONGODB_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
import ApiRoutes from "./routes";

const app = express();

middlewaresConfig(app);

app.use("/api", ApiRoutes);

var server = app.listen(config.PORT, () => {
  console.log(`Server ready at ${config.HOST}`);
});

import winston from "winston";
import { app } from "./index.js";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const customLabelFormat = winston.format((info, opts) => {
  if (info.level === "error") {
    info.label = "logs-error-api";
  } else {
    info.label = "logs-api";
  }

  return info;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs-error-api.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs-api.log" }),
  ],
  format: combine(customLabelFormat(), timestamp(), myFormat),
});

app.listen(3333, () => {
  logger.info("API is running on port 3333! 🚀");
});

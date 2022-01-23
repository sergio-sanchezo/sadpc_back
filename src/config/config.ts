export default {
  jwtSecret: process.env.JWT_SECRET || "secretToken",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/sadpc",
    USER: process.env.MONGODB_USER || "",
    PASSWORD: process.env.MONGODB_PASSWORD || "",
  },
};

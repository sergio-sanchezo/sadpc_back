import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

// auth routes
import authRoutes from "./routes/auth.routes";

// all routes
import cpuRoutes from "./routes/cpu.routes";
import diskRoutes from "./routes/disk.routes";
import displayRoutes from "./routes/display.routes";
import graphicsRoutes from "./routes/graphics.routes";
import heatsinkRoutes from "./routes/heatsink.routes";
import memoryRoutes from "./routes/memory.routes";
import motherboardRoutes from "./routes/motherboard.routes";
import buildPcRoutes from "./routes/build_pc.routes";

// initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// MiddleWares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// auth Router
app.use(authRoutes);

// All Routers
app.use("/api/cpu", cpuRoutes);
app.use("/api/disk", diskRoutes);
app.use("/api/display", displayRoutes);
app.use("/api/graphics", graphicsRoutes);
app.use("/api/heatsink", heatsinkRoutes);
app.use("/api/memory", memoryRoutes);
app.use("/api/motherboard", motherboardRoutes);
app.use("/api/build_pc", buildPcRoutes);

export default app;

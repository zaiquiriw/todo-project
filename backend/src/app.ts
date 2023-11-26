import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();

app.use(express.json());

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());

app.use(todoRoutes);

const uri: string = 'mongodb://localhost:27017/taskDB';

const options = {};

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        throw error;
    });
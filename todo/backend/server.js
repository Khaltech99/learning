import app from "./app.js";
import { connectDB } from "./config/database.js";

const port = process.env.PORT || 50001;
connectDB();
app.listen(port, () => console.log(`running at port ${port}`));

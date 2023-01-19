import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDb = async() => {
    await mongoose.connect("mongodb://0.0.0.0:27017/energy-crud")
}

export default connectDb
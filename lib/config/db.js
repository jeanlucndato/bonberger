import mongoose from "mongoose";


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://eglisebb:XxYyapt41.@cluster0.hvlrpf9.mongodb.net/BonBerger-app')
    console.log("DB Connected");

}
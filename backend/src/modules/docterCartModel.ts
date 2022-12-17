import mongoose from "mongoose";

export const docterCartModel = mongoose.model<{
    docter: Object,
    startTime: number,
    user: mongoose.Schema.Types.ObjectId
}>("docterCart", new mongoose.Schema({
    docter: {
        Object,
    },
    startTime: {
        type: Number,
        default: 0
    },
    user: mongoose.Schema.Types.ObjectId
}));
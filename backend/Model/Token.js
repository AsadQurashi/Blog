import mongoose from "mongoose";

const TokenSchema =new mongoose.Schema({
    token: {
        type: String,
        require: true
    }
});

export const Token = mongoose.model('Token', TokenSchema);
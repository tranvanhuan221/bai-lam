import mongoose from "mongoose";
const productSchema = new mongoose.Schame({
    name:{
        type:String,
        require:true,
        minLength:3,
    },
    price:{
        type:Number,
    },
});
export default mongoose.modul("Product", productSchema);
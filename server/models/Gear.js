import mongoose from 'mongoose';

const GearSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    desc: {
        type:String,
        required:true
    },
  
});

export default mongoose.model("Gear", GearSchema)
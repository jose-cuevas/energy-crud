import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    nombre:{
        type:String,
        trim: true,
        required: true
    },
    apellido1:{
        type:String,
        trim: true,
    },
    apellido2:{
        type:String,
        trim: true,
    },
    documento:{
        type: String,
        required: true,
        unique: true
    },
    direccion:{
        type:String,
    },    
    telefono:{
        type: Number,
        required: true,
        unique: true
    }
},
{
    timestamps: true        
}

);

const UserModel = model("user", UserSchema)

export default UserModel
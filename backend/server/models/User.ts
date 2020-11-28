import {model, Schema, Document} from 'mongoose';

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
});

export interface UserDocument extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export default model<UserDocument>('User', UserSchema);
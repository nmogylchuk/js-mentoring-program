import { model, Types, Schema } from 'mongoose';
import User from './User';
import { TaskDocument } from '../core/interfaces/task.interface';

const TaskSchema = new Schema({
  description: String,
  user: { type: Types.ObjectId, ref: User },
});

TaskSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

export default model<TaskDocument>('Task', TaskSchema);

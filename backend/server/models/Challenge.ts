import { model, Types, Schema } from 'mongoose';
import User from './User';
import Achievement from './Achievement';
import { ChallengeDocument } from '../core/interfaces/challenge.interface';

const ChallengeSchema = new Schema({
  state: {type: String, required: true},
  description: String,
  startDate: {type: String, required: true},
  tasksOrder: [{type: Types.ObjectId, ref: 'Task'}],
  tasksStatus: {state: String, updated: String},
  achievementsStatus: {state: String, updated: String},
  achievements: [{type: Types.ObjectId, ref: Achievement}],
  user: {type: Types.ObjectId, ref: User},
});

ChallengeSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

export default model<ChallengeDocument>('Challenge', ChallengeSchema);

import { model, Types, Schema } from 'mongoose';
import User from './User';
import { AchievementDocument } from '../core/interfaces/achievement.interface';

const AchievementSchema = new Schema({
  description: String,
  image: String,
  user: { type: Types.ObjectId, ref: User },
});

AchievementSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

export default model<AchievementDocument>('Achievement', AchievementSchema);

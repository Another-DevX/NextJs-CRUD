import { Schema, model, models } from 'mongoose';

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
      trim: true,
      maxlength: [40, 'Title can not be more than 40 characters'],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, 'Description can not be more than 200 characters'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Task || model('Task', taskSchema);

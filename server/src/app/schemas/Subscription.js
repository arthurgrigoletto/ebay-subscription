import mongoose, { Schema } from 'mongoose';

const SubscriptionSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    keywords: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    interval: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Subscription', SubscriptionSchema);

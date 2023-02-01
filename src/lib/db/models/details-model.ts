import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const detailSchema = new Schema(
  {
    symbol: {
      type: String,
      unique: true,
      lowercase: true,
    },
    address: {
      type: String,
    },
    category: {
      type: String,
    },
    tvl: {
      type: Number,
    },
    change_1h: {
      type: Number,
    },
    change_1d: {
      type: Number,
    },
    change_7d: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const Detail = mongoose.model('detail', detailSchema);

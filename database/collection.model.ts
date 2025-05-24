import { model, models, Schema } from "mongoose";

interface ICollection {}

const CollectionSchema = new Schema<ICollection>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  {
    timestamps: true,
  },
);

const Collection =
  models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;

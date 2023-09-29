import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    userName: String,
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

// export  Topic;
const signinSchema = new Schema(
  {
    userName: String,
    email: String,
    password: String,
    role: String
  },
  {
    timestamps: true,
  }
);

export const Users = mongoose.models.Users || mongoose.model("Users", signinSchema);

// export default Users;

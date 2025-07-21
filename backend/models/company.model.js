import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, // URL to company logo
    },
    industry: {
      type: String, // e.g., IT, Finance, Healthcare
    },

    size: {
      type: String, // e.g., "10-50", "50-200", "500+"
    },

    socials: {
      linkedin: { type: String },
      twitter: { type: String },
      github: { type: String },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const Company = mongoose.model("Company", companySchema);

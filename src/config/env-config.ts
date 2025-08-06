import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  serverURL: process.env.NEXT_PUBLIC_IMAGE_URL,
  baseURL: process.env.BASE_API_URL,
  imageURL: process.env.NEXT_PUBLIC_IMAGE_URL,
};

export const BASE_URL = process.env.BASE_API_URL;
export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

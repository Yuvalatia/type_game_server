import dotenv from 'dotenv';

dotenv.config();

const config = {
  SERVER_REST_PORT: process.env.SERVER_REST_PORT,
};

export default config;

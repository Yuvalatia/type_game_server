import dotenv from 'dotenv';

dotenv.config();

const config = {
  SERVER_REST_PORT: process.env.SERVER_REST_PORT,
  LOGS_PATH: process.env.LOGS_PATH || '/logs',
};

export default config;

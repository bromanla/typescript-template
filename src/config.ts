import { IConfig } from '@interfaces/IConfig';

import dotenv from 'dotenv';

const { error } = dotenv.config();

if (error) {
  throw new Error('Couldn\'t find .env file');
}

const ConfigInstance : IConfig = {
  token: process.env.TOKEN ?? '',
  debug: process.env.NODE_ENV === 'production'
};

export default ConfigInstance;

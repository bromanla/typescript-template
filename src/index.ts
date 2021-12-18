import logger from '@logger';
import config from '@config';

logger.info(`Debug: ${config.debug ? 'True' : 'False'}`);

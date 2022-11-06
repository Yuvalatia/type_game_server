import config from './config';
import expressApp from './protocols/rest/express';

expressApp.listen(config.SERVER_REST_PORT, () => console.log(`Server run ${config.SERVER_REST_PORT}`));


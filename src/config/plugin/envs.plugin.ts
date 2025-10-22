import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT : env.get('PORT').required().asPortNumber(),
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
    MMAILER_SECREET_KEY: env.get('MAILER_SECREET_KEY').required().asString(),

    
}


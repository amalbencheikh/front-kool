import dotenv from 'dotenv';
dotenv.config();

export default {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	HOST: process.env.HOST,
	MONGODB_URI: process.env.MONGODB_URI,
	FRONT_URL: process.env.FRONT_URL,
	EMAIL_HOST: '',
	EMAIL_PORT: 0,
	EMAIL_USERNAME: 'noreply@kool.net',
	EMAIL_PASSWORD: '',
	EMAIL_FROM: 'noreply@kool.net',
	ACCESS_TOKEN_SECRET: 'access-token-secret',
	ACCESS_TOKEN_EXPIRES_IN: '30d'
};

/**
 *
 */

const config = {
	DB_PORT: Number(process.env.PORT) || 5432,
	DB_HOST: process.env.DB_HOST || "localhost",
	DB_USERNAME: process.env.DB_USERNAME || "postgres",
	DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
	DB_NAME: process.env.DB_NAME || "postgres",
};

export default config

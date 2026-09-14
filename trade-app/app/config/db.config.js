module.exports = {
  HOST: process.env.DB_HOST || "postgresdb",
  USER: process.env.DB_USER || "postgres",
  PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB: process.env.DB_NAME || "bezkoder_db",
  port: parseInt(process.env.DB_PORT) || 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
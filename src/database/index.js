import mysql from 'promise-mysql';

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dataString: process.env.DB_DATA_STRING,
};

const getConnection = async () => {
  const pool = await mysql.createPool(dbConfig);
  return await pool.getConnection();
};

export default getConnection;

import sql from 'mssql';

const config: sql.config = {
  server: 'localhost\\SQLEXPRESS',
  database: 'versao_teste25',
  options: {
    trustServerCertificate: true
  },
  authentication: {
    type: 'default',
    options: {
      userName: 'johan', 
      password: '123456',
    }
  }
};


const pool = new sql.ConnectionPool(config);

// Exporte a função de query
export const query = async (queryString: string) => {
  try {
    await pool.connect();
    const result = await pool.request().query(queryString);
    return result.recordset;
  } catch (err) {
    console.error("Erro na função de query:", err);
    throw err;
  } finally {
    pool.close();
  }
};

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

let pool: sql.ConnectionPool;

const getPool = async () => {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
};

// Função de query com parâmetros
export const query = async (queryString: string, params?: { name: string, type: any, value: any }[]) => {
  try {
    const pool = await getPool();
    const request = pool.request();

    if (params) {
      for (const param of params) {
        request.input(param.name, param.type, param.value);
      }
    }

    const result = await request.query(queryString);
    return result.recordset;
  } catch (err) {
    console.error("Erro na função de query:", err);
    throw err;
  }
};

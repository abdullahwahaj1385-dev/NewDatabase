import  mysql  from 'mysql2/promise';


export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "wahaj1234",
  database: "utentedatabase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const { Pool, Client } = require("pg");

const pool = new Pool({
  host: "localhost",
  database: "postgres",
  user: "postgres",
  password: "mysecretpassword",
  port: 5432
});

async function main() {
  try {
    await pool.query(`create table kv(key text, value text);`);
    await pool.query(
      `insert into kv(key, value) values('emil', 'emil.pirfalt@jayway.com');`
    );
  } catch (e) {
    console.log(e);
  }

  const res = await pool.query("SELECT * from kv;");
  console.log(res.rows[0]); // Hello world!
  await pool.end();
}

main().catch(console.log);

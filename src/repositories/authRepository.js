const { pool } = require('../config/db');

exports.getUsuarioByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows.shift();
}



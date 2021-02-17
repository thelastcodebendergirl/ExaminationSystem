const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'hatice',
	host: 'examination-system-db.postgres.database.azure.com',
	database: 'examinationdb',
	password: 'CloudComputing2020_2021',
	port: 5432,
});
const getUsers = () => {
	return new Promise(function (resolve, reject) {
		pool.query('SELECT * FROM user_db ORDER BY id ASC', (error, results) => {
			console.log('getUsers');
			if (error) {
				reject(error);
			}
			resolve(results.rows);
		});
	});
};
const getStudent = () => {
	return new Promise(function (resolve, reject) {
		pool.query(
			'SELECT * FROM student ORDER BY user_id ASC',
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			}
		);
	});
};
const createUser = (body) => {
	return new Promise(function (resolve, reject) {
		const { fistname, lastname, user_id, password, isStudent } = body;
		pool.query(
			'INSERT INTO user_db (firstname,lastname,user_id,password) VALUES ($1, $2,$3,$4) RETURNING *',
			[fistname, lastname, user_id, password],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(`A new user has been added added: ${results.rows[0]}`);
			}
		);
		if (isStudent) {
			pool.query(
				'INSERT INTO student(firstname,lastname,user_id,password) VALUES ($1, $2,$3,$4) RETURNING *',
				[fistname, lastname, user_id, password],
				(error, results) => {
					if (error) {
						reject(error);
					}
					resolve(`A new user has been added added: ${results.rows[0]}`);
				}
			);
		} else {
			pool.query(
				'INSERT INTO teacher(firstname,lastname,user_id,password) VALUES ($1, $2,$3,$4) RETURNING *',
				[fistname, lastname, user_id, password],
				(error, results) => {
					if (error) {
						reject(error);
					}
					resolve(`A new user has been added added: ${results.rows[0]}`);
				}
			);
		}
	});
};

module.exports = {
	getUsers,
	createUser,
	getStudent,
};

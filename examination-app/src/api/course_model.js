const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'hatice',
	host: 'examination-system-db.postgres.database.azure.com',
	database: 'examinationdb',
	password: 'CloudComputing2020_2021',
	port: 5432,
});
const getCoursesForTeacher = (id) => {
	return new Promise(function (resolve, reject) {
		pool.query(
			'SELECT * FROM course  WHERE teacher_id = $1',
			[id],
			' ORDER BY id ASC',
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			}
		);
	});
};
const getCoursesForStudent = (id) => {
	return new Promise(function (resolve, reject) {
		pool.query(
			'SELECT * FROM takes  WHERE student_id = $1',
			[id],
			' ORDER BY id ASC',
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(results.rows);
			}
		);
	});
};
const getStudent = () => {
	return new Promise(function (resolve, reject) {
		pool.query('SELECT * FROM student ORDER BY id ASC', (error, results) => {
			if (error) {
				reject(error);
			}
			resolve(results.rows);
		});
	});
};
const createCourse = (body) => {
	return new Promise(function (resolve, reject) {
		const { name, teacher_id } = body;
		const { student_id_list } = body;
		pool.query(
			'INSERT INTO course (name ,teacher_id) VALUES ($1, $2) RETURNING *',
			[name, teacher_id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(`A new user has been added added: ${results.rows[0]}`);
			}
		);
		pool.query(
			'INSERT INTO takes (name ,student_id) VALUES ($1, $2) RETURNING *',
			[name, teacher_id],
			(error, results) => {
				if (error) {
					reject(error);
				}
				resolve(`A new user has been added added: ${results.rows[0]}`);
			}
		);
	});
};

module.exports = {
	getCoursesForTeacher,
	getCoursesForStudent,
	createCourse,
};

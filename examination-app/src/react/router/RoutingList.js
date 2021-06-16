import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CreateCourse from '../course/Create';
import EditCourse from '../course/Edit';
import CourseList from '../course/List';
import User from '../course/User';
import CreateExam from '../exam/Create';
import DeleteExam from '../exam/Delete';
import Exam from '../exam/Exam';
import ExamList from '../exam/List';
import OnSubmitPage from '../exam/OnSubmit';
import Login from '../pages/Login';
import AddStudents from '../Student/AddStudentToCourse';
import Students from '../Student/StudentList';

const RoutingList = () => {
	const match = useRouteMatch();
	const routes = [
		{
			path: `courses`,
			component: CourseList,
			key: `/courses`,
		},
		{
			path: `courses/create-course`,
			component: CreateCourse,
			key: `/create-course`,
		},
		{
			path: `courses/edit-course/:id`,
			component: EditCourse,
			key: '/edit-course/:id',
		},
		{
			path: `courses/exams`,
			component: ExamList,
			key: '/exams',
		},
		{
			path: `courses/create-exam/:id`,
			component: CreateExam,
			key: '/create-exam/:id',
		},
		{
			path: `courses/exams/exam/:id`,
			component: Exam,
			key: '/exam/:id',
		},
		{
			path: `delete-exam/:id`,
			component: DeleteExam,
			key: '/delete-exam/:id',
		},
		{
			path: `settings`,
			component: User,
			key: '/settings',
		},
		{
			path: `courses/exams/exam/1/onSubmit`,
			component: OnSubmitPage,
			key: '/onSubmit',
		},
		{
			path: `students`,
			component: Students,
			key: '/students',
		},
		{
			path: `courses/addStudents/:id`,
			component: AddStudents,
			key: '/addStudents',
		},
	];
	return routes.map((item) => {
		return (
			<Route
				exact
				path={`${match.path}/${item.path}`}
				component={item.component}
				key={item.key}
			/>
		);
	});
};

export default RoutingList;

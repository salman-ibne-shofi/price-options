import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
	const subjectMarksData = [
		{
			id: 1,
			name: "Student A",
			math_marks: 78,
			physics_marks: 82,
			chemistry_marks: 79,
		},
		{
			id: 2,
			name: "Student B",
			math_marks: 85,
			physics_marks: 89,
			chemistry_marks: 84,
		},
		{
			id: 3,
			name: "Student C",
			math_marks: 92,
			physics_marks: 91,
			chemistry_marks: 88,
		},
		{
			id: 4,
			name: "Student D",
			math_marks: 74,
			physics_marks: 76,
			chemistry_marks: 75,
		},
		{
			id: 5,
			name: "Student E",
			math_marks: 88,
			physics_marks: 85,
			chemistry_marks: 90,
		},
		{
			id: 6,
			name: "Student F",
			math_marks: 80,
			physics_marks: 83,
			chemistry_marks: 82,
		},
		{
			id: 7,
			name: "Student G",
			math_marks: 91,
			physics_marks: 89,
			chemistry_marks: 92,
		},
		{
			id: 8,
			name: "Student H",
			math_marks: 76,
			physics_marks: 78,
			chemistry_marks: 77,
		},
		{
			id: 9,
			name: "Student I",
			math_marks: 84,
			physics_marks: 82,
			chemistry_marks: 85,
		},
		{
			id: 10,
			name: "Student J",
			math_marks: 79,
			physics_marks: 80,
			chemistry_marks: 81,
		},
	];
	return (
		<div>
			<LChart width={800} height={400} data={subjectMarksData}>
				<XAxis dataKey="name"></XAxis>
				<YAxis></YAxis>
				<Line dataKey={"math_marks"} stroke="red"></Line>
				<Line dataKey={"physics_marks"} stroke="blue"></Line>
			</LChart>
		</div>
	);
};

export default LineChart;

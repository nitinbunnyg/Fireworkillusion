/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Table,
	Row,
	Col
} from "reactstrap";

class AttendanceDisplay extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			attendance: {}
		}
	}

	componentDidMount() {
		// Testing JWT
		// ** REMOVE IN PRODUCTION
		var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xsX251bWJlciI6IjE3MDMzMDAyMSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTE2MjM5MDIyfQ.rI-MfHzDB0pX5eFEvBltoKJw_4nFTI32R9GP4Rp-RLU";

		fetch("http://localhost:3001/attendance/student", {
			method: "post",
			headers: { 'Authorization': `Bearer ${jwt}` }
		})
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						attendance: result
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {

		let tBody = (<tbody><tr className="text-center"><td>Loading...</td></tr></tbody>);

		if (this.state.isLoaded) {
			tBody = (
				<tbody>
					{Object.keys(this.state.attendance).map((course_id, idx) => {
						const labs = this.state.attendance[course_id].labs_attended;
						const lectures = this.state.attendance[course_id].lectures_attended;
						const skilling = this.state.attendance[course_id].skilling_sessions_attended;
						const total = labs + lectures + skilling;
						return (
							<tr key={idx}>
								<td>{course_id}</td>
								<td>{labs}</td>
								<td>{lectures}</td>
								<td>{skilling}</td>
								<td>{total}</td>
							</tr>
						)
					})}
				</tbody>
			);
		}

		return (
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<Card>
								<CardHeader>
									<CardTitle tag="h3">Attendance</CardTitle>
								</CardHeader>
								<CardBody>
									<Table className="tablesorter" responsive>
										<thead className="text-primary">
											<tr>
												<th>Course</th>
												<th>Lab</th>
												<th>Theory</th>
												<th>Skilling</th>
												<th>Total</th>
											</tr>
										</thead>
										{tBody}
									</Table>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default AttendanceDisplay;

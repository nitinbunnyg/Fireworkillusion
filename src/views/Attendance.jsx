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

class Attendance extends React.Component {
	render() {
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
												<th>Practical</th>
												<th>Skilling</th>
												<th>Total</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>ADA</td>
											</tr>
											<tr>
												<td>EP</td>
											</tr>
											<tr>
												<td>DC</td>
											</tr>
											<tr>
												<td>ML</td>
											</tr>
											<tr>
												<td>SC</td>
											</tr>
											<tr>
												<td>CCA</td>
											</tr>
										</tbody>
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

export default Attendance;

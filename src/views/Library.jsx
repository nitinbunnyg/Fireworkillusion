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
import Search from "../components/utils/searchbar";
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

class Library extends React.Component {
	render() {
		return (
			<>
				<div className="content">
					<Row>
						<Col md="12">
							<Card>
								<CardHeader>
									<CardTitle tag="h3">Library
									</CardTitle>
									<Search>
									</Search>
								</CardHeader>
								<CardBody>
									<Table className="tablesorter" responsive>
										<thead className="text-primary">
											<tr>
												<th>Book Name</th>
												<th>Available Copies</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>The Theory of Everything by Stephen Hawking</td>
												<td>3</td>
											</tr>
											<tr>
												<td>The Soul of A New Machine
													by Tracy Kidder</td>
												<td>8</td>
											</tr>
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card>
								<CardHeader>
									<CardTitle tag="h3">Checked-Out Books
									</CardTitle>
								</CardHeader>
								<CardBody>
									<Table className="tablesorter" responsive>
										<thead className="text-primary">
											<tr>
												<th>Book Name</th>
												<th>Date of Issue</th>
												<th>Due Date</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Theory of Machines</td>
												<td>15/09/2019</td>
												<td>29/09/2019</td>
												<td>Returned</td>
											</tr>
											<tr>
												<td>To Engineer is Human</td>
												<td>19/09/2019</td>
												<td>03/10/2019</td>
												<td>Pending</td>
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

export default Library;

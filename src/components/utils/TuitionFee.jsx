import React, { Component } from 'react';
import {
	Card,
	CardBody,
	CardHeader,
	Input,
	FormGroup,
	Col,
	Button,
	CardFooter,
	Row,
	Form,
	CardText
} from "reactstrap";

class TuitionFee extends Component {
	render() {
		return (
				<Col md="12">
					<Card>
						<CardHeader>
							<h4 className="title">Tuition Fee</h4>
						</CardHeader>
						<CardBody>
							<Form>
								<Row>
									<Col className="pr-md-1" md="5">
										<FormGroup>
											<label>Roll Number</label>
											<Input
												defaultValue="170340000"
												disabled
												placeholder="Roll Number"
												type="text"
											/>
										</FormGroup>
									</Col>
									<Col className="px-md-1" md="3">
										<FormGroup>
											<label>Username</label>
											<Input
												defaultValue="michael23"
												disabled
												placeholder="Username"
												type="text"
											/>
										</FormGroup>
									</Col>
									<Col className="pl-md-1" md="4">
										<FormGroup>
											<label htmlFor="exampleInputEmail1">
												Email address
						  </label>
											<Input placeholder="mike@email.com" type="email" />
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md="12">
										<FormGroup>
											<label>Address</label>
											<Input
												placeholder="Home Address"
												type="text"
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col className="pr-md-1" md="4">
										<FormGroup>
											<label>City</label>
											<Input
												placeholder="City"
												type="text"
											/>
										</FormGroup>
									</Col>
									<Col className="px-md-1" md="4">
										<FormGroup>
											<label>Postal Code</label>
											<Input
												placeholder="Postal Code"
												type="text"
											/>
										</FormGroup>
									</Col>
									<Col className="pl-md-1" md="4">
										<FormGroup>
											<label>Mobile Number</label>
											<Input
												placeholder="Mobile Number"
												type="number"
											/>
										</FormGroup>
									</Col>
								</Row>
							</Form>
						</CardBody>
						<CardFooter>
							<Button className="btn-fill" color="secondary" type="submit">
								Pay now
				  </Button>
						</CardFooter>

					</Card>
				</Col>
		);
	}
}

export default TuitionFee;
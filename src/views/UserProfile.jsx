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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
	return (
	  <>
		<div className="content">
		  <Row>
			<Col md="8">
			  <Card>
				<CardHeader>
				  <h3 className="title">Edit Profile</h3>
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
					Submit for review
				  </Button>
				</CardFooter>
				<CardHeader>
				  <h4 className="title">Change Password</h4>
				</CardHeader>
				<CardBody>
					<Form>
						<Row>
							<Col className="pr-md-1" md="4">
								<FormGroup>
								<label>Current Password</label>
								<Input
									placeholder="Current Password"
									type="password"
								/>
								</FormGroup>
							</Col>
							<Col className="px-md-1" md="4">
								<FormGroup>
								<label>New Password</label>
								<Input
									placeholder="New Password"
									type="password"
								/>
								</FormGroup>
							</Col>
							<Col className="pl-md-1" md="4">
								<FormGroup>
								<label>New Password</label>
								<Input
									placeholder="New Password"
									type="password"
								/>
								</FormGroup>
							</Col>
							</Row>
						</Form>
					</CardBody>
					<CardFooter>
				  <Button className="btn-fill" color="secondary" type="submit">
					Update Password
				  </Button>
				</CardFooter>
			  </Card>
			</Col>
			<Col md="4">
			  <Card className="card-user">
				<CardBody>
				  <CardText />
				  <div className="author">
					<div className="block block-one" />
					<div className="block block-two" />
					<div className="block block-three" />
					<div className="block block-four" />
					<a href="#pablo" onClick={e => e.preventDefault()}>
					  <img
						alt="..."
						className="avatar"
						src={require("assets/img/emilyz.jpg")}
					  />
					  <h5 className="title">John The Dick Wick</h5>
					</a>
					<p className="description">Student</p>
				  </div>
				  <div className="card-description">
					Do not be scared of the truth because we need to restart the
					human foundation in truth And I love you like Kanye loves
					Kanye I love Rick Owens’ bed design but the back is...
				  </div>
				</CardBody>
			  </Card>
			</Col>
		  </Row>
		</div>
	  </>
	);
  }
}

export default UserProfile;

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
import classNames from "classnames";
import TuitionFee from "../components/utils/TuitionFee";
// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Row,
	Col,
	Button,
	ButtonGroup,
} from "reactstrap";

class Payments extends React.Component {
	setFee = name => {
		this.setState({
			
		});
	};
	render() {
		return (
			<>
				<div className="content">
					<Row>
						<Col xs="12">
							<Card className="card-chart">
								<CardHeader>
									<Row>
										<Col className="text-left" sm="6">
											<CardTitle tag="h3">Fee Payments</CardTitle>
										</Col>
										<Col sm="6">
											<ButtonGroup
												className="btn-group-toggle float-right"
												data-toggle="buttons"
											>
												<Button
													tag="label"
													className={classNames("btn-simple", {

													})}
													color="info"
													id="0"
													size="sm"
													onClick={() => { }}
												>
													<input
														defaultChecked
														className="d-none"
														name="options"
														type="radio"
													/>
													<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
														Tuition Fee
                          </span>
													<span className="d-block d-sm-none">
														<i className="tim-icons icon-single-02" />
													</span>
												</Button>
												<Button
													color="info"
													id="1"
													size="sm"
													tag="label"
													className={classNames("btn-simple", {

													})}
													onClick={() => {  }}
												>
													<input
														className="d-none"
														name="options"
														type="radio"
													/>
													<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
														Transport Fee
                          </span>
													<span className="d-block d-sm-none">
														<i className="tim-icons icon-gift-2" />
													</span>
												</Button>
												<Button
													color="info"
													id="2"
													size="sm"
													tag="label"
													className={classNames("btn-simple", {

													})}
													onClick={() => {}}
												>

													<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
														Hostel Fee
                          </span>
													<span className="d-block d-sm-none">
														<i className="tim-icons icon-tap-02" />
													</span>
												</Button>
											</ButtonGroup>
										</Col>
									</Row>
								</CardHeader>
								<CardBody>
									<Row>
										<TuitionFee/>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</>
		);
	}
}

export default Payments;

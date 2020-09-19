import React from "react";
import "aos/dist/aos.css";
import "assets/css/plan.scss";
import countryList from 'react-select-country-list';
import PayPalButton from "components/PayPalButton";
import Spinner from "views/Spinner.js";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components

import Logo from "assets/img/mainlogo.png";

const plan_dropdown = [[[1, 12, 0], [12, 199, 1], [24, 397, 2], [36, 596, 3], [48, 779, 4]], [[1, 35, 0], [12, 416, 1], [24, 831, 2], [36, 1246, 3], [48, 1650, 4]], [[1, 15, 0], [12, 176, 1], [24, 350, 2], [36, 525, 3], [48, 697, 4]]];
const plan_names = ["Basic", "All Inclusive", "Vanilla"];
const billcycle_names = ["Monthly", "Annually", "Biennially", "Triennially", "Quadrennial"]


class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.copt = countryList().getData()
    this.state = {
      regexp: /^[0-9\b]+$/,
      clist: this.copt,
      plan_id: null,
      countryOptions: null,
      plans_options: null,
      hostingplan: null,
      billcycle: null,
      curbill: null,
      actbill: null,
      discount: null,
      total: null,
      fname: null, lname: null, email: null, phone: null, company: null, street1: null, street2: null, city: null, country: null,
      fnamec: null, lnamec: null, emailc: null, phonec: null, companyc: null, street1c: null, street2c: null, cityc: null, countryc: null,
      showAlert1: null, showAlert2: null, showValAlert: null, val_error: "no",
      payment: null, showPaypal: false
    };
    
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDrop2 = this.handleDrop2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onPressButton = this.onPressButton.bind(this);
  };
  
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      const plan_id = this.props.location.state.plan;
      this.setState({ plan_id: plan_id });
      if (plan_id !== undefined) {
        console.log("SUC");
        console.log(plan_id);
        console.log(plan_dropdown[1]);
        //pricing dropdown
        const plans_options_tmp = plan_dropdown[plan_id].map(cn => <option value={cn}>{cn[0]} Month Price - ${cn[1]} USD</option>);
        this.setState({ plans_options: plans_options_tmp });
        //country list
        const clist = this.state.clist;
        const cnList = clist.map(cn => <option>{cn['label']}</option>);
        this.setState({ countryOptions: cnList });
        //initial options
        this.setState({ hostingplan: plan_names[plan_id], billcycle: billcycle_names[0], curbill: plan_dropdown[plan_id][1], discount: 0, total: plan_dropdown[plan_id][0][1], actbill: plan_dropdown[plan_id][0][1] })
        this.setState({load: true})
      } else {
        this.props.history.push('/');
      }
    } else {

      this.props.history.push('/');
    }
  };

  onPressButton = (e) => {
    //fname: null, lname: null, email: null, phone: null, company: null, street1: null, street2: null, city: null, country: null
    var prevent_submit = 0
    var val_error = "no"
    var feilds = [this.state.fname, this.state.lname, this.state.email, this.state.phone, this.state.company, this.state.street1, this.state.city]
    var feildsc = ["fnamec", "lnamec", "emailc", "phonec", "companyc", "street1c", "cityc"]
    for (var i = 0; i < feilds.length; i++) {
      if (feilds[i] === null) {
        console.log(feildsc[i])
        this.setState({ [feildsc[i]]: "form-group has-danger" })
        prevent_submit = 1
      } else {
        this.setState({ [feildsc[i]]: "form-group" })
      }
    }

    //email
    if (this.state.email !== null){
      const re = /^\S+@\S+$/
      if(!re.test(this.state.email)){
        val_error = "Please enter a valid email address"
      }
    }

    if (prevent_submit !== 1) {
      if(this.state.country == null){
        this.setState({showValAlert:false})
        this.setState({showAlert1:false})
        this.setState({showAlert2:true})
      } else{
        this.setState({showValAlert:false})
        this.setState({showAlert2:false})
        this.setState({showAlert1:false})
        if(val_error !== "no"){
          this.setState({val_error:val_error, showValAlert: true})
        }else{
          //Proceed to payment
          console.log("payment")
          this.setState({showPaypal: true})
          this.setState({payment: this.initiatePayment()})
        }
      }
    } else {
      this.setState({showAlert2:false})
      this.setState({showAlert1:true})
    }
  }

  handleDrop = (e) => {
    let val = e.target.value.split(',').map(Number);
    var discount = plan_dropdown[this.state.plan_id][0][1] * val[0] - val[1];
    var actbill = plan_dropdown[this.state.plan_id][0][1] * val[0];
    this.setState({ hostingplan: plan_names[this.state.plan_id], billcycle: billcycle_names[val[2]], discount: discount, total: val[1], actbill: actbill })
  }

  handleDrop2 = (e) => {
    this.setState({ country: e.target.value })
  }

  handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    console.log(e.target.name)
    let value = e.target.value;
    if (e.target.name === "phone") {
      if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({ [e.target.name]: value });
      }
    } else {
      this.setState({ [e.target.name]: value });
    }
  }

  initiatePayment(){
    return <PayPalButton fname={this.state.fname} lname={this.state.lname} email={this.state.email} phone={this.state.phone} price={this.state.total} plan={this.state.plan_id} company={this.state.company} street1={this.state.street1} street2={this.state.street2} city={this.state.city} country={this.state.country} />
  }

  render() {
    return (
      <>
      {!this.state.load&&<Spinner />}
    {this.state.load&&<div>
        <div className="page-header2 page-header2-small">
          <div
            className="page-header2-image"
            style={{
              backgroundImage: "url(" + require("assets/img/Plan.jpg") + ")",
            }}

          ></div>
          <div className="content-center">
            <img style={{ maxWidth: "30%", verticalAlign: "center" }} src={Logo} alt='Oh ooh!'/>
            <h2 className="title">Check Out</h2>
          </div>
        </div>

        <Container>
          
          <div style={{marginTop:"20px"}}>
            {!this.state.showPaypal&&
          <h5 style={{ fontSize: "12px" }}>Please enter your personal details and billing information to checkout.</h5>}
          </div>
          <Row>
            <Col md="8">
              {this.state.showAlert1 && <div class="alert alert-danger" role="alert">
                Highlighted feilds in red are mandatory. Please fill them and try again.
              </div>}
              {this.state.showAlert2 && <div class="alert alert-danger" role="alert">
                Please select a country and try again.
              </div>}
              {this.state.showValAlert && <div class="alert alert-danger" role="alert">
                {this.state.val_error}
              </div>}
              {this.state.showPaypal&&this.state.payment}
              {!this.state.showPaypal&&<div class="card2">
                <form>
                  <div class="form-group">
                    <label for="billing">Billing Cycle</label>
                    <select class="form-control" id="billing_select" onChange={this.handleDrop}>
                      {this.state.plans_options}
                    </select>
                  </div>
                  <label for="personal">Personal Information</label>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div class={this.state.fnamec || "form-group"} style={{ width: "49%" }}>
                      <input name="fname" value={this.state.fname || ''} onChange={this.handleChange} style={{ marginRight: "10px", float: "left" }} type="text" class="form-control" placeholder="First Name" />
                    </div>
                    <div class={this.state.lnamec || "form-group"} style={{ width: "49%" }}>
                      <input name="lname" value={this.state.lname || ''} onChange={this.handleChange} style={{ marginLeft: "10px", float: "right" }} type="text" class="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div class={this.state.emailc || "form-group"} style={{ width: "49%" }}>
                      <input name="email" value={this.state.email || ''} onChange={this.handleChange} style={{ marginRight: "10px", float: "left" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                    </div>
                    <div class={this.state.phonec || "form-group"} style={{ width: "49%" }}>
                      <input name="phone" pattern="[0-9]*" value={this.state.phone || ''} onChange={this.handleChange} style={{ marginLeft: "10px", float: "right" }} type="phone" class="form-control" placeholder="Phone Number" />
                    </div>
                  </div>
                  <label for="exampleFormControlSelect1">Billing Address</label>
                  <div class={this.state.companyc || "form-group"}>
                    <input name="company" value={this.state.company || ''} onChange={this.handleChange} type="text" class="form-control" placeholder="Company Name" />
                  </div>
                  <div class={this.state.street1c || "form-group"}>
                    <input name="street1" value={this.state.street1 || ''} onChange={this.handleChange} type="text" class="form-control" placeholder="Street Name 1" />
                  </div>
                  <div class="form-group">
                    <input name="street2" value={this.state.street2 || ''} onChange={this.handleChange} type="text" class="form-control" placeholder="Street Name 2" />
                  </div>
                  <div class={this.state.cityc || "form-group"}>
                    <input name="city" value={this.state.city || ''} onChange={this.handleChange} type="text" class="form-control" placeholder="City" />
                  </div>

                  <div class="form-group">
                    <select name={this.state.countryc || "form-group"} value={this.state.country || ''} onChange={this.handleDrop2} class="form-control" id="exampleFormControlSelect1" placeholder="Country">
                      <option>Select Country</option>
                      {this.state.countryOptions}
                    </select>
                  </div>
                  <div>

                  </div>

                </form>
              </div>}
            </Col>
            <Col md="4">
              <div class="card4">
                <h4 style={{ padding: "0px", margin: "8px" }} >Order Summary</h4>
                <div class="card5">
                  <h4 style={{ padding: "0px", margin: "5px" }}>Hosting Plan</h4>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ padding: "0px", margin: "5px", fontSize: "14px" }}>{this.state.hostingplan}</p>
                  </div>
                  <hr style={{ padding: "0px", margin: "0px", display: "flex" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4 style={{ padding: "0px", margin: "5px", float: "left" }}>Setup Fees</h4>
                    <h4 style={{ padding: "0px", margin: "5px", float: "right" }}>$0</h4>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4 style={{ padding: "0px", margin: "5px", float: "left" }}>{this.state.billcycle}</h4>
                    <h4 style={{ padding: "0px", margin: "5px", float: "right" }}>${this.state.actbill}</h4>
                  </div>
                  <hr style={{ padding: "0px", margin: "0px", display: "flex" }} />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ padding: "0px", margin: "5px", float: "left", fontSize: "14px" }}>Discount</p>
                    <h4 style={{ padding: "0px", margin: "5px", float: "right" }}>-${this.state.discount}</h4>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4 style={{ padding: "0px", margin: "5px", float: "left" }}>Total</h4>
                    <h4 style={{ padding: "0px", margin: "5px", float: "right" }}>${this.state.total}</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="section section-about-us">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {!this.state.showPaypal&&
                <button class="learn-more" onClick={this.onPressButton}>
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text-black">Continue</span>
                </button>}
              </Col>
            </Row>

          </div>
        </Container>
        </div>}
      </>
    );
  }
}
export default Checkout;

import React from "react";
import "aos/dist/aos.css";
import "assets/css/plan.scss";
import axios from 'axios';
import Spinner from "views/Spinner.js"
import Preload from 'react-preload';
import bg from "assets/img/Contact.jpg"
import bg_mobile from "assets/img/Contact_mobile.jpg"
import "assets/css/aosover.css"
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
      showThankyou: false,
      load: false
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    this.setState({load: true})
  };

  handleChange = (e) => {
    console.log(e.target.name)
    let value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  onPressButton = (e) => {
    var prevent_submit = 0
    if (this.state.email === null){
      this.setState({emailc:"form-group has-danger"})
      prevent_submit = 1
    }else{
      const re = /^\S+@\S+$/
      if(!re.test(this.state.email)){
        this.setState({emailc:"form-group has-danger"})
        prevent_submit = 1
      }else{
        this.setState({emailc:"form-group"})
      }
    }

    if (this.state.name === null){
      this.setState({namec:"form-group has-danger"})
      prevent_submit = 1
    }else{
      this.setState({namec:"form-group"})
    }

    if(prevent_submit===0){
      axios.post('https://apiag-ffomc7heoa-de.a.run.app/api/contact', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
      .then(response => {
        console.log(
          `Response: ${response.status} ${response.statusText}`
        );
      })
      .catch(err => console.error(err));
      this.setState({showThankyou:true})
    }
  }
  render() {
    const images = [
      bg,
      bg_mobile
  ];
    return (
      <>
      <Preload
                    images={images}

                    loadingIndicator={<Spinner />}
                    mountChildren
                    resolveOnError
                >
        <div>
          <div className="desktop">
        <div className="page-header2 page-header2-small">
          <div
            className="page-header2-image"
            style={{
              backgroundImage: "url(" + images[0] + ")",
            }}

          ></div>
          <div className="content-center">
            <h2 className="title">Contact Us</h2>
          </div>
        </div>
        </div>
        <div className="mobile">
        <div className="page-header2 page-header2-small">
          <div
            className="page-header2-image"
            style={{
              backgroundImage: "url(" + images[1] + ")",
            }}

          ></div>
          <div className="content-center">
            <h2 className="title">Contact Us</h2>
          </div>
        </div>
        </div>
        {!this.state.showThankyou&&<Container>
        <h3 className="title" style={{marginBottom:"3px"}}>Get in touch with us</h3>
        <h5 className="title" style={{marginBottom:"3px", marginTop:"3px"}}>Have a question or a comment? Drop us a line</h5>
        <p style={{fontSize:"14px", marginBottom:"20px"}}>Your query will go straight in to our support line. We'll do everything to respond you quickly as possible.</p>
          <div className="wrapper">
            <form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div class={this.state.namec || "form-group"} style={{ width: "49%" }}>
                  <input value={this.state.name || ''} onChange={this.handleChange} name="name" style={{ marginRight: "10px", float: "left" }} type="text" class="form-control" placeholder="Name" />
                </div>
                <div class={this.state.emailc || "form-group"} style={{ width: "49%" }}>
                  <input value={this.state.email || ''} onChange={this.handleChange} name="email" style={{ marginLeft: "10px", float: "right" }} type="email" class="form-control" placeholder="Email" />
                </div>
              </div>
              <div class="form-group">
                  <textarea  value={this.state.message || ''} onChange={this.handleChange} name="message" type="text" class="form-control" placeholder="Message" />
              </div>
            </form>
            <Row>
              <Col style={{marginTop:"50px", marginBottom:"50px"}} className="ml-auto mr-auto text-center">
                {!this.state.showPaypal &&
                  <button class="learn-more" onClick={this.onPressButton}>
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text-black">Send Message</span>
                  </button>}
              </Col>
            </Row>
            <Row>
              <Col>
              <p style={{fontSize:"14px"}}>You can even write to us at <a href = "mailto: airgrounds@outlook.com"><b>airgrounds@outlook.com</b></a> or ring us on <a href="tel:+94701282801"><b>+94701282801</b></a></p>
              </Col>
            </Row>
          </div>
        </Container>}
        {this.state.showThankyou&&
        <Container>

        <div >
                <img style={{display:"block", marginLeft:"auto",marginRight:"auto"}}
                      alt="..."
                      src={require("assets/img/thumbsup.png")}
                    ></img>
                  
                  </div>
                  <div className="content-center">
            <div>
            <h2 style={{display:"block", marginLeft:"auto",marginRight:"auto", textAlign:"center"}}>Thank you for contacting us</h2>
            <h4 style={{display:"block", marginLeft:"auto",marginRight:"auto", textAlign:"center"}}>We appriciate that you've taken time to write us.</h4>
            <h4 style={{display:"block", marginLeft:"auto",marginRight:"auto", textAlign:"center"}}>We'll get back to you very soon.</h4>
            </div>
          </div>
        </Container>}
        </div>
        </Preload>
      </>
    );
  }
}
export default Contact;

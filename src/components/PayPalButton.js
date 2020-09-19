import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import thumb from "assets/img/thumbsup.png";

function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const [orderid, setOrderid] = useState(null);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            payer: {
              name: {
                given_name: product.fname,
                surname: product.lname,
              },
              email_address: product.email            
          },  
            purchase_units: [
              {
                description: "Hosting Order",
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },              
              }
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING"
        }
            
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log("p1")
          console.log(order);
          console.log(order.id);
          console.log("p2")
          console.log(order["id"])
          setOrderid(order.id);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price, product.email, product.fname, product.lname]);

  if (paidFor) {
    axios.post('https://apiag-ffomc7heoa-de.a.run.app/api/pay', {
      plan: product.plan,
      price: product.price,
      fname: product.fname,
      lname: product.lname,
      email: product.email,
      phone: product.phone,
      company: product.company,
      street1: product.street1,
      street2: product.street2,
      city: product.city,
      country: product.country,
      orderid: orderid
    })
      .then(response => {
        console.log(
          `Response: ${response.status} ${response.statusText}`
        );
      })
      .catch(err => console.error(err));
    return (
      <div>
        <h4 style={{fontSize:"16px"}}>Payment Successfull</h4>
        <h4 style={{fontSize:"14px"}}>Order ID: {orderid}</h4>
        <img alt="..." style={{display:"block",marginRight:"auto", marginLeft:"auto"}} src={thumb}/>
        <h4 style={{fontSize:"14px"}}>You will receive an email receipt with more details on your order</h4>
        <h4 style={{fontSize:"14px"}}>Thank you for choosing us... Happy Hosting!!!</h4>
      </div>
    );
  }

  return (
    <div>
      {error && <div><h4>Uh oh, an error occurred! {error.message}</h4></div>}
      <div ref={paypalRef} />
    </div>
  );
}

function PayPalButton({ fname,lname,email,phone,price,plan, company, street1, street2, city, country }) {
  const product = {
    price: price,
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    plan: plan,
    company: company,
    street1: street1,
    street2: street2,
    city: city,
    country: country
  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default PayPalButton;
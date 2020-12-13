import React, { useState } from "react";
import { db } from "../../../firebase";
import {Button, Form, TextArea, Divider} from "semantic-ui-react"


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Form onSubmit={handleSubmit} id = "1">
      <Form.Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
  
      <Form.Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

   
      <TextArea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></TextArea>
      <Divider horizontal></Divider>
      <Button
        type="submit"
        style={{ background: loader ? " rgb(2, 2, 110)" :  "red"}}
      >
        Send Message
      </Button>
    </Form>
  );
};

export default Contact;
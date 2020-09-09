import React from "react"
import { Form, Button, Container, Row } from "react-bootstrap"
import Header from "../commons/Header"
import Footer from "../commons/Footer"

export default function Login() {
  return (
    <div>
      <Header />
      <div
        className=" container-fluid min-vh-85"
        align="center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          className="container-fluid m-20"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

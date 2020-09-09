import React from "react"
import { Container, Row, Card, Button, CardColumns } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import Header from "../commons/Header"
import Footer from "../commons/Footer"
import "../App.css"
import { removeFromCart, addToAnItem, removeFromAnItem } from "../utils/reducer"

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const total = useSelector((state) => state.total)

  // dispatch(removeFromCart(product))

  return (
    <div>
      <Header />
      <div>
        <Container className="container-fluid m-20" align="center">
          <Row align="center">
            <CardColumns className="pt-10" align="center">
              {cart ? (
                cart.map((product) => (
                  <Card key={product.id} style={{}}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Price: &#8358;{product.price}</Card.Text>
                      <Card.Text>
                        Quantity:
                        <Button
                          onClick={() => dispatch(removeFromAnItem(product))}
                          variant="primary"
                        >
                          -
                        </Button>
                        {product.quantity}
                        <Button
                          onClick={() => dispatch(addToAnItem(product))}
                          variant="primary"
                        >
                          +
                        </Button>
                      </Card.Text>
                      <Button
                        onClick={() => dispatch(removeFromCart(product))}
                        variant="primary"
                      >
                        remove from cart
                      </Button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>no item in cart</p>
              )}
            </CardColumns>
            <h2>total: {total}</h2>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

import React from "react"
import { Container, Row, Card, Button, CardColumns } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addToCart } from "../utils/reducer"

const products = [
  {
    id: 1,
    name: "tooth past",
    quantity: 3,
    price: 12,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "mac and cheese",
  },
  {
    id: 2,
    name: "brush",
    quantity: 3,
    price: 120,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "time and now",
  },
  {
    id: 3,
    name: "lg tv",
    quantity: 3,
    price: 123,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "favour stores",
  },
  {
    id: 4,
    name: "scan frost deep freez",
    quantity: 3,
    price: 132,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "scan frost",
  },
  {
    id: 5,
    name: "scan frost deep freez",
    quantity: 3,
    price: 134,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "scan frost",
  },
]

export default function Products() {
  const dispatch = useDispatch()

  return (
    <Container className="container-fluid m-20" align="center">
      <Row align="center">
        <CardColumns className="pt-10" align="center">
          {products.map((product) => (
            <Card key={product.id} style={{}}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: &#8358;{product.price}</Card.Text>
                <Button
                  onClick={() => dispatch(addToCart(product))}
                  variant="primary"
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Row>
    </Container>
  )
}

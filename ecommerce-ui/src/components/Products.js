import React from "react"
import { Container, Row, Image, Col } from "react-bootstrap"

const products = [
  {
    id: 1,
    name: "tooth past",
    quantity: 3,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "mac and cheese",
  },
  {
    id: 2,
    name: "brush",
    quantity: 3,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "time and now",
  },
  {
    id: 3,
    name: "lg tv",
    quantity: 3,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "favour stores",
  },
  {
    id: 4,
    name: "scan frost deep freez",
    quantity: 3,
    imageUrl: "http://dummyimage.com/218x159.png/5fa2dd/ffffff",
    supplier: "scan frost",
  },
]

export default function Products() {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col xs={12} md={8} lg={2}>
            <Image src={product.imageUrl} rounded />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

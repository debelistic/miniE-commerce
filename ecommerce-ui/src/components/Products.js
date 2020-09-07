import React from "react"
import { Container, Row, Image, Col } from "react-bootstrap"

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
  return (
    <Container className="container-fluid m-auto">
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={8} lg={2} className="mt-2 mr-5" align="center">
            <Image src={product.imageUrl} rounded />
            <h3 style={{width: '100%', height: 40, overflow: 'hidden'}}>{product.name}</h3>
            <p>Price: &#8358;{product.price}</p>
            <button>add to cart</button>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import OneItem from "./OneItem"

function Daily() {
  const weather = useSelector((state) => state.main.weather)
  let items = weather.list
  return (
    <Container>
      <Row>
        {items.slice(0, 5).map((item) => (
          <Col key={item.dt}>
            <OneItem item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Daily

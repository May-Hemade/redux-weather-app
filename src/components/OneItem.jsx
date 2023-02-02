import React from "react"
import { Card } from "react-bootstrap"

import { compareAsc, format } from "date-fns"

function OneItem({ item }) {
  const formatDate = (weatherDate) => {
    const d = Date.parse("YYYY-MM-DD HH:MM:SS")

    format(new Date(weatherDate), "YYYY-MM-DD HH:MM:SS")
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{item.weather[0].main}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {item.dt_txt}
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default OneItem

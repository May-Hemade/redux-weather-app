import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setWeatherAction } from "../redux/actions"

function Home() {
  const dispatch = useDispatch()
  const weather = useSelector((state) => state.main.weather)
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=42.7339&lon=25.4858&appid=23849476568cb1a8a8f9382edd65f45a"

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds
  }

  const getWeather = () => {
    console.log("in")
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        dispatch(setWeatherAction(data))
        console.log(data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    console.log("use")
    getWeather()
  }, [])
  return (
    <div>
      <img src="https://www.coe.int/documents/11046033/0/bulgaria-flag-870.jpg/c4e994b8-4a7a-e807-67df-5c093b307a18"></img>
      <Card>
        <Card.Body>
          <Card.Title>{weather.city.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Population , {weather.city.population}
          </Card.Subtitle>
          <Card.Text> sunrise {msToTime(weather.city.sunrise)}</Card.Text>
          <Link to="/daily">Daily</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home

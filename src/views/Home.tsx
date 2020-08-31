import React from "react"
import { Ho } from "./style/Home"
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Ho.Container>
      <Ho.Gradient></Ho.Gradient>
      <Ho.Text>Welcome in Frontend Challenge!</Ho.Text>
      <Ho.Link>
        <Link to={'/top-list'}>Check Top100!</Link>
      </Ho.Link>
    </Ho.Container>
  )
}

export default Home

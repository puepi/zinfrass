import reactImg from "../../assets/react-core-concepts.png"
import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)]
  return (
    <header>

    </header>
  )
}
import { Button } from "../common/Button"
import { Container } from "../common/Container"
import devices from '../../assets/devices.png'

export const Advantages = () => {
  return (
    <Container>
        <h1 className="gold">Transmisiones en vivo</h1>
        <p>Accede desde cualquier lugar a las transmisiones en vivo de las mejores pistas de Nuevo León. Zuazua Arena Downs, River Racing Track, Rancho El Texano y Agua Nueva desde un solo lugar</p>
        <Button toPath="./register" text="Unirse" tailwindClass="self-start bg-secondary text-black"/>
        <img src={devices} alt="" className="w-full"/>
    </Container>
  )
}

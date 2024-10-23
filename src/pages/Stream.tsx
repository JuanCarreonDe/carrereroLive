import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";

export const Stream = () => {
  return (
    <Container>
      <Nav />
      <div>stream</div>
      <span className="text-neutral-500">
        *en esta pantalla se mostrará la transmision en vivo*
      </span>
    </Container>
  );
};

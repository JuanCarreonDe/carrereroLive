import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { Nav } from "../components/common/Nav";
import { streams } from "../constants";

export const Lives = () => {
  return (
    <Container>
      <Nav />
      <h1 className="gold w-fit">Pistas en vivo</h1>
      <div className="grid md:grid-cols-2 gap-4 w-full">
        {streams.map((stream) => (
          <Link
            to={`/stream/${stream.paybackId}`}
            className="relative hover:scale-105 transition-transform cursor-pointer flex items-center py-8 px-8 gap-4 border-[1px] border-gray w-full"
          >
            <img src="" alt="" className="w-8 h-8 rounded-full bg-gray" />
            <h2 className="flex-1 text-center">{stream.raceTrack}</h2>
            {/* <span className="absolute top-2 right-2 text-red-400">Live</span> */}
          </Link>
        ))}
      </div>
    </Container>
  );
};

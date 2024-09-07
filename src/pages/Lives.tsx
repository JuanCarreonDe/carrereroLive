import { Container } from "../components/common/Container";

export const Lives = () => {
  return (
    <Container>
      <h1 className="gold w-fit">Pistas en vivo</h1>
      <div className="grid md:grid-cols-2 gap-4 w-full">
        <div className="relative flex items-center py-8 px-8 gap-4 border-[1px] border-gray w-full">
          <img src="" alt="" className="w-8 h-8 rounded-full bg-gray" />
          <h2 className="flex-1 text-center">Zuazua Arena Downs</h2>
          <span className="absolute top-2 right-2 text-red-400">Live</span>
        </div>
        <div className="relative flex items-center py-8 px-8 gap-4 border-[1px] border-gray w-full">
          <img src="" alt="" className="w-8 h-8 rounded-full bg-gray" />
          <h2 className="flex-1 text-center">River Racing Track</h2>
          <span className="absolute top-2 right-2 text-secondary">Offline</span>
        </div>
        <div className="relative flex items-center py-8 px-8 gap-4 border-[1px] border-gray w-full">
          <img src="" alt="" className="w-8 h-8 rounded-full bg-gray" />
          <h2 className="flex-1 text-center">Rancho El Texano</h2>
          <span className="absolute top-2 right-2 text-red-400">Live</span>
        </div>
        <div className="relative flex items-center py-8 px-8 gap-4 border-[1px] border-gray w-full">
          <img src="" alt="" className="w-8 h-8 rounded-full bg-gray" />
          <h2 className="flex-1 text-center">Agua Nueva</h2>
          <span className="absolute top-2 right-2 text-red-400">Live</span>
        </div>
      </div>
    </Container>
  );
};

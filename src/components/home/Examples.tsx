import { useRef } from "react";
import { Container } from "../common/Container";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export const Examples = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft +=
        scrollContainerRef.current.offsetWidth;
    }
    console.log("hiext");
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -=
        scrollContainerRef.current.offsetWidth;
    }
    console.log("hiprev");
  };

  return (
    <Container>
      <h1 className="accent text-center">Las mejores transmisiones</h1>
      <p>*Ejemplos de transmisiones*</p>
      <div className="flex w-full items-center justify-center">
        <button onClick={scrollPrev}>
          <MdKeyboardArrowLeft className="w-10 h-10" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex w-full max-w-md overflow-x-scroll scroll-smooth scroll__container"
        >
          <div className="w-full min-w-full flex aspect-video justify-center items-center bg-primary">
            1
          </div>
          <div className="w-full min-w-full flex aspect-video justify-center items-center bg-primary">
            2
          </div>
          <div className="w-full min-w-full flex aspect-video justify-center items-center bg-primary">
            3
          </div>
        </div>
        <button onClick={scrollNext}>
          <MdKeyboardArrowRight className="w-10 h-10" />
        </button>
      </div>
    </Container>
  );
};

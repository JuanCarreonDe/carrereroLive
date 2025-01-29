import { SwiperSlide, Swiper } from "swiper/react";
import { useAuthStore } from "../../stores/useAuthStore";
// import { useAuth } from "../../hooks/useAuth";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";

export const Hero = () => {
  const { session, subscription, loading } = useAuthStore();

  return (
    <Container>
      <h1 className="accent w-fit text-center">Zuazua Arena Race Track</h1>
      <div className="w-full max-w-sm">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
          pagination={true}
        >
          <SwiperSlide>
            <img
              src={image1}
              className="h-full w-full object-cover rounded-sm"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              className="h-full w-full object-cover rounded-md"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="flex flex-col justify-center items-center flex-1 z-10 w-full gap-8"> */}
      <div className="flex flex-col justify-center items-center gap-2">
        {/* <h1 className="accent w-fit text-center">Zuazua Arena Race Track</h1> */}
        {/* <span className="uppercase text-secondary">
La marca de los campeones
</span>
      {/* </div> */}
        {loading ? (
          <span>loading</span>
        ) : session ? (
          subscription ? (
            // con sub
            <Button
              toPath={`/lives`}
              text={"Ir a Lives"}
              tailwindClass="bg-red-600 animate-pulse"
            />
          ) : (
            <>
              {/* sin sub */}
              <p className="text-center text-pretty">
                ¡Estas a un paso de acceder al contenido de Zuazua Arena Race
                Track!
              </p>
              <div className="flex gap-4">
                <Button
                  toPath={`/pay`}
                  text={"Activar Subscripcion"}
                  tailwindClass="bg-white text-gray animate-pulse"
                />
              </div>
            </>
          )
        ) : (
          <>
            {/* sin session */}
            <p className="text-center text-pretty">
              Las mejores transmisiones en un mismo lugar.
            </p>
            <div className="flex gap-4">
              <Button toPath={`/register`} text={"Unirse"} />
              <Button
                href={"#advantages"}
                text={"Saber más"}
                tailwindClass="bg-primary text-white border-[1px]"
              />
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

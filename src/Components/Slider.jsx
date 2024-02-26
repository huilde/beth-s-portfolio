import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { useSwiperSlide } from "swiper/react";

export default function App() {
  const swiperRef = useRef(null);

  //   useEffect(() => {
  //     const handleScroll = (e) => {
  //       const swiper = swiperRef.current;
  //       // Verifique se o usuário está rolando para baixo e se está no último slide
  //       //   console.log(swiperRef);
  //       if (e.deltaY > 0 && Boolean(swiper)) {
  //         // Role para o final do documento
  //         // console.log("fui chamado");
  //         window.scrollTo({
  //           top: document.body.scrollHeight,
  //           behavior: "smooth",
  //         });
  //       }
  //     };

  //     // Adiciona o event listener para a página
  //     window.addEventListener("wheel", handleScroll);

  //     // Remove o event listener quando o componente é desmontado
  //     return () => {
  //       window.removeEventListener("wheel", handleScroll);
  //     };
  //   }, [swiperRef]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        onScrollbarDragEnd={(e) => console.log(e)}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        effect={"fade"} // Change the transition effect to fade
        easing={"ease-in-out"} //
        speed={1200}
        mousewheel={{ releaseOnEdges: false }}
        followFinger={false}
        touchReleaseOnEdges={true}
        longSwipes={false}
        parallax={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="HeroNoImage_1">
            <div className="Frame427319685">
              <span className="_13">1/3</span>
              <span className="VisualDesign">
                Visual
                <br />
                Design
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="HeroNoImage_2">
            <div className="Frame427319685_1">
              <span className="_23">2/3</span>
              <span className="Experinciadousurio">
                Experiência
                <br />
                do usuário
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide slot="wrapper-end">
          <div className="HeroNoImage_3">
            <div className="Frame427319685_2">
              <span className="_33">3/3</span>
              <span className="Inclusoeacessibilidade">
                Inclusão e<br />
                acessibilidade
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

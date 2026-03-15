/**
 * il faut dbr installer le package 'react-responsive-carousel'
 */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/carrousel/1.jpg";
import img2 from "../assets/carrousel/2.jpg";
import img3 from "../assets/carrousel/3.jpg";
import img4 from "../assets/carrousel/4.jpg";
import { ShoppingCart } from "lucide-react";

function Carrousel() {
  const datas = [
    {
      id: 1,
      image: img1,
      titre: "Titre slide 1",
      description:
        "Celle-ci est utilisée pour autoriser explicitement certaines requêtes provenant d'autres sources tout en en rejetant d'autres. Par exemple, si un site offre un service intégrable, il peut être nécessaire d'assouplir certaines restrictions. ",
    },
    {
      id: 2,
      image: img2,
      titre: "Titre slide 2",
      description:
        "Celle-ci est utilisée pour autoriser explicitement certaines requêtes provenant d'autres sources tout en en rejetant d'autres. Par exemple, si un site offre un service intégrable, il peut être nécessaire d'assouplir certaines restrictions. ",
    },
    {
      id: 3,
      image: img3,
      titre: "Titre slide 3",
      description:
        "Celle-ci est utilisée pour autoriser explicitement certaines requêtes provenant d'autres sources tout en en rejetant d'autres. Par exemple, si un site offre un service intégrable, il peut être nécessaire d'assouplir certaines restrictions. ",
    },
    {
      id: 4,
      image: img4,
      titre: "Titre slide 4",
      description:
        "Celle-ci est utilisée pour autoriser explicitement certaines requêtes provenant d'autres sources tout en en rejetant d'autres. Par exemple, si un site offre un service intégrable, il peut être nécessaire d'assouplir certaines restrictions. ",
    },
  ];
  return (
    <Carousel
      autoPlay
      interval={4000}
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      className="w-full h-[80vh] md:h-[50vh] lg:h-[70vh] m"
    >
      {datas.map((slide) => (
        <div
          key={slide.id}
          className="max-w-7xl mx-auto h-full grid md:grid-cols-2 items-center  px-6 bg-gray-100"
        >
          {/* TEXTE A GAUCHE */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold">{slide.titre}</h2>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              {slide.description}
            </p>

            {/* CTA */}
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                <ShoppingCart className="w-5 h-5" />
                Ajouter au Panier
              </button>

              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Découvrir
              </button>
            </div>
          </div>

          {/* IMAGE A DROITE */}
          <div className="flex justify-center">
            <img
              src={slide.image}
              alt={slide.titre}
              className="w-[70%] md:w-[80%] object-contain"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Carrousel;

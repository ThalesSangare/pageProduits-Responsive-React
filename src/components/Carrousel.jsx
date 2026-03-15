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

function Carrousel() {
  const datas = [
    {
      id: 1,
      image: img1,
      titre: "Titre slide 1",
      description: "lorem4fkdsjhfjezhfkjdshfkjdshfkjdshfkjdsfhkjdsnvckjdsvkdsj",
    },
    {
      id: 2,
      image: img2,
      titre: "Titre slide 2",
      description: "lorem4fkdsjhfjezhfkjdshfkjdshfkjdshfkjdsfhkjdsnvckjdsvkdsj",
    },
    {
      id: 3,
      image: img3,
      titre: "Titre slide 3",
      description: "lorem4fkdsjhfjezhfkjdshfkjdshfkjdshfkjdsfhkjdsnvckjdsvkdsj",
    },
    {
      id: 4,
      image: img4,
      titre: "Titre slide 4",
      description: "lorem4fkdsjhfjezhfkjdshfkjdshfkjdshfkjdsfhkjdsnvckjdsvkdsj",
    },
  ];
  return (
    <Carousel
      autoPlay //demarre automatiq
      interval={4000} //temps du slide
      infiniteLoop // continue si on est a la fin
      showIndicators={false} //enleve les puces de nav
      showStatus={false} // enleve affich de la position (3/4)
      showThumbs={false} // enlève les petites images
      className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
    >
      {datas.map((slide) => (
        <div key={slide.id} className="relative w-full h-full">
          {/* IMAGE */}
          <img
            src={slide.image}
            alt={slide.titre}
            className="w-full h-[60vh] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {slide.titre}
            </h2>

            <p className="text-gray-200 max-w-2xl text-sm md:text-lg">
              {slide.description}
            </p>

            {/* CTA */}
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Shop now
              </button>

              <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Learn more
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Carrousel;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel3D.css";

const images = [
  { src: "/images/Untitled image 1.jpeg", text: "20 de fevereiro de 2023" },
  { src: "/images/Untitled image 2.jpeg", text: "11 de junho de 2023" },
  { src: "/images/Untitled image 3.jpeg", text: " 12 de junho de 2023" },
  { src: "/images/Untitled image 4.jpeg", text: "20 de agosto de 2022 " },
  { src: "/images/Untitled image 11 (primeira foto - foto destaque).jpeg", text: "02 de dezembro de 2022" },  
  { src: "/images/Untitled image 5.jpeg", text: "16 de outubro de 2022" },
  { src: "/images/Untitled image 6.jpeg", text: "31 de julho de 2022" },
  { src: "/images/Untitled image 7.jpeg", text: "20 de fevereiro de 2024" },
  { src: "/images/Untitled image 8.jpeg", text: "6 de dezembro de 2023" },
  { src: "/images/Untitled image 9.jpeg", text: "6 de dezembro de 2023" },
  { src: "/images/Untitled image 10.jpeg", text: "24 de dezembro de 2024" },
  { src: "/images/fooooto.jpeg", text: "" },
  { src: "/images/footo1.jpeg", text: "" },
  { src: "/images/footo2.jpeg", text: "" },
  { src: "/images/footo3.jpeg", text: "" },
  { src: "/images/foto4.jpeg", text: "" },
  { src: "/images/foto5.jpeg", text: "" },
  { src: "/images/footo6.jpeg", text: "" },




];

const Carousel3D = () => {
  const initialDate = new Date("2022-02-20");  // Data do começo do namoro
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0 });

  const calculateTimeElapsed = () => {
    const currentDate = new Date();  // Data atual
    let years = currentDate.getFullYear() - initialDate.getFullYear();
    let months = currentDate.getMonth() - initialDate.getMonth();
    let days = currentDate.getDate() - initialDate.getDate();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += previousMonth.getDate();
    }

    setTimeElapsed({ years, months, days });
  };

  // Usar useEffect para calcular o tempo sempre que o componente for renderizado
  useEffect(() => {
    calculateTimeElapsed();
  }, []);


  return (
    <div className="fundo1">

       <h1 className="titulo"> Memórias de uma vida de amor💖</h1>
      <div className="fundo">
        <div className="carousel-container">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            initialSlide={4}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img src={image.src} alt={`Slide ${index}`} />
                  <div className="slide-text">{image.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
        <div className="time-marker">
          <p>compartilhando a vida há:</p>
          <p>
            {timeElapsed.years} anos, {timeElapsed.months} meses e {timeElapsed.days} dias
          </p>
        </div>
        <div className="romantic-text">
          <h2 className="romantic-title">São 3 anos💖</h2>
          <p className="romantic-message">
          São 3 anos... 3 anos de uma vida que eu nunca fui capaz de sonhar,
3 anos de tanto amor que me faz desejar, em todas as horas e
minutos, viver tudo isso para sempre!

Eu não consigo passar um dia sem você e se passo, fico contando as
horas pra te ver de novo. Você tem sido, nesses 3 anos, e vai ser pra
sempre o melhor lugar do mundo, o meu lar, onde meu coração se
acalma e é acolhido independente de tudo.

Eu tenho certeza que tudo o que eu quero é você... que tudo o que
eu quero é sentir o seu cheirinho, é ser abraçado e beijado por você,
é deitar e dormir ao seu lado em todos os dias da minha vida.

Quero te agradecer por cada instante desses 3 anos, por tanto
carinho, tanto cuidado, por não ter saído um minuto sequer do meu
lado, por você ser o meu mundo e o meu sol, que me dá forças para
levantar todas as manhãs, que ilumina os meus dias, que me faz
esquecer todos os problemas enquanto estou com você, que me
motiva e me levanta em todos os dias ruins e por sempre estar
sorrindo para mim! São tantas coisas que nada poderia expressar
tudo o que eu sinto e o quanto eu te amo!!

Sou a pessoa mais feliz do mundo por ter você comigo e por ser
amado por você... não me imagino nunca sem o seu amor, só me

imagino vivendo a vida inteira junto com você, realizando todos os
nossos sonhos juntos... não sonho outra coisa!!

Você é a pessoa mais maravilhosa, linda e especial que existe, a
pessoa com o sorriso mais perfeito do mundo, a pessoa do olhar que
me faz desmaiar, a pessoa que faz meu coração pulsar todas as
vezes em que olha para mim!

Obrigado por me fazer ser uma pessoa melhor todos os dias, por me
ensinar o que é o amor e por me ensinar a sorrir e eu te prometo que
vou cuidar de você e te amar em todos os segundos da minha vida!
Eu te amo hoje e para sempre, minha Beatriz ❤️❤️❤️
          </p>
        </div>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9Umyg4uWDio"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="video-title"> 3 anos de uma vida inteira ❤️</h2>
        </div>
      </div>
      <div className="youtube-background">
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/9Umyg4uWDio?autoplay=1&loop=1&playlist=nQJEp-k-ogs" 
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video Background"
        ></iframe>
      </div>
    </div>
  );
};

export default Carousel3D;

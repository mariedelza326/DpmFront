import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselDpm = () => {
  const slides = [
    {
      title: "À la Conquête des Profondeurs",
      text: "Plongez dans un univers fascinant où l'océan dévoile ses mystères les plus profonds. La Direction des Pêches Maritimes vous invite à explorer les abysses, à découvrir des écosystèmes marins uniques et à percer les secrets des créatures des grandes profondeurs.",
      image: "../media/liguria.jpg",
    },
    {
      title: "Horizon Infini, Ressources Inépuisables",
      text: "L'océan s'étend à perte de vue, symbole de vastitude et de possibilités infinies. La Direction des Pêches Maritimes vous ouvre les portes d'un monde où les ressources semblent inépuisables, mais où la responsabilité guide chacun de nos pas. Ensemble, cultivons une relation équilibrée avec les océans, où la prospérité des communautés côtières rencontre la préservation des écosystèmes marins.",
      image: "../media/dg2.jpeg",
    },
    {
      title: "Gardiens des Mers, Sentinelles de la Vie",
      text: "Devenez les gardiens des océans, les protecteurs des écosystèmes marins fragiles. La Direction des Pêches Maritimes vous appelle à devenir les sentinelles de la vie marine, à œuvrer sans relâche pour la préservation des habitats marins et la sauvegarde des espèces menacées. Ensemble, défendons la diversité marine et promouvons une pêche durable, où la conservation et l'exploitation responsable se conjuguent harmonieusement.",
      image: "../media/dg6.jpeg",
    },
    {
      title: "Océan de Possibilités, Terre de Récoltes Durables",
      text: "Naviguez sur les flots d'un océan de possibilités, où chaque vague porte avec elle la promesse d'une récolte durable. La Direction des Pêches Maritimes vous invite à embarquer dans cette aventure où la mer devient notre source de vie et de prospérité. Ensemble, cultivons un équilibre entre les besoins humains et la préservation des écosystèmes marins, pour un avenir où l'abondance des ressources s'allie à la sagesse de leur exploitation.",
      image: "../media/dg4.jpeg",
    },
    {
      title: "Cap sur l'Innovation, Boussole de l'Avenir",
      text: "Voguez vers de nouveaux horizons où l'innovation est notre boussole, et où la technologie trace la voie vers un avenir maritime prometteur. La Direction des Pêches Maritimes vous convie à explorer les frontières de la recherche et du développement, à repousser les limites de la durabilité et de l'efficacité dans la gestion des ressources marines. Ensemble, embrassons le progrès pour préserver les richesses de nos océans tout en assurant le bien-être des générations futures.",
      image: "../media/dg7.jpeg",
    },
    {
      title: "Voix des Océans, Écho de la Durabilité",
      text: "Écoutez la voix des océans, un murmure puissant appelant à la durabilité et à la préservation. La Direction des Pêches Maritimes vous propose d'être l'écho de cette voix, de porter haut et fort le message de conservation des écosystèmes marins. Ensemble, faisons entendre notre engagement pour un océan plus sain, des communautés côtières plus prospères et une biodiversité préservée.",
      image: "../media/dg4.jpeg",
    },
    {
      title: "Harmonie Maritime, Symphonie de la Vie",
      text: "Plongez dans l'harmonie envoûtante des océans, où chaque créature marine contribue à la symphonie de la vie. La Direction des Pêches Maritimes vous invite à rejoindre cette orchestration magistrale, où la conservation des habitats marins et la gestion durable des ressources façonnent une mélodie de prospérité et d'équilibre. Ensemble, préservons cette symphonie marine pour les générations futures, où chaque note résonne avec la beauté et la diversité de nos océans.",
      image: "../media/dg9.jpeg",
    },
    {
      title: "Ancrage Culturel, Navigateurs de Tradition",
      text: "Hissez les voiles vers un monde où les traditions maritimes sont un phare culturel, guidant nos pas vers un avenir durable. La Direction des Pêches Maritimes vous convie à naviguer sur les eaux de la tradition, à préserver les savoir-faire ancestraux des communautés côtières et à honorer l'héritage maritime qui nous relie à nos racines. Ensemble, cultivons un avenir où la richesse culturelle et la préservation des ressources marines vont de pair, pour que nos traditions continuent de flotter sur les flots de la modernité.",
      image: "../media/dg10.jpeg",
    },
    {
      title: "Écosystèmes Renaissance, Résilience Marine",
      text: "Explorez les rivages d'une renaissance écologique, où la résilience marine est la clé d'un avenir durable. La Direction des Pêches Maritimes vous invite à découvrir ces écosystèmes en pleine renaissance, à protéger et restaurer les habitats marins pour garantir la santé et la vitalité de nos océans. Ensemble, cultivons une nouvelle ère de prospérité marine, où la résilience écologique est notre bouclier contre les tempêtes futures",
      image: "../media/dg11.jpeg",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="background-video">
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          transitionTime={1000}
          swipeable={true}
          emulateTouch={true}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={slide.title} />
              <div className="content">
                <div className="content-box">
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselDpm;

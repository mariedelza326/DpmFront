import React, { useEffect, useState } from "react";

const ResponsiveCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      title: "Principes et valeurs",
      content:
        "À la Direction des Pêches Maritimes, nous croyons en un avenir où les océans sont sains et prospères. Nous nous engageons à préserver les écosystèmes marins pour les générations futures. Avec intégrité et dévouement, nous soutenons les communautés de pêcheurs et les consommateurs, en garantissant une gestion équitable des ressources maritimes. Notre approche innovante et nos pratiques avant-gardistes favorisent une pêche durable et efficace. Ensemble, nous protégeons notre précieux environnement marin et travaillons à un avenir meilleur pour tous.",
    },
    {
      title: "Priorités de la dpm ",
      content:
        "À la Direction des Pêches Maritimes, nos priorités sont claires et orientées vers un avenir prospère pour nos océans et nos communautés. Nous nous concentrons sur la préservation des écosystèmes marins en mettant en œuvre des pratiques de pêche durables. Nous travaillons sans relâche pour assurer la sécurité alimentaire et le bien-être des communautés de pêcheurs, tout en stimulant l'innovation et l'efficacité dans l'industrie de la pêche. Nos efforts visent à renforcer la résilience des océans face aux défis environnementaux et à garantir une utilisation équitable et responsable des ressources maritimes pour les générations actuelles et futures.",
    },
    {
      title: "Budget",
      content:
        "À la Direction des Pêches Maritimes, la gestion rigoureuse de notre budget est essentielle pour soutenir nos initiatives et atteindre nos objectifs. Nous allouons nos ressources de manière stratégique pour maximiser l'impact de nos programmes de préservation des écosystèmes marins. Chaque investissement est pensé pour favoriser la durabilité et l'innovation dans l'industrie de la pêche. Nous nous engageons à utiliser notre budget de manière transparente et responsable, en veillant à ce que chaque euro dépensé contribue à la protection de nos océans et au bien-être des communautés de pêcheurs.",
    },
    {
      title: "Réalisations",
      content:
        "À la Direction des Pêches Maritimes, nos réalisations témoignent de notre engagement envers la préservation et la gestion durable des ressources marines. Nous avons mis en œuvre des pratiques de pêche respectueuses de l'environnement qui ont conduit à la revitalisation des écosystèmes marins. Nos initiatives innovantes ont permis de réduire l'impact environnemental de la pêche et d'améliorer la sécurité alimentaire pour les communautés côtières. Grâce à des partenariats solides et une gestion efficace de nos ressources, nous avons réussi à renforcer la résilience des océans et à garantir un avenir durable pour les générations futures.",
    },
    {
      title: "Espace Travail",
      content:
        "À la Direction des Pêches Maritimes, notre espace de travail est conçu pour favoriser la collaboration, l'innovation et le bien-être de notre équipe. Nous avons créé un environnement stimulant où chaque membre peut s'épanouir et contribuer pleinement à notre mission. Nos bureaux sont équipés des dernières technologies pour faciliter le travail efficace et productif. Nous encourageons une culture de respect et d'inclusion, où chaque voix est entendue et valorisée. En investissant dans un espace de travail inspirant et fonctionnel, nous renforçons notre capacité à protéger les ressources maritimes et à soutenir les communautés de pêcheurs.",
    },
    {
      title: "Faciliter la compréhension de la dpm",
      content:
        "À la Direction des Pêches Maritimes, nous nous efforçons de rendre notre mission et nos actions claires et accessibles à tous. Nous communiquons de manière transparente et ouverte, en fournissant des informations précises et compréhensibles sur nos initiatives et nos projets. Nous utilisons des outils modernes et interactifs pour expliquer nos stratégies et nos objectifs. En facilitant la compréhension de nos activités, nous renforçons la confiance et la collaboration avec nos partenaires, les communautés de pêcheurs, et le public. Notre engagement envers la clarté et la transparence nous permet de mieux protéger et gérer les ressources maritimes pour le bénéfice de tous.",
    },
  ];

  return (
    <div className={`responsive-cards ${isVisible ? "visible" : ""}`}>
      <h1 className="main-title">Historique</h1>
      <div className="cards-container">
        {[0, 2, 4].map((startIndex) => (
          <div key={startIndex} className="card-row">
            {cards.slice(startIndex, startIndex + 2).map((card, index) => (
              <div
                key={index}
                className="card"
                style={{ animationDelay: `${(startIndex + index) * 0.1}s` }}
              >
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCards;

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment obtenir une licence de pêche ?",
      answer:
        "Vous pouvez obtenir une licence de pêche en remplissant le formulaire de demande disponible sur notre site web et en le soumettant avec les documents requis. Consultez la section 'Licences et Permis' pour plus de détails.",
    },
    {
      question: "Quelles sont les zones de pêche autorisées ?",
      answer:
        "Les zones de pêche autorisées sont indiquées sur notre carte interactive disponible dans la section 'Zones de Pêche'. Chaque zone a des règlements spécifiques que vous devez respecter.",
    },
    {
      question: "Quelles sont les espèces protégées ?",
      answer:
        "Les espèces protégées sont listées dans la section 'Espèces Protégées'. Veuillez consulter cette section pour plus d'informations sur les espèces et les mesures de protection.",
    },
    {
      question: "Comment signaler une activité de pêche illégale ?",
      answer:
        "Pour signaler une activité de pêche illégale, veuillez contacter notre hotline ou remplir le formulaire de signalement disponible sur notre site web.",
    },
    {
      question: "Quels programmes de formation sont disponibles ?",
      answer:
        "Nous proposons divers programmes de formation pour les pêcheurs. Consultez la section 'Programmes et Projets' pour plus de détails sur les formations disponibles.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FAQ - Questions Fréquentes</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-toggle-icon">
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

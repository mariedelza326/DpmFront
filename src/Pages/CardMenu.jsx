import React, { useEffect, useState } from "react";

const CardMenu = ({ icon, title, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = title;
    const duration = 10000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [title]);

  return (
    <div className="card-menu">
      <div className="icon">{icon}</div>
      <h2 className="title">+ {count}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="App">
      <div className="card-container">
        <CardMenu icon="🔥" title={40} description="Partenaires" />
        <CardMenu icon="💧" title={200} description="Employes" />
        <CardMenu icon="🌟" title={300} description="Projets" />
        <CardMenu icon="🌳" title={+500} description="Programmes" />
      </div>
    </div>
  );
};

export default Menu;

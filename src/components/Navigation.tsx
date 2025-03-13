import * as React from "react";

interface Props {
  planets: Planet[];
}

const Navigation = ({ planets }: Props) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/" className="contrast">
            <strong>🚀 Home</strong>
          </a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
      <ul>
        {planets.map((planet) => (
          <li>
            <a href={`/planets/${planet.id}`}>{planet.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

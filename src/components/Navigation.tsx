interface Props {
  planets: Planet[];
}

const Navigation = ({ planets }: Props) => {
  return (
    <nav>
      <ul>
        <li key="home">
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
          <li key={planet.id}>
            <a href={`/planets/${planet.id}`}>{planet.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

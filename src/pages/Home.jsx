import { useEffect, useState } from "react";
import { getGames } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [games, setGames] = useState();
  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);
  return (
    <>
      {games?.map((game) => (
        <div key={game.id}>
          <p>
            <Link to={"/page2/" + game.id}>
              {game.id} - {game.name}
            </Link>
            <ul>
              {game?.developers.map((developer) => (
                <li key={developer}>{developer}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </>
  );
};

export default Home;

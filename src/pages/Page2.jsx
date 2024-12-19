import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame } from "../services/api";

const Page2 = () => {
  const [game, setGame] = useState();
  const { id } = useParams();

  useEffect(() => {
    getGame(id).then((g) => setGame(g));
  }, []);
  return (
    <div>
      <p>{game?.id}</p>
      <p>{game?.name}</p>
      <ul>
        {game?.developers.map((developer) => (
          <li key={developer}>{developer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page2;

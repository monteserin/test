export const getGames = async () => {
  const response = await fetch("https://api.sampleapis.com/switch/games");
  const data = await response.json();
  return data;
};

export const getGame = async (id) => {
  const response = await fetch("https://api.sampleapis.com/switch/games/" + id);
  const data = await response.json();
  console.log("1111111111111", data);
  return data;
};

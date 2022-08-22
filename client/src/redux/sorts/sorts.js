export const sortName = (games, order) => {
  let newGames = [...games];
  if (order.order === "A-Z") {
    newGames.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  }
  if (order.order === "Z-A") {
    newGames.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
    );
  }
  if (order.order === "Top Rating") {
    newGames.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  }
  if (order.order === "Bottom Rating") {
    newGames.sort((a, b) => (a.rating < b.rating ? -1 : 1));
  }
  return newGames;
};

export const sortSource = (games, source) => {
  let newGames = [...games];
  if (source.source === "DATABASE") {
    return newGames.filter((el) => el.createdinDB);
  }
  if (source.source === "API") {
    return newGames.filter((el) => !el.createdinDB);
  }
  else return newGames;
};

export const sortGenre = (games, genre) => {
  let newGames = [...games];
  const genres1 = genre.genres;
  const filteredGames = newGames.filter((g) => {
    return g.genres.includes(genres1);
  });
  return filteredGames;
};

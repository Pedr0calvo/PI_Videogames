export const getPlatforms = (allGames) => {
  try {
    let games = [];
    allGames.map((el) => {
      games.push(el.platforms);
    });
    let gamesFlat = [];
    for (let i = 0; i < games.length; i++) {
      games[i].map((el) => {
        gamesFlat.push(el);
      });
    }
    const platforms = [...new Set(gamesFlat)];
    return platforms;
  } catch (error) {
    console.error(error);
  }
};

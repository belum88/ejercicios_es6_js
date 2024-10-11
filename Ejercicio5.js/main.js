const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filterByName = (keyword) => {
  return streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(keyword.toLowerCase())
  );
};
document
  .querySelector('input[data-function="toFilterStreamers"]')
  .addEventListener("input", function (event) {
    const keyword = event.target.value.toLowerCase();
    const filteredStreamers = filterByName(keyword);
    console.log(filteredStreamers);
  });

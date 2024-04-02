let currentState = "start";

let gameData = {
  start: {
    text: "start your odyssey in a realm where time and space intertwine",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoNkKQ8EXbCjMf145XVto1QLB0gw29tSzy6KjWDTtbw&s",
  },
  start1: {
    text: "In a realm where time and space intertwine, what path do you choose?",
    choices: ["Explore the Timeless Islands", "Delve into the Dimensional Rift"],
    consequences: ["timelessIslands", "dimensionalRift"],
    image: "https://neurosciencenews.com/files/2023/10/time-space-neurons-neuroscience.jpg",
},
timelessIslands: {
    text: "You arrive at the Timeless Islands. What do you discover?",
    choices: ["The Village Frozen in Time", "The Eternal Waterfall"],
    consequences: ["frozenVillage", "eternalWaterfall"],
    image: "https://www.watg.com/wp-content/uploads/2021/09/The-Ritz-Carlton-Maldives-Fari-Islands-scaled.jpg",
},
dimensionalRift: {
    text: "You enter the Dimensional Rift. What mysteries will you solve?",
    choices: ["The City Between Worlds", "The Maze of Mirrors"],
    consequences: ["betweenWorldsCity", "mirrorMaze"],
    image: "https://images.nightcafe.studio/jobs/oMvQUaDgJ7JCz6OBRlwd/oMvQUaDgJ7JCz6OBRlwd_8.9286x.jpg?tr=w-1600,c-at_max",
},
frozenVillage: {
    text: "You find the Village Frozen in Time. What do you do next?",
    choices: ["Unfreeze Time", "Seek the Timekeeper's Artifact"],
    consequences: ["unfreezeTime", "findTimeArtifact"],
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a83ef50-0c02-48d0-8049-2019767bdcac/dfmbrq4-fd7476e2-11b1-40b7-930a-38ba4838db3c.png/v1/fill/w_512,h_512,q_80,strp/frozen_village_by_wyzarduck_dfmbrq4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvOWE4M2VmNTAtMGMwMi00OGQwLTgwNDktMjAxOTc2N2JkY2FjXC9kZm1icnE0LWZkNzQ3NmUyLTExYjEtNDBiNy05MzBhLTM4YmE0ODM4ZGIzYy5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1ksBPQ_-9pvWbU8crhOxs1Zdzrd7-LV51gY8Vif0kQE",
},
eternalWaterfall: {
    text: "You discover the Eternal Waterfall. What secret does it hold?",
    choices: ["Harness its Power", "Find the Hidden Portal"],
    consequences: ["harnessPower", "hiddenPortal"],
    image: "https://i0.wp.com/outsidechronicles.com/wp-content/uploads/2019/01/IMG_6857.jpeg?fit=900%2C1200&ssl=1&w=640",
},
betweenWorldsCity: {
    text: "You explore the City Between Worlds. What do you encounter?",
    choices: ["The Guardians of Dimensions", "The Lost Library of Ages"],
    consequences: ["guardiansDimension", "lostLibrary"],
    image: "https://assetsio.gnwcdn.com/far-cry-6-lost-between-worlds-2.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
},
mirrorMaze: {
    text: "You navigate the Maze of Mirrors. What do you uncover?",
    choices: ["Reflection of Truth", "Escape to Reality"],
    consequences: ["reflectionTruth", "escapeReality"],
    image: "https://i.pinimg.com/474x/bb/db/cf/bbdbcfad231f23027ac4b5d7b82e3661.jpg",
},
unfreezeTime: {
    text: "You unfreeze time, restoring life to the village. Congratulations!",
    choices: ["Ending 1"],
    image: "https://media.istockphoto.com/id/518311403/photo/frozen-time-in-a-ice-cube.jpg?s=612x612&w=0&k=20&c=vGYx_0FtMSfqn9lCiCqWO3lyPBz8VhCTBpMkd45afVc=",
},
findTimeArtifact: {
    text: "You obtain the Timekeeper's Artifact, gaining control over time. Congratulations!",
    choices: ["Ending 2"],
    image: "https://www.pennsburymanor.org/wp-content/uploads/2012/06/clock-1.jpg",
},
harnessPower: {
    text: "You harness the power of the Eternal Waterfall, becoming ageless. Congratulations!",
    choices: ["Ending 3"],
    image: "https://pvadventures.com/wp-content/uploads/2020/04/tandem-rappell-big-bradley-pro-photo-1.jpg",
},
hiddenPortal: {
    text: "You find a hidden portal behind the waterfall, leading to new adventures. Congratulations!",
    choices: ["Ending 4"],
    image: "https://pics.craiyon.com/2023-07-13/21a8df9c16de4ed38197a06dd7d13bd8.webp",
},
guardiansDimension: {
    text: "You meet the Guardians of Dimensions, gaining their wisdom and protection. Congratulations!",
    choices: ["Ending 5"],
    image: "https://ms.yugipedia.com//d/d9/DimensionGuardian-MADU-EN-VG-artwork.png",
},
lostLibrary: {
    text: "You discover the Lost Library of Ages, filled with ancient knowledge. Congratulations!",
    choices: ["Ending 6"],
    image: "https://res.cloudinary.com/jerrick/image/upload/v1693088941/64ea7cada275ed001dd7c082.jpg",
},
reflectionTruth: {
    text: "You see your true self in the Mirror Maze, gaining self-enlightenment. Congratulations!",
    choices: ["Ending 7"],
    image: "https://www.nuhs.edu/wp-content/uploads/Rinas-Tree-1.jpg",
},
escapeReality: {
    text: "You escape the Maze and return to reality, wiser and more aware. Congratulations!",
    choices: ["Ending 8"],
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c610e4fa9e7827aaa346a3eb",
},

};

function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();
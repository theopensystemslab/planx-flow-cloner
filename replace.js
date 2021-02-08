const fs = require("fs");
const data = require("./data.json");

const dictionary = {};

const getId = (id) => {
  if (id === "_root") return id;

  let newId = dictionary[id];

  if (!newId) {
    newId = id.split("");
    newId[5] = "B";
    newId[6] = "r";
    newId = newId.join("");
  }

  return newId;
};

const newData = Object.entries(data).reduce((acc, [id, node]) => {
  acc[getId(id)] = node;
  if (node.edges) node.edges = node.edges.map(getId);

  return acc;
}, {});

fs.writeFile("out.json", JSON.stringify(newData, null, 2), console.log);

// console.log(newData);

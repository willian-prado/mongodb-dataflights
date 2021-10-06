const passaredo = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
}).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: passaredo,
});

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });

const latam = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "LATAM AIRLINES BRASIL",
}).count();

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: latam,
});

db.resumoVoos.find({}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });

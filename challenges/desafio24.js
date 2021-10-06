db.voos.find({
  $and: [
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 600 } },
  ],
}, { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 }).limit(1);
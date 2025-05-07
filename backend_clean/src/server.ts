import express from "express";

import {produtoRoutes}  from './interface/routes/produtoRoutes'; 

const app = express();
app.use(express.json());

app.use("/produtos", produtoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
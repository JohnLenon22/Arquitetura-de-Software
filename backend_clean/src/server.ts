import express from "express";
import { produtoRoutes }  from './interface/routes/produtoRoutes'; 
import { usuarioRoutes }  from './interface/routes/usuarioRoutes';
import { pessoaRoutes } from "./interface/routes/pessoaRoutes";
import { categoriaRoutes } from "./interface/routes/categoriaRoutes";
import { pessoaMovimentacaoRoutes } from "./interface/routes/pessoaMovimentacaoRoutes";
import { localArmazenamentoRoutes } from "./interface/routes/localArmazenamentoRoutes";
import { movimentacaoEstoqueRoutes } from "./interface/routes/movimentaoEstoqueRoutes";


const app = express();
app.use(express.json());


app.use("/users", usuarioRoutes);
app.use("/products", produtoRoutes);
app.use("/categories", categoriaRoutes);
app.use("/persons", pessoaRoutes);
app.use("/movimentPersons", pessoaMovimentacaoRoutes);
app.use("/storageLocations", localArmazenamentoRoutes);
app.use("/movimentInventories", movimentacaoEstoqueRoutes);


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
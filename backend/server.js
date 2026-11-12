import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();

const PORT = 3000;
//Esse middleware permite que o Express interprete dados JSON enviados no corpo das requisições
app.use(express.json()); 
app.use("/cadastro",usuarioRoutes);

// Configurações do Express

app.get("/",(req,res) =>{
    res.send ("API do formulário funcionando!");

});

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});
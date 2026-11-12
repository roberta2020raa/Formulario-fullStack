function cadastroUsuario(req,res){
    const dadosUsuario = req.body

   

     if ( typeof dadosUsuario.nome !== "string" || dadosUsuario.nome.trim() ===""  ){
        res.status(400).send("O nome é obrigatório");
        return
    }

    if (typeof dadosUsuario.email !== "string" || dadosUsuario.email.trim() === ""){
        res.status(400).send("O email é obrigatório");
        return
    }

    if (!dadosUsuario.email.includes("@")){
        res.status(400).send("Digite um email válido!");
        return
    }

    const nomeUsuario = dadosUsuario.nome.trim();
    const emailUsuario =dadosUsuario.email.trim();
    const partesEmail = emailUsuario.split("@");

    if (partesEmail.length !== 2 || partesEmail[0].length === 0 || partesEmail[1].length ===0 ){
        res.status(400).send("Digite um email valido!");
        return
        
    }
    if (!partesEmail[1].includes(".")){
        res.status(400).send("Digite um email valido!");
        return
    }
    if (partesEmail[1].startsWith(".")){
        res.status(400).send("O domínio não pode começar com um ponto!");
        return
    }
    

    

    res.send(`Olá ${nomeUsuario}! Seus dados foram recebidos com sucesso!`);

}

export{cadastroUsuario};

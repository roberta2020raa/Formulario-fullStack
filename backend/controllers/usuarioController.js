import usuarioValidator from "../validators/usuarioValidator.js";

function cadastroUsuario(req,res){
    const dadosUsuario = req.body
    if ( dadosUsuario === null || typeof dadosUsuario !== "object"|| Array.isArray(dadosUsuario)){
        res.status(400).send("Corpo da requisição inválido.")
        return
    }
    const nomeUsuario = dadosUsuario.nome;
    const emailUsuario =dadosUsuario.email;
    
    const senhaUsuario = dadosUsuario.senha;
   

     if (!usuarioValidator.validarNome(nomeUsuario) ){
        res.status(400).send("O nome é obrigatório")
        return
    }
    const nomeNormalizado =nomeUsuario.trim();

    if (!usuarioValidator.validarTipoEmail(emailUsuario)){
        res.status(400).send("O e-mail deve ser um texto válido.");
        return
    }
    if (!usuarioValidator.validarEmailVazio(emailUsuario)){
        res.status(400).send("O campo email tem que ser preenchido.");
        return
    }
    const emailNormalizado = emailUsuario.trim();
    const partesEmail = emailNormalizado.split("@");

    if (!usuarioValidator.validarPartesEmail(partesEmail)){
        res.status(400).send("Digite um email valido!");
        return
        
    }
    if (!usuarioValidator.validarDominioEmail(partesEmail)){
        res.status(400).send("Digite um email valido!");
        return
    }

    if(!usuarioValidator.validarTipoSenha(senhaUsuario)){
        res.status(400).send("Senha Invalida");
        return
    }

    if(!usuarioValidator.validarSenhaEmBranco(senhaUsuario)){
        res.status(400).send("A senha não pode conter apenas espaços em branco.")
        return
    }

    if(!usuarioValidator.validarTamanhoSenha(senhaUsuario)){
        res.status(400).send("A senha deve conter 8 caracteres.")
        return
    }
    
    res.send(`Olá ${nomeNormalizado}! Seus dados foram recebidos com sucesso!`);

}

export{cadastroUsuario};

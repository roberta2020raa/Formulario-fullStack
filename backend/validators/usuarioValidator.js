function validarNome(nomeUsuario){
    if(typeof nomeUsuario !=="string" || nomeUsuario.trim() === ""){
        return false
    }
        return true

}
function validarTipoEmail(emailUsuario){
    if (typeof emailUsuario !== "string"){
        return false
    }
         return true
}  
function validarEmailVazio(emailUsuario){
    if(emailUsuario.trim() === ""){
        return false
    }
        return true
}

function validarPartesEmail(partesEmail){
    if (partesEmail.length !== 2 || partesEmail[0].length === 0 || partesEmail[1].length ===0){
        return false
    }
        return true
}

function validarDominioEmail(partesEmail){
    if(!partesEmail[1].includes(".")|| partesEmail[1].startsWith(".")){
        return false
    }
        return true
}




function validarTipoSenha(senhaUsuario){
    if (typeof senhaUsuario !== "string"){
        return false
    }
        return true
}

function validarSenhaEmBranco(senhaUsuario){
    if(senhaUsuario.trim() ===""){
        return false
    }
        return true 
}

function validarTamanhoSenha(senhaUsuario){
    
    if (senhaUsuario.length < 8){
        return false
    } 
        return true
    

}
export default {
    validarNome,
    validarTipoSenha,
    validarTamanhoSenha,
    validarTipoEmail,
    validarEmailVazio,
    validarPartesEmail,
    validarDominioEmail,
    validarSenhaEmBranco

};
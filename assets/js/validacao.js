export function validacao(nome, login, senha, cpf, salario, cargo){
   
    var validarCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

    if(nome == ""){
        swal("Falha", "O preenchimento dos campos é obrigatório", "warning");
        formCadastro.nome.focus();
        return false;
    }
    if(login == ""){
        swal("Falha", "O preenchimento dos campos é obrigatório", "warning");
        formCadastro.login.focus();
        return false;
    }
    if(senha == ""){
        swal("Falha", "O preenchimento dos campos é obrigatório", "warning");
        formCadastro.senha.focus();
        return false;
    }
    if(validarCpf.test(cpf) == false){
        swal("Falha", "O preenchimento dos campos é obrigatório", "warning");
        formCadastro.cpf.focus();
        return false;
    }
    if(salario == ""){
        swal("Falha", "O preenchimento dos campos é obrigatório", "warning");
        formCadastro.salario.focus();
        return false;
    }
    if(cargo == ""){
        swal("Falha", "O preenchimento dos campos é obrigatório", "warning");
        return false;
    }
}
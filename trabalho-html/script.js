function login(){
    let usuario = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "gmail" && senha == "1234"){
        alert("Login realizado com sucesso!");
        mostrarHome();
        esconderLogin();   
    }
    else{
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}

function logout(){
    esconderHome();
    mostrarLogin();
}

function mostrarHome(){
    let telaHome = document.getElementById("home").style.display = "block";
}

function esconderLogin(){
    let telaLogin = document.getElementById("login").style.display = "none";
}

function mostrarLogin(){
    let telaLogin = document.getElementById("login").style.display = "block";
}

function esconderHome(){
    let telaHome = document.getElementById("home").style.display = "none";
}
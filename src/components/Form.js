import {useState} from "react"
export default function Form(){
    const [nome,setNome]=useState("");
    const [nome,setEmail]=useState("");
    const [nome,setCPF]=useState("");
    const [nome,setTelefone]=useState("");
    const [nome,setIdade]=useState("");
    const [nome,setUsuario]=useState("");
    const [nome,setSenha]=useState("");
    return(
        <div className="form">
            <h2>Cadastro de Cliente</h2>

            



            <div class="mb-3">
            <label for="NomeCompleto" class="form-label">Nome Completo</label>
            <input type="text" class="form-control" id="NomeCompleto" placeholder="Nome do Cliente"/>
        </div>
        <div class="mb-3">
            <label for="Email" class="form-label">E-Mail</label>
            <input type="email" class="form-control" id="Email" placeholder="Email"/>
        </div>

        <div class="mb-3">
            <label for="CPF" class="form-label">CPF</label>
            <input type="email" class="form-control" id="CPF" placeholder="CPF"/>
        </div>

        <div class="mb-3">
            <label for="Telefone" class="form-label">Telefone</label>
            <input type="tel" class="form-control" id="Telefone" placeholder="Telefone"/>
        </div>

        <div class="mb-3">
            <label for="Idade" class="form-label">Idade</label>
            <input type="Number" class="form-control" id="Idade" placeholder="Idade"/>
        </div>

        <div class="mb-3">
            <label for="Usuario" class="form-label">Usuário</label>
            <input type="text" class="form-control" id="Usuario" placeholder="Usuario"/>
        </div>

        <div class="mb-3">
            <label for="Senha" class="form-label">E-Mail</label>
            <input type="password" class="form-control" id="Senha" placeholder="Digite Aqui"/>

            <button type="button" class="btn btn-dark">Cadastrar</button>
        </div>









        </div>
    )
}
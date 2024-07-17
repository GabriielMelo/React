function enviarCEP() {
  let cephtml = document.querySelector(".text-box");
  let cep = cephtml.value;
  let conteudo = document.querySelector(".conteudo");
  conteudo.style.display = "none";
  let timer = document.querySelector(".timer");
  timer.style.display = "block";
  setTimeout(() => {
    let result = document.querySelector(".result");
    timer.style.display = "none";
    result.style.display = "block";
    return cep;
  }, 1000);
  obterDadosdoCEP(cep);
}

function enviarCEPEnter(event) {
  if (event.key === "Enter") {
    enviarCEP();
  }
}

async function obterDadosdoCEP(cep) {
  const urlAPI = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const resp = await fetch(urlAPI);
    const dados = await resp.json();
    console.log(dados);
    preencherCampos(dados);
  } catch (err) {
    console.log(err);
  }
}

function preencherCampos(dados) {
  document.querySelector(".logradouro").innerHTML = dados.logradouro;
  document.querySelector(".bairro").innerHTML = dados.bairro;
  document.querySelector(".localidade").innerHTML = dados.localidade;
  document.querySelector(".uf").innerHTML = dados.uf;
}

function voltar() {
  let text = document.querySelector(".text-box");
  text.value = "";
  let result = document.querySelector(".result");
  result.style.display = "none";
  let conteudo = document.querySelector(".conteudo");
  conteudo.style.display = "block";

  document.querySelector(".logradouro").innerHTML = "";
  document.querySelector(".bairro").innerHTML = "";
  document.querySelector(".localidade").innerHTML = "";
  document.querySelector(".uf").innerHTML = "";
}


var cep = "";

const dadosEndereco = {
  rua: "",
  bairro: "",
  cidade: "",
  estado: "",
};

function enviarCEP() {
  let cephtml = document.querySelector(".text-box");
  cep = cephtml.value;
  let conteudo = document.querySelector(".conteudo");
  conteudo.style.display = "none";
  let timer = document.querySelector(".timer");
  timer.style.display = "block";
  setTimeout(() => {
    let result = document.querySelector(".result");
    timer.style.display = "none";
    result.style.display = "block";
    return cep;
  }, 1300);
  obterDadosdoCEP(cep);
}

async function obterDadosdoCEP(cep) {
  const urlAPI = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const resp = await fetch(urlAPI);
    const dados = await resp.json();

    console.log(dados);
    dadosEndereco.rua = dados.logradouro;
    dadosEndereco.bairro = dados.bairro;
    dadosEndereco.cidade = dados.localidade;
    dadosEndereco.estado = dados.uf;
    preencherCampos(dadosEndereco);
  } catch (err) {
    console.log(err);
  }
}

function preencherCampos(dadosEndereco) {
  document.querySelector(".logradouro").innerHTML = dadosEndereco.rua;
  document.querySelector(".bairro").innerHTML = dadosEndereco.bairro;
  document.querySelector(".localidade").innerHTML = dadosEndereco.cidade;
  document.querySelector(".uf").innerHTML = dadosEndereco.estado;
}

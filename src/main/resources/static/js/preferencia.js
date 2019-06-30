var primeiraPreferencia = null;
var segundaPreferencia = null;
var disciplinas = new Array ();

window.onload = function () {
    $.ajax({
        type:'GET',
        url:'', //rota que recebe um array de objetos de todas as disciplinas cadastradas
        success: function (responseText, textStatus, jqXHR) {
            var corpoTabela = document.querySelector ("#tabelaEsquerda");
            disciplinas = responseText.data;
            for (let index = 0; index <= disciplinas.length; index++) {
                var linha = document.createElement("tr");
                var campoDisciplina = document.createElement("td");
                var campoCurso = document.createElement("td");
                var campoTipo = document.createElement("td");
                var campoButao = document.createElement("td");
                var textoDisciplina = document.createTextNode (disciplinas[index].nome);
                var textoCurso = document.createTextNode (disciplinas[index].curso);
                var textoTipo = document.createTextNode (disciplinas[index].tipo);
                var butao = document.createElement ("button");

                butao.className = "btn btn-primary"
                butao.innerHTML = ">>"
                butao.addEventListener("click", function () {
                    if (primeiraPreferencia == null) {
                        primeiraPreferencia = disciplinas[index];
                        preencherTabelaPrimeira (primeiraPreferencia);
                    }else if (segundaPreferencia == null) {
                        segundaPreferencia = disciplinas[index];
                        if (primeiraPreferencia == segundaPreferencia) {
                            alert ('Essa já é sua primeira preferencia')
                            segundaPreferencia = null
                        }else {
                            preencherTabelaSegunda (segundaPreferencia);
                        }
                    }else {
                        alert ('Você já escolheu duas opções')
                    }
                })

                campoDisciplina.appendChild (textoDisciplina);
                campoCurso.appendChild (textoCurso);
                campoTipo.appendChild (textoTipo);
                campoButao.appendChild (butao);
                
                linha.appendChild (campoDisciplina);
                linha.appendChild (campoCurso);
                linha.appendChild (campoTipo);
                linha.appendChild (campoButao);

                corpoTabela.appendChild (linha);
            }
        },
        error: function (xhr, status, error) {
            alert('>>'+xhr.responseText);
        }
    });
}

function preencherTabelaPrimeira () {
    if (primeiraPreferencia != null) {
        var corpoTabelaEscolhida = document.querySelector('#tabelaDireita');
        var linha = document.createElement("tr");
        var campoButaoTirar = document.createElement("td");
        var campoDisciplinaEscolhida = document.createElement("td");

        var butaoTirar = document.createElement ("button");
        var textoDisciplinaEscolhida = document.createTextNode (primeiraPreferencia.nome);

        butaoTirar.className = "btn btn-warning"
        butaoTirar.innerHTML = "<<"
        butaoTirar.addEventListener("click", function () {
            primeiraPreferencia = null;
            linha.style.display = 'none'
            campoButaoTirar.style.display = 'none'
            campoDisciplinaEscolhida.style.display = 'none'
        })

        campoDisciplinaEscolhida.appendChild (textoDisciplinaEscolhida);
        campoButaoTirar.appendChild (butaoTirar);

        linha.appendChild (campoDisciplinaEscolhida);
        linha.appendChild (campoButaoTirar);
        corpoTabelaEscolhida.appendChild (linha);
    }
}

function preencherTabelaSegunda () {
    if (segundaPreferencia != null) {
        var corpoTabelaEscolhida = document.querySelector('#tabelaDireita');
        var linha = document.createElement("tr");
        var campoButaoTirar = document.createElement("td");
        var campoDisciplinaEscolhida = document.createElement("td");

        var butaoTirar = document.createElement ("button");
        var textoDisciplinaEscolhida = document.createTextNode (segundaPreferencia.nome);

        butaoTirar.className = "btn btn-warning"
        butaoTirar.innerHTML = "<<"
        butaoTirar.addEventListener("click", function () {
            segundaPreferencia = null;
            linha.style.display = 'none'
            campoButaoTirar.style.display = 'none'
            campoDisciplinaEscolhida.style.display = 'none'
        })

        campoDisciplinaEscolhida.appendChild (textoDisciplinaEscolhida);
        campoButaoTirar.appendChild (butaoTirar);

        linha.appendChild (campoDisciplinaEscolhida);
        linha.appendChild (campoButaoTirar);
        corpoTabelaEscolhida.appendChild (linha);
    }
}

function atualizarPreferencias () {
    if (primeiraPreferencia == null || segundaPreferencia == null) {
        alert ('Selecione suas duas preferências');
    }else {
        fetch('https://reqres.in/api/users/2', {
            method: 'PUT',
            body: JSON.stringify({
                primeiraPreferencia,
                segundaPreferencia
            })
        })
            .then (function (response) {
                return response.json();
            })
            .then (function (data) {
                alert ('Você escolheu ' + primeiraPreferencia.nome + " e " + segundaPreferencia.nome + ' como preferências. \nAlterações podem ser feitas a qualquer momento!\nBasta escolher novas opções para substituir.')
                window.location.href = "";
            })
    }
}
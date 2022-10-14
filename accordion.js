let obj1 = {
    codigo: "1",
    nome: "Bootstrap #1",
    detalhe: "Testar variáveis"
}
let obj2 = {
    codigo: "2",
    nome: "JavaScript #2",
    detalhe: "Finalizar projeto"
}
let obj3 = {
    codigo: "3",
    nome: "Github #3",
    detalhe: "Atualizar conteúdo"
}

let addHtml = "";

let lista = [obj1, obj2, obj3];


lista.forEach(element => {
    let accordion = `<div class="accordion-item">
    <h2 class="accordion-header" id="accordion-${element.codigo}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-accordion-${element.codigo}" aria-expanded="true" aria-controls="collapse-accordion-${element.codigo}">
        ${element.nome}
      </button>
    </h2>
    <div id="collapse-accordion-${element.codigo}" class="accordion-collapse collapse" aria-labelledby="accordion-${element.codigo}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${element.detalhe}
      </div>
    </div>
    </div>`;
    
    addHtml += accordion;
});


let containerAccordion = document.getElementById('accordionExample');

containerAccordion.innerHTML = addHtml;
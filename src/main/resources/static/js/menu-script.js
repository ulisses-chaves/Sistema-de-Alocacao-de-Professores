function semMouse(){
    document.getElementById('texto-menu').innerHTML = '';
}
function logout(){
    document.getElementById('texto-menu').innerHTML = 'Encerre a sessão';
}
/* professor */
function defPreferencias(){
    document.getElementById('texto-menu').innerHTML = 'Defina suas preferências para as disciplinas que deseja lecionar';
}
function visAlocacoes(){
    document.getElementById('texto-menu').innerHTML = 'Visualize as alocações realizadas';
}
/* supervisor */
function histAlocacao(){
    document.getElementById('texto-menu').innerHTML = 'Visualize o histórico de alocações';
}
function preencherSlotsDisc(){
    document.getElementById('texto-menu').innerHTML = 'Preencha os slots das disciplinas';
}
function alocarProf(){
    document.getElementById('texto-menu').innerHTML = 'Alocar os professores para as disciplinas';
}
function preferencias(){
    document.getElementById('texto-menu').innerHTML = 'Visualize e decida as preferências de cada professor para as disciplinas';
}
/* coordenador */
function horarioObr(){
    document.getElementById('texto-menu').innerHTML = 'Defina o horário das disciplinas obrigatórias';
}
function slotsDisc(){
    document.getElementById('texto-menu').innerHTML = 'Defina os slots das disciplinas';
}
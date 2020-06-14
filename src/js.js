function ajouter() {
    var nom = document.getElementById('lastname');
    var prenom = document.getElementById('firstname');
    var poste = document.getElementById('poste');

    var p = document.querySelector('.' + poste.value + ' .name');
    p.innerText = prenom.value + " " + nom.value;
}

function supprimer(classPoste) {
    var p = document.querySelector('.' + classPoste + ' .name');
    p.innerText = "";
}

var currentText = null;

function createOnClick(className) {
    var maillot = document.querySelector(className + ' .maillot');
    var text = document.querySelector(className + ' .name');

    maillot.addEventListener('click', function(event) {
        if (currentText) {
            var tmp = currentText.innerText;
            currentText.innerText = text.innerText;
            text.innerText = tmp;

            currentText = null;
        } else {
            currentText = text;
        }
    });
}

createOnClick('.G');
createOnClick('.DCG');
createOnClick('.DCD');
createOnClick('.DD');
createOnClick('.DG');
createOnClick('.MDCG');
createOnClick('.MDCD');
createOnClick('.MOC');
createOnClick('.AG');
createOnClick('.AD');
createOnClick('.BU');




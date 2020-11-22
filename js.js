/*var a = window.prompt("écrire un nombre");


if(a%2 == 0)
{
    document.write("nombre pair")
}
else
{
    document.write("nompre impair");
} 

var c
var b = window.prompt("quelle est votre année de naissance?");
parseInt(b);
c = 2020 - b;
window.alert('vous avez :' +c+'ans');
if(c >=18){
    window.alert('vous êtes majeur')
}
else {
    window.alert('vous êtes mineur')
}
var r
var n = parseInt(prompt('Saisir un nombre'));
var s = prompt('Saisir un signe parmis (+, -, *, /) ');
var c = parseInt(prompt('Saisir un deuxieme nombre'));


if(s == "+") {
    window.alert(n + c);
}

else if(s == '-') {
    window.alert(n - c);
}

else if(s == '*') {
    window.alert(n * c);
}

else if(s == '/'&& c != 0) {
    window.alert(n / c);
}
else {
    window.alert('error');
}

*/







function GetInteger(a) // 1
{
do 
{
do {   
            var entier = parseInt(prompt('veuillez entrer un nombre'));
        }
        while(isNaN(entier))
        
    }
        while(entier < 0)
        return entier;
}


function InitTab(b) // 2
{
    alert('vous allez créer un tableau et choisir son nombre d\'emplacement');
do
{
    var n = GetInteger();
    
    var tableau = new Array(n);
    var i = confirm('voulez vous créer un tableau avec '+n+' emplacement(s)');
}
while(i == false)
    alert('tableau de '+n+' emplacement(s) créer');
    return tableau;
}




function SaisieTab(c) // 3
{
    var tab = [];
    tab  = c;
    alert('vous allez remplir le tableau');
for (var i = 0; i < tab.length; i++) 
{
    tab[i] = parseInt(GetInteger()); 
}
return tab;
}


function AfficheTab(poste) // 4 
{
  var tab =[];
  tab = poste;

  document.write('voici votre tableau '+tab);
}


function RechercheTab(rang) //5
{
    var tab =[];
    tab = rang;
    alert('selectionner l\'emplacement du tableau que vous voulez afficher');
    var b = GetInteger();
    if (b <= tab.length)
    {
    alert(tab[b-1]);
    }
    else
    {
        RechercheTab(tableau);
    }

}


function InfoTab(moyenne) //6 
{
    var tab = [];
    tab = moyenne;
    var calcul = (a, b) => a + b;
    
    alert('La somme totale du tableau est : '+tab.reduce(calcul))
    var moy = tab.reduce(calcul)
    alert('La moyenne du tableau est : '+moy/tab.length)
}



GetInteger();
var tab = (InitTab());
var tableau = SaisieTab(tab); 
AfficheTab(tableau);
RechercheTab(tableau);
InfoTab(tableau);
triabulle(tableau);
document.write(' le tri a bien été effectué '+tab);



function triabulle(tableau){
    
        for(var i=0; i < tableau.length-1; i++) 
        {
            if(tableau[i] > tableau[i+1])
             {
                var temporaire = tableau[i];
                tableau[i] = tableau[i+1];
                tableau[i+1] = temporaire;
            }
        }
}
var info = document.getElementById("label1");
var bouton = document.getElementById("button1");
var text = document.getElementById("textBox1");
//parseInt(text.value);


function randy(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



function verif() {
    
    if (text.value == '')
    {
        text.value = '';
    }
    else if (text.value < r)
    {
        text.value = 'Plus haut';
    }
    else if (text.value > r)
    {
        text.value = 'Plus bas';
    }
    else if (text.value = r)
    {
        alert('Bien joué !');
    }
}
var r = randy(5000);
console.log(r)

bouton.addEventListener('click', verif());



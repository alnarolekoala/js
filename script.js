/********************************************************************************************************************************************************************************
 * ******************************************************************** Exercice 1 ************************************************************************************************* 
 * **************************************************************************************************************************************************************************** */



 /* Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

Le programme doit demander les âges successifs.

Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

Donnez le programme Javascript correspondant qui affiche les résultats.*/


/*faire écrire a l utilisateur des ages a l aide d une boucle  
rentrer les données dans un tableau avec une boucle qui s arrete quand l utilisateur rentre un chiffre > 99 
tri a bulle sur le tableau
ressortir du tableau et afficher le nombre d age  de      20> N                   20< N < 40                        40< N*/











//-----------------------------------------------création du tableau------------------------------------------

var tableau = []

// ----------------------------------------------Remplir le tableau------------------------------
function SaisieTab(c) // 3
{
    
    var tab  = c;

    alert('Saisir les âges :');

var tab = [];
var i = 0;

var a = new Array();
    do {
    tab[0+i] = [GetInteger()];
   // console.log(tab[0+i]);
    a[0+i] = tab[0+i];
    var b = tab[0+i];
    console.log(a);

    i++;
    }
    while(b < 100)
    return a;
}
// ----------------------------------------------Remplir le tableau------------------------------



// ----------------------------------------------tri a bulle------------------------------

function triabulle(montab){
    var c = montab;
    var x;
    do {
        x = false;
    for(var i=0; i < c.length-1; i++) 
    {
        if(c[i] > c[i+1])
         {
            var temporaire = c[i];
            c[i] = c[i+1];
            c[i+1] = temporaire;
            x = true;

        }
    }
} while(x)
    return c;
}
// ----------------------------------------------tri a bulle------------------------------

// ---------------------------------------------fonction uniquement des chiffres rentré------------------------------------------------------
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

// ---------------------------------------------fonction uniquement des chiffres rentré------------------------------------------------------


alert("go");
var montab = SaisieTab(tableau);

console.log(montab);

console.table(montab);
/*
var tabtri = triabulle(montab);

console.log(tabtri);

var m20 = new Array();
var mp20 = new Array();
var p40 = new Array();

for(var i = 0; i < montab.length; i++)
{
    if (montab[i] < 20){
    
}
if(montab[i] >20 && )*/
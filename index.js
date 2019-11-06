function Somme() {
    var nbr1,nbr2,sum;
    nbr1= Number(document.getElementById("montant1").value);
    nbr2= Number(document.getElementById("montant2").value);
    
    sum = nbr1 + nbr2;
    document.getElementById("msg").innerHTML=sum;

    
}



function Verif(mode) {
    if (isNaN(document.getElementById('montant2').value) || isNaN(document.getElementById('montant1').value) ) {
         document.getElementById("button").style.display = 'none'; 
         alert('LA SAISIE DOIT ETRE UN NOMBRE !!');
         
        
    }
    else if ((document.getElementById('montant2').value) &&(document.getElementById('montant1').value)) {
        
       document.getElementById("button").style.display="block" ;
   }
 }
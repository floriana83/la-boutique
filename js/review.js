let review = new Array();
review[0]="Il miglior ecommerce di sempre";
review[1]="Ottimo rapporto qualità prezzo";
review[2]="Vorrei avervi scoperto prima!!";
review[3]="Consigliatissimo, spedizioni velocissime";

let counter = 0;

function loop() {
    if (counter > 2) counter = 0;
    document.getElementsById("review").firstElementChild.innerHTML = review [counter];
    counter++; 
    setTimeout(loop, 2000)
}
loop()
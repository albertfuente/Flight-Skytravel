
var flights = [{
    id: 00,
    to: 'Bilbao',
    from: 'Barcelona',
    cost: 1600,
    scale: false
  },
  {
    id: 01,
    to: 'New York',
    from: 'Barcelona',
    cost: 700,
    scale: false
  },
  {
    id: 02,
    to: 'Los Angeles',
    from: 'Madrid',
    cost: 1100,
    scale: true
  },
  {
    id: 03,
    to: 'Paris',
    from: 'Barcelona',
    cost: 210,
    scale: false
  },
  {
    id: 04,
    to: 'Roma',
    from: 'Barcelona',
    cost: 150,
    scale: false
  },
  {
    id: 05,
    to: 'London',
    from: 'Madrid',
    cost: 200,
    scale: false
  },
  {
    id: 06,
    to: 'Madrid',
    from: 'Barcelona',
    cost: 90,
    scale: false
  },
  {
    id: 07,
    to: 'Tokyo',
    from: 'Madrid',
    cost: 1500,
    scale: true
  },
  {
    id: 08,
    to: 'Shangai',
    from: 'Barcelona',
    cost: 800,
    scale: true
  },
  {
    id: 09,
    to: 'Sydney',
    from: 'Barcelona',
    cost: 150,
    scale: true
  },
  {
    id: 10,
    to: 'Tel-Aviv',
    from: 'Madrid',
    cost: 150,
    scale: false
  }
];
var finalCost = [];
var averageCost = "";
var destinations = [];
var flightX=document.querySelectorAll(".x");
var inputValue=document.querySelector(".inputValue");
var inputSearch=document.querySelector(".select");
var btn=document.querySelector(".btn");
var insertSearch=document.querySelector(".insertSearch")
var fromValue=document.querySelector(".fromValue");
var toValue=document.querySelector(".toValue");
var buy=document.querySelector("#buy");
var btn3=document.querySelector(".btn3");
btn3.style.visibility="hidden";

// stores the flights dependning on the value and input(higher,equal,lower)
var finalFlights=[];


//checks all the flights in the array and stores them in the destinations array
function startAirlines() {
  //for para buscar cada id
  for (var i = 0; i < flights.length; i++) {

    var escalas = "";
    if (flights[i].scale === true) {
      escalas = ("y tiene escalas.");
    } else if (flights[i].scale === false) {
      escalas = ("y no realiza ninguna escala.");
    } else {
      console.log("error");
    }
    destinations.push(`El vuelo con origen: <strong>${flights[i].from}</strong>, y destino: <strong>${flights[i].to}</strong> tiene un coste de <strong>${flights[i].cost}</strong> € y ${escalas}`);
  }
}
startAirlines();

//gets the destinations value array and it is transfered to the web div
for(var i=0;i<flightX.length;i++){
  flightX[i].innerHTML=destinations[i];
}

//searhes the flights based on higher,equal or lower price
function busqueda(){
  var price=inputValue.value;
  var search=inputSearch.value;
  if (search === "Mayor") {
    for (i = 0; i < flights.length; i++) {
      if (flights[i].cost >= price) {
        //Mostrar cada vuelo cuando es superior al precio
        finalFlights+=flights[i].from +" - " +flights[i].to+" / ";
        console.log(flights[i]);
        insertSearch.innerHTML=finalFlights;
        btn.style.visibility="hidden";
        btn3.style.visibility="visible";
      }
    }
  }
  if (search === "Igual") {
    for (i = 0; i < flights.length; i++) {
      if (flights[i].cost == price) {
        finalFlights+=flights[i].from +" - " +flights[i].to+" / ";
        console.log(flights[i]);
        insertSearch.innerHTML=finalFlights;
        btn.style.visibility="hidden";
        btn3.style.visibility="visible";
      }
    }
  }
  if (search === "Menor") {
    for (i = 0; i < flights.length; i++) {
      if (flights[i].cost <= price) {
        finalFlights+=flights[i].from +" - " +flights[i].to+" / ";
        console.log(flights[i]);
        insertSearch.innerHTML=finalFlights;
        btn.style.visibility="hidden";
        btn3.style.visibility="visible";
      }
    }
  }
}

//matches if the from and the to exist then you can buy the flight
function match(){
  var check=false;
  flights.filter(function(item) {
    if (item.to.toLocaleLowerCase()==toValue.value.toLowerCase() && item.from.toLowerCase()==fromValue.value.toLowerCase()){
      alert(`Vuelo comprado: ${fromValue.value} - ${toValue.value}`)
      check=true;
    }

});
if(check==false){
  alert("No existe este vuelo");
}
}
//function to set the search to 0 and you can research again
function recheck(){
  finalFlights="";
  insertSearch.innerHTML="";
  btn.style.visibility="visible";
  btn3.style.visibility="hidden";

}

btn.addEventListener("click",busqueda);
buy.addEventListener("click",match);
btn3.addEventListener("click",recheck);


  // CSS animation for the sticky bar credits to  WESBOS
  const nav = document.querySelector('#main');
  let topOfNav = nav.offsetTop;
  function fixNav() {
    console.log(topOfNav,window.scrollY);
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }
  window.addEventListener('scroll', fixNav);

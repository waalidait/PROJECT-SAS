var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];

//fun qui affiche les trajets
function afficher(){
     console.log("=== TRAJETS DISPONIBLES ===");
     for(let i = 0;i<trips.length;i++){
        console.log(`#${trips[i].id} ${trips[i].departure} -> ${trips[i].destination}`);
        console.log(`depart: ${trips[i].departureTime}`);
        console.log(`arrive: ${trips[i].arrivalTime}`);
        console.log(`Prix ${trips[i].price}`)
        console.log(`place disponible ${trips[i].availableSeats}`)
        console.log("");
        console.log("");  
    }
}

function checkname(){
    let nom 
      do{
        nom = prompt("Nom du passager :")
         if (nom.length > 0 ) {
            return nom;
        }
        console.log("il faut ecrir le nom ")
     }while(nom == "")
}

function checkidentifian(){
      let identifian;
      do{
        identifian = Number(prompt("Identifiant du trajet :"));
        if (identifian >= 1 && identifian <= 20 ) {
            return identifian;
        }
        else{
         console.log("Trajet introuvable.")
        }
 
       }while(identifian == "" || identifian > 20 || identifian <= 0)
}
    let id_co = 1;
    function Acheter(){
    let obj = {}
    let name = checkname()
    let identifian = checkidentifian()

    let seatnbr ;
    for(let i = 0; i < trips.length;i++){

         if(trips[i].id == identifian && trips[i].availableSeats == 0){
            console.log("Trajet complet.")
         }

        else if(trips[i].id == identifian){
            seatnbr = trips[i].availableSeats
            trips[i].availableSeats -= 1

            obj.id = id_co++
            obj.passengerName = name
            obj.tripId = trips[i].id
            obj.price = trips[i].price
            obj.seatNumber = seatnbr;
            obj.dest = trips[i].departure
            obj.arriv = trips[i].destination
            tickets.push(obj);

            console.log("======Ticket acheté avec succès.====");
            console.log("=====================================");
            console.log("");
            console.log(`ticke#${obj.tripId}`);
            console.log(`Passager: ${obj.passengerName}`);
            console.log(`trajet: ${obj.dest} --> ${obj.arriv}`);
            console.log(`place : ${obj.seatNumber}`)
            console.log(`prix : ${obj.price}`)
            console.log("");
            console.log("=====================================");
             break
         }
          
         
    }
    
     
 }
  
 function affichetickes(){
   let objticket=tickets;
   if(objticket == ""){
            console.log("Aucun ticket enregistré.");
        }
      for(let i = 0; i < objticket.length; i++){
         
       console.log("=== TICKETS ===")

       console.log(`ticket#${objticket[i].tripId}`);
       console.log(`passager :${objticket[i].passengerName}`);
       console.log(`trajet :${objticket[i].dest} --> ${objticket[i].arriv}`);
       console.log(`place :${objticket[i].seatNumber}`);
       console.log(`prix : ${objticket[i].price}`);
       console.log("");
       
   }
 }

 function annuletickes(){
    let ann = prompt("ecrir le id de ticket: ")
    let ticket;
    let index;
    for(let i = 0; i < tickets.length;i++){
        if(tickets[i].id == ann){
           ticket = tickets[i]
           break;
        }
    }
     index = tickets.indexOf(ticket)
     console.log(index)

     tickets.splice(index, 1)

    console.log("Ticket annulé avec succès.")

 }
 function Rechercher(){
    let nom = prompt("ecrir le nom : ")
    for(let i = 0;i < tickets.length; i++){
        if(tickets[i].passengerName == nom){
       console.log("===tickes===")
       console.log("")
       console.log(`ticket#${tickets[i].tripId}`);
       console.log(`passager :${tickets[i].passengerName}`);
       console.log(`trajet :${tickets[i].dest} --> ${tickets[i].arriv}`);
       console.log(`place :${tickets[i].seatNumber}`);
       console.log(`prix : ${tickets[i].price}`);
       console.log("")
        }
    }
 }

 function Filtrer(){
    let ville = prompt("entret le nom de depart ")
    for(let i = 0; i < trips.length ;i++){
        if(trips[i].departure == ville ){
            console.log(`${trips[i].departure} --> ${trips[i].destination}`)
        }
    }
 }

  function main(){
    let n;
    do{ 
        console.log("===============================")
        console.log("RAILWAY MANAGER")
        console.log("===============================")
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter")
        n = Number(prompt("Tapez un choix (1-6)"))
            
        switch(n){
            case 1:
                afficher()
                break;
            case 2:
                Acheter()
                break;
            case 3:
                affichetickes()                
                break;
            case 4:
                annuletickes()
                break;
            case 5:
                 Rechercher()
                break;
            case 6:
                 Filtrer()
                break;
            case 7:

                break;
            case 0:

                break;
        }
    }while(n!==0)

         
}

main()

 
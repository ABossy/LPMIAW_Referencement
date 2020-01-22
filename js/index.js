$(document).ready(function(){
  var locationArray = document.location.pathname.split('/');
  var filename = locationArray[locationArray.length -1];
  menu();
  mainFooter()
  if(filename == "destination.html"){
    destination();
    form();
    addDestination();
  }

  if(filename == "contact.html"){
    contact();
  }

  if(filename == "video.html"){
    video();
  }

  if(filename == "index.html"){
    texteAccueil();
    imagesAccueil();
  }

  if(filename == "services.html"){
    map();
  }

});


//Navbar//////////////////
function menu(){
  var filename = document.location.pathname.split('/').slice(-1)[0];

  var classNames = filename === "index.html" ? "navbar-dark" : "navbar-light bg-light"
  navbar = `
  <nav class="navbar navbar-expand-lg ${classNames}">
    <a class="navbar-brand" href="#"><img src="../img/logo.svg" alt=""/> ATR</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a href="index.html" class="nav-link">Accueil</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="menu.html" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Connexion</a>
            <a class="dropdown-item" href="#">Recherche</a>
            <a class="dropdown-item" href="#">Reservation</a>
            <a class="dropdown-item" href="#">Promotion</a>
          </div>
        </li>
        <li class="nav-item">
          <a href="services.html" class="nav-link" >
            Services
          </a>
        </li>
        <li class="nav-item"><a href="destination.html" class="nav-link">Destinations</a></li>
        <li class="nav-item"><a href="audio.html" class="nav-link">Voyage virtuel: audio</a></li>
        <li class="nav-item"><a href="video.html" class="nav-link">Voyage virtuel: vidéo</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>

      </ul>
    </div>
  </nav>
  `;

  $('#menu').html(navbar);
}

// pied de page commun
function mainFooter() {
  $('#mainFooter').html(`<p>Copyright (c) 2018 Copyright Holder All Rights Reserved.</p>`);
}

// formulaire add destination
function form(){
  formulaire = `
        <div class="form-group">
            <label for="input-country">Pays</label>
            <input type="text" id="input-country" class="form-control">
        </div>
        <div class="form-group">
            <label for="input-circuit">Circuit</label>
            <input type="text" id="input-circuit" class="form-control">
        </div>
        <div class="form-group">
            <label for="input-image">Image</label>
            <input type="text" id="input-image" placeholder="../img/norvege.jpg" class="form-control">
        </div>
        <div class="form-group">
            <label for="input-price">Prix</label>
            <input type="number" id="input-price" class="form-control">
        </div>
    `;

    $('#exampleModal').find( '.modal-body' ).html(formulaire);
  }

//Page Destination ///////////////////////////////////
function destination(){

  var destinations = [
    {Pays:"Etats-Unis",Circuit:"Zion",Prix:1500, Image:"../img/usa.jpg"},
    {Pays:"Norvege",Circuit:"Oslo",Prix:1800,Image:"../img/norvege.jpg"},
    {Pays:"Islande",Circuit:"Reykjavik",Prix:2000,Image:"../img/islande.jpg"},
    {Pays:"Ecosse",Circuit:"Glasgow",Prix:1000,Image:"../img/ecosse.jpg"},
  ];

  destinations.forEach(destinations => {
    $(".destinations-list").append(
      `<div class="destination-item">
      <div class="destination-card">
        <header class="destination-card__header">
          <h1 class="destination-card__title">${destinations.Circuit}</h1>
        </header>
        <p class="destination-card__country">${destinations.Pays}</p>
        <p class="destination-card__price">${destinations.Prix}€</p>
        <figure class="destination-card__image">
          <img width="230px"height="150px" alt="${destinations.Circuit}" title="${destinations.Circuit}" src="${destinations.Image}">
        </figure>
        <div class="destination-card__tools">
          <button type="button" class="btn btn-warning" id="updateDestination">modifier</button>
          <button type="button" class="btn btn-danger" onclick="deleteDestination(this)" >supprimer</button>
        </div>
      </div>
      </div>`)
    })
  }

//////////// AJout d'une destination /////////////////////////////
  function addDestination(){
    $('#AddForm').submit(function(event) {
      console.warn( 'toto')
      event.preventDefault();
      data = [ $('#input-country').val(),
        $('#input-circuit').val(),
        $('#input-price').val(),
        $('#input-image').val()
      ];

      $('.destinations-list').append(`
        <div class="destination-item">
        <div class="destination-card">
          <header class="destination-card__header">
            <h1 class="destination-card__title">${data[0]}</h1>

          </header>
          <p class="destination-card__country">${data[1]}</p>

          <p class="destination-card__price">${data[2]}€</p>
          <figure class="destination-card__image"><img width="230" height="150" alt="${data[0]}" title="${data[0]}" src="${data[3]}"></figure>
          <div class="destination-card__tools">
            <button type="button" class="btn btn-warning" id="updateDestination">modifier</button>
            <button type="button" class="btn btn-danger" onclick="deleteDestination(this)" >supprimer</button>
          </div>
        </div>
        </div>
        `);
      $('#exampleModal').modal( 'hide' );

     });


  }

//////////////// Supprimer une destination //////////////////////////////
  function deleteDestination(btn){
    var $parent = $(btn).parents( '.destination-item' );
    $parent.remove();
    // var row = btn.parentNode.parentNode;
    // row.parentNode.removeChild(row);
  }

/////////// Modifier une destination //////////////////////////////
  function updateDestination(){
    $('#updateDestination').click(function(){
/// pas eu le temps de finir



    })


  }


  function contact(){
    contactForm = `
            <form id="contact">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Votre nom"  tabindex="1" required autofocus>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Votre adresse mail" tabindex="2" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Votre numéro de téléphone (facultatif)" tabindex="3" required>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                        <textarea class="form-control" rows="8" placeholder="Votre message..." tabindex="5" required></textarea>
                    </div>
                  </div>
                </div>
                <div class="text-right">
                    <button type="submit" class="btn btn-primary" id="contact-submit">
                      <i class="fa fa-envelope"></i>
                      Envoyez
                    </button>
                </div>
            </form>
    `

      $('#contact').html(contactForm);
  }

  function video(){
    var videoDestination = [
      {Titre:"Etats-Unis",Description:"Le parc national de Zion est une réserve naturelle du sud-ouest de l'Utah, célèbre pour les falaises rouges abruptes du canyon de Zion.",Video:"../video/usa.mp4"},
      {Titre:"San Francisco",Description:"San Francisco, en Californie du Nord, est une ville vallonnée à la pointe d'une péninsule entourée par l'océan Pacifique et la baie de San Francisco.",Video:"../video/SF.mp4"},
      {Titre:"Islande",Description:"L'Islande est un pays insulaire nordique aux paysages spectaculaires composés de volcans, geysers, sources chaudes et champs de lave.",Video:"../video/iceland.mp4"},
      {Titre:"Japon",Description:"Le Japon est un pays insulaire situé dans l'océan Pacifique. Il comporte des villes denses, des palais impériaux, des parcs nationaux montagneux ainsi que des milliers de temples et de sanctuaires.",Video:"../video/japan.mp4"},


    ];

    videoDestination.forEach(videoDestination => {
      $(".videos-list").append(
        `<div class="video-item">
        <div class="video-card">
          <header class="video-card__header">
            <h1 class="video-card__title">${videoDestination.Titre}</h1>
          </header>
          <p class="video-card__description">${videoDestination.Description}</p>
          <figure class="video-card__video">
            <video controls autoplay width="230px" height="230px"src="${videoDestination.Video}">
          </figure>
        </div>
        </div>
        `)
      });

}

function texteAccueil(){
  texte = `
    <h1>Agence tout risque</h1>
    <div class="presentation">
      <p>
        Poussez la porte de notre Cité des voyageurs et découvrez un espace entièrement dédiés à vos projets de voyage. Riches de leur expérience et de leurs passions, nos spécialistes vous aideront à élaborer un voyage sur mesure correspondant parfaitement à vos attentes. Périples culturels, week-ends, voyages à la carte en individuel, quel que soit votre désir et votre destination, vous trouverez ici une solution à des prix attractifs puisque vendue en direct et sans intermédiaire.
      </p>
      <p>
        Aménagée en 2005, notre Cité des Voyageurs se distingue par une ambiance étonnante, à laquelle participent son mur décoratif d’escalade et sa passerelle très aérienne. Anecdotiques au premier abord, ces détails décoratifs reflètent aussi l’esprit de Voyageurs du Monde qui souhaite que les émotions du voyage naissent dès votre première visite.
      </p>

    </div>
  `
    $('main').html(texte);
}

function imagesAccueil() {
  var imagesList = [
    '../img/backgrounds/jack-anstey-XVoyX7l9ocY-unsplash.jpg',
    '../img/backgrounds/matthias-mullie--qg1-dATq0U-unsplash.jpg',
    '../img/backgrounds/norris-niman-ABtmE3jhaPQ-unsplash.jpg',
    '../img/backgrounds/yuriy-garnaev-fcDnEf0TUV0-unsplash.jpg'
  ];

  var $images = $( '<figure class="slideshow"></figure>' );

  $images.html( imagesList.map( src => `<img src="${ src }" alt=""/>`).join( '' ) );



  $( 'body' ).append( $images );

  imagesAccueilSlideshow( { $el: $images, timeout: 3000 } );


}

function imagesAccueilSlideshow( { $el, timeout } ) {
  var $currentImage = $el.find( 'img.on' );

  var $nextImage = $currentImage.length && $currentImage.next( 'img' );
  if ( !$nextImage.length ) {
    $nextImage = $el.find( 'img:eq(0)' );
  }

  $el.find( 'img' ).removeClass( 'on' );
  $nextImage.addClass( 'on' );

  setTimeout( () => { imagesAccueilSlideshow( { $el, timeout } ); }, timeout );
}

function map(){
  var mymap = L.map('mapid').setView([45.194260, 5.731670], 5);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoiYWJvc3N5IiwiYSI6ImNrNGgyMnZmbDA4MTQzZW13cjF6YTgwNjAifQ.LXX4zwXPn7frqBnZyzL24A'
  }).addTo(mymap);

  var locations = [
    {
      name: "Agence de Grenoble<br>16 boulevard Gambetta<br>38000 Grenoble<br>Tel: 04.76.90.47.31",
      latLng: [45.188270, 5.723050]
    },
    {
      name: "Agence de Paris<br>31 avenue de l'opera<br>75002 Paris<br>Tel: 01.40.23.47.12",
      latLng: [48.867740, 2.333630]
    },
    {
      name: "Agence de Bordeaux<br>26 cours du chapeau rouge<br>33000 Bordeaux<br>Tel: 05.35.43.40.31",
      latLng: [44.842200, -0.572260]
    }
  ];

  locations.forEach( ({ name, latLng }, i) => {

    const myIcon = L.icon(
      {
        // le premier site de la liste est le siège et possède une icone distinctive
        iconUrl: i===0 ? '../img/logo.svg':'../img/logo-alt.svg',
        iconSize: [48, 48],
        iconAnchor: [24, 24],
        popupAnchor: [0, -24]
      }
    );

    const marker = L.marker(latLng, {icon: myIcon}).addTo(mymap);

    marker.bindPopup(name);
  } );



}

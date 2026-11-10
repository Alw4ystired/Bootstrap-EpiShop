const carosello = [
    {
        titolo: "Saldi di primavera",
        sottotitolo: "Scopri le offerte sui prodotti in evidenza, fino al 50% di sconto.",
        colore: "bg-primary"
    },

    {
        titolo: "Nuova Collezione",
        sottotitolo: "Le ultime tendenze per la tua estate. Scopri i nuovi arrivi.",
        colore: "bg-success"
    },

    {
        titolo: "Spedizione Gratuita",
        sottotitolo: "Su tutti gli ordini superiori a 50€. Approfittane ora!",
        colore: "bg-dark"
    }
];

const prodotti = [
    {
        id: 1,
        nome: "Sneaker Run",
        prezzo: "89,00",
        descrizione: "Scarpe comode per il tempo libero.",
        descrizioneModale: "Grandi scarpe da corsa, comprale su, non fare il tirchio.",
        imgModale: "https://placehold.co/300x180",
        imgCard: "https://placehold.co/600x300"
    },
    {
        id: 2,
        nome: "T-shirt basic",
        prezzo: "19,00",
        descrizione: "Cotone 100%, vestibilità regolare.",
        descrizioneModale: "Una maglietta veramente terribile, te la vendono già bucata.",
        imgModale: "https://placehold.co/300x180",
        imgCard: "https://placehold.co/600x300"
    },
    {
        id: 3,
        nome: "Borsa city",
        prezzo: "49,00",
        descrizione: "Perfetta per l'ufficio o il weekend.",
        descrizioneModale: "Una normalissima borsa, però siccome ha 'city' nel nome, se la usi e vai in campagna rischi una multa.",
        imgModale: "https://placehold.co/300x180",
        imgCard: "https://placehold.co/600x300"
    },
    {
        id: 4,
        nome: "Palla da basket",
        prezzo: "300,00",
        descrizione: "Che ci devo scrivere, rimbalza.",
        descrizioneModale: "Come c'è scritto di là, rimbalza. 300 euro. Grazie.",
        imgModale: "https://placehold.co/300x180",
        imgCard: "https://placehold.co/600x300"
    }
];

const carouselContainer = document.querySelector('#carousel-container');
const productsContainer = document.querySelector('#products-container');
const modalsContainer = document.querySelector('#modals-container');

// Carosello
carosello.forEach((slide, index) => {
    let activeClass = '';
    if (index === 0) {
        activeClass = 'active';
    } else {
        activeClass = '';
    }

    carouselContainer.innerHTML += `
    <div class="carousel-item ${activeClass}">
      <div class="${slide.colore} text-white text-center py-5">
        <div class="container py-4">
          <h2 class="fs-1 fw-bold mb-3">${slide.titolo}</h2>
          <p class="fs-5 m-0">${slide.sottotitolo}</p>
        </div>
      </div>
    </div>
  `;
});

// Randomizzazione prodotti
// Il metodo sort con Math.random() - 0.5 mischia l'array ogni volta che ricarichi
prodotti.sort(() => Math.random() - 0.5);

// 5. Generazioni card e modale
prodotti.forEach((prodotto) => {

    // Generazione Card
    productsContainer.innerHTML += `
    <article class="col-12 col-sm-6 col-xl-4 col-xxl-3 mb-3">
      <div class="card h-100 shadow-sm">
        <img src="${prodotto.imgModale}" class="card-img-top" alt="${prodotto.nome}">
        <div class="card-body">
          <h5 class="card-title">${prodotto.nome}</h5>
          <p class="card-text text-muted">${prodotto.descrizione}</p>
          <p class="fw-bold fs-5 m-0">€ ${prodotto.prezzo}</p>
        </div>
        <div class="card-footer bg-white border-0">
          <!-- Il data-bs-target usa l'id dinamico per aprire la modale giusta -->
          <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal"
            data-bs-target="#prodotto-${prodotto.id}">Dettagli</button>
        </div>
      </div>
    </article>
  `;

    // Generazione Modale (collegata alla card tramite l'id)
    modalsContainer.innerHTML += `
    <div class="modal fade" id="prodotto-${prodotto.id}" tabindex="-1" aria-labelledby="prodotto-${prodotto.id}-title" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="prodotto-${prodotto.id}-title">${prodotto.nome}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Chiudi"></button>
          </div>
          <div class="modal-body">
            <img src="${prodotto.imgCard}" class="img-fluid mb-3" alt="${prodotto.nome}">
            <p>${prodotto.descrizioneModale}</p>
            <p class="fw-bold fs-4 m-0">€ ${prodotto.prezzo}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            <button type="button" class="btn btn-success">Aggiungi al carrello</button>
          </div>
        </div>
      </div>
    </div>
  `;
});
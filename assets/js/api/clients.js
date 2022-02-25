const clientesList = [
  {
    srcImage: 'assets/img/clients/client-1.png',
    alt: 'Massal Guindastes',
  },
  {
    srcImage: 'assets/img/clients/client-2.png',
    alt: 'Sonho em 4 Rodas',
  },
  {
    srcImage: 'assets/img/clients/client-3.png',
    alt: 'TGL Transportes',
  },
  {
    srcImage: 'assets/img/clients/client-4.png',
    alt: 'ByDeni Studio',
  },
  {
    srcImage: 'assets/img/clients/client-5.png',
    alt: 'Batistinha Garage',
  },
  {
    srcImage: 'assets/img/clients/client-6.png',
    alt: 'Dalto Apache',
  },
];

let idCliente = document.getElementById('client--list');
idCliente.innerHTML = CllientComponent(clientesList);

function CllientComponent(e) {
  let cards = e.map((e) => {
    return `
     <div class="swiper-slide">
         <img src=${e.srcImage} class="img-fluid" alt=${e.alt}>
      </div>
      `;
  });
  return `${cards.join('')}`;
}

AOS.init({
  easing: "ease-in-out",
  delay: 10,
  once: false,
});

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "AMERICANO",
      description: "Espresso duplo suavizado com água. 380ml",
      price: "6,99",
      image: "cafe/we-coffee-cafe-americano-800x800.png",
    },
    {
      name: "ESPRESSO",
      description: "Potente e encorpado. 60ml",
      price: "5,50",
      image: "cafe/we-coffee-coffee-espresso-duplo-800x800.jpg",
    },
    {
      name: "CAPPUCCINO",
      description: "Estilo Italiano. Espresso e leite vaporizado. Bem Cremoso. Sabor do café mais presente. 380ml",
      price: "10,00",
      image: "cafe/we-coffee-cafe-cappuccino-qeunte-800x800.png",
    },
    {
      name: "CARAMELO MACCHIATO",
      description: "Espresso, leite vaporizado e calda de caramelo. 380ml",
      price: "17,90",
      image: "cafe/we-coffee-cafe-caramelo-macciatto-quente-800x800.png",
    },
    {
      name: "LATTE",
      description: "Espresso e leite vaporizado. Sabor do café mais suave. 380ml",
      price: "19,99",
      image: "cafe/we-coffee-cafe-sss-800x800.png",
    },
    {
      name: "MOCHA",
      description: "Espresso, leite e ganache de chocolate. 380ml",
      price: "19,99",
      image: "cafe/we-coffee-cafe-www-800x800.png",
    },
    {
      name: "COPACABANA SHAKE",
      description: "Shake de sorvete com creme de pistache, finalizado com chantilly, calda de caramelo e pistaches. 500ml",
      price: "16,00",
      image: "shake/we-coffee-copacabana-shake-800x800.png",
    },
    {
      name: "CHOCO BOOM",
      description: "Shake de Ovomaltine, finalizado com chantilly, biscoito Oreo, Pocky e picolé de baunilha. 460ml",
      price: "16,00",
      image: "shake/we-coffee-cha-shake-ovomaltine-800x800.png",
    },
    {
      name: "MORANGO SHAKE",
      description: "Shake de morango com sorvete, finalizado com chantilly, fatias de morango e cranberry em pó. 460ml",
      price: "16,00",
      image: "shake/we-coffee-cha-shake-shake-mornago-800x800.png",
    },
    {
      name: "BLUEBERRY SHAKE",
      description: "Shake de blueberry com sorvete, finalizado com chantilly, blueberry e pó de blueberry. 460ml",
      price: "16,00",
      image: "shake/we-coffee-cha-shake-shake-blueberry-800x800.png",
    },
    {
      name: "OREO SHAKE",
      description: "Shake de biscoito Oreo com sorvete, finalizado com Oreo, chantilly e Salty Cream. 460ml",
      price: "16,00",
      image: "shake/we-coffee-cha-shake-oreo-800x800.png",
    },
    {
      name: "CRISPY SHAKE",
      description: "Shake Ovomaltine, finalizado com Salty Cream e ovomaltine crocante. 460ml",
      price: "26,00",
      image: "shake/we-coffee-cha-magnun-boom-800x800.png",
    },
  ];

  // Obtém o elemento com o ID "product-container" (onde os cartões de produto serão adicionados)
  const container = document.getElementById("product-container");
  // Obtém o conteúdo do template para criar novos cartões de produto
  const template = document.getElementById("product-card-template").content;

  //
  products.forEach((product) => {
    // Cria uma cópia do template para cada produto
    const clone = document.importNode(template, true);

    //define a imagem, o nome, a descricao e o preco de cada
    clone.querySelector(".card-img-top").src = product.image;
    clone.querySelector(".card-title").textContent = product.name;
    clone.querySelector(".card-text").textContent = product.description;
    clone.querySelector(".card-text b").textContent = `R$ ${product.price}`;

    // Adiciona o cartão de produto ao container
    container.appendChild(clone);
  });
});

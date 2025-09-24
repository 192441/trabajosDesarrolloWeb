const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {
      titulo: "Laptop",
      desc: "16GB RAM",
  imagen: "https://thumbs.dreamstime.com/b/mouse-de-equipo-necesario-para-controlar-el-estilo-dibujos-animados-ilustraci%C3%B3n-dise%C3%B1o-y-decoraci%C3%B3n-216633214.jpg",
      price: "$10.000.000"
    },
    {
      titulo: "Mouse",
      desc: "Inalámbrico",
  imagen: "https://static.vecteezy.com/system/resources/previews/025/444/966/non_2x/keyboard-computer-equipment-cartoon-style-illustration-vector.jpg",
      price: "$250.000"
    },
    {
      titulo: "Teclado",
      desc: "Mecánico RGB",
  imagen: "https://us.123rf.com/450wm/korobula/korobula1710/korobula171000025/88419523-funny-cartoon-computer-monitor-the-design-of-the-character-vector-illustration.jpg",
      price: "$300.000"
    },
    {
      titulo: "Monitor",
      desc: "27'' 4K UHD",
  imagen: "https://images.philips.com/is/image/philipsconsumer/3b0fe009e2ce4883b552b0220060489c?wid=700&hei=700&$pnglarge$",
      price: "$3.900.000"
    },
    {
      titulo: "Audífonos",
      desc: "Bluetooth, cancelación de ruido",
  imagen: "https://img.freepik.com/vector-gratis/auriculares-notas-musicales-dibujos-animados-vector-icono-ilustracion-musica-tecnologia-icono-concepto-aislado_138676-7663.jpg",
      price: "$80.000"
    }
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".product-image").src = p.imagen;
    clon.querySelector(".product-image").alt = p.titulo;
    clon.querySelector(".price").textContent = p.price;
    contenedor.appendChild(clon);
  });
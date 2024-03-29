$(() => {
  const products = [
    {
      name: 'Samsung TV',
      price: 1500,
      id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',
      picture: 'https://picsum.photos/300/?image=0',
      category: 'Elektronik',
    },
    {
      name: 'Camera',
      price: 755,
      id: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',
      picture: 'https://picsum.photos/300/?image=30',
      category: 'Elektronik',
    },
    {
      name: 'Shampoo',
      price: 25,
      id: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',
      picture: 'https://picsum.photos/300/?image=100',
      category: 'Hemmet',
    },
    {
      name: 'Tandborste',
      price: 20,
      id: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',
      picture: 'https://picsum.photos/300/?image=20',
      category: 'Hemmet',
    },
    {
      name: 'Kontor Stol',
      price: 800,
      id: 5,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',
      picture: 'https://picsum.photos/300/?image=10',
      category: 'Kontor',
    },
    {
      name: 'Skrivbord',
      price: 2000,
      id: 6,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',
      picture: 'https://picsum.photos/300/?image=400',
      category: 'Kontor',
    },
  ];
  //console.log(products);
  let cart = [];
  // Displaying the Store items
  const appendList = (array, location) => {
    const template = array.map((item, id) => {
      return `
      <li class ="product col-3">
      <img src ="${item.picture}" alt = "${item.description}">
      <div class = 'product-content'>
      <h4>${item.name}-<span class = "category">${item.category}</span><small>${
        item.price
      }kr.</small></h4>
      <p>${item.description}</p>
      </div>
      <button type ="button" id = "${item.id}">köp nu!</button>
      </li>
      `;
    });
    $(location).html(template);
  };
  // Add to cart item
  const addCart = (array, id, location) => {
    let a = array.find(i => i.id === id);
    cart.push(a);
    const item = `
    <li class ="item" id ="${a.id}">
    <h4>${a.name}</h4>
    <button type = "button">X</button>
    </li>
    `;
    $('span.amount').text(cart.length);
    $(location).append(item);
  };
  // Remove from cart item
  const removeFromCart = (array, removedItem) => {
    array.splice(removedItem, 1);
  };
  // Populate Cart item
  const populateCart = (array, location) => {
    let item = `
    <li class="item" id="${array.id}">
        <h4>${array.name}</h4>
        <button type="button">X</button>
    </li>
    `;
    $('span.amount').text(array.length);
  };
  appendList(products, $('.product-list'));
  // Clicking on the button and it will call addcart function
  $('.product').on('click', 'button', e => {
    let id = e.currentTarget.id;
    addCart(products, +id, $('.cart-list'));
  });
  $('.cart-list').on('click', 'button', e => {
    let item = $(e.currentTarget)
      .closest('li')
      .remove();
    removeFromCart(cart, item);
    populateCart(cart, $('.cart-list'));
  });
});

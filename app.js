function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}


function saveProduct() {
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const description = document.getElementById('productDescription').value;

  const product = { name, price, description };
  const products = getProducts();

  
  const productId = localStorage.getItem('editProductId');
  if (productId !== null) {
    products[productId] = product;
    localStorage.removeItem('editProductId'); 
  } else {
    products.push(product);
  }

  localStorage.setItem('products', JSON.stringify(products));
  displayProducts(); 
  resetForm(); 
}


function displayProducts() {
  const products = getProducts();
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; 

  products.forEach((product, index) => {
    const productItem = document.createElement('li');
    productItem.classList.add('list-group-item');
    productItem.innerHTML = `
      <strong>${product.name}</strong><br>
      Precio: $${product.price}<br>
      Descripción: ${product.description}<br>
      <a href="javascript:void(0)" class="btn btn-warning btn-sm mt-2" onclick="editProduct(${index})">Editar</a>
      <button class="btn btn-danger btn-sm mt-2" onclick="deleteProduct(${index})">Eliminar</button>
    `;
    productList.appendChild(productItem);
  });
}


function editProduct(index) {
  const products = getProducts();
  const product = products[index];
  
  document.getElementById('productName').value = product.name;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productDescription').value = product.description;

  document.getElementById('formTitle').innerText = 'Editar Producto';
  document.getElementById('submitButton').innerText = 'Actualizar Producto';

  localStorage.setItem('editProductId', index); 
}

function deleteProduct(index) {
  const products = getProducts();
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  displayProducts(); 
}


function resetForm() {
  document.getElementById('productForm').reset();
  document.getElementById('formTitle').innerText = 'Crear Producto';
  document.getElementById('submitButton').innerText = 'Añadir Producto';
}

window.onload = function() {
  displayProducts();
};


import productDetailsTemplate from './product-details.hbs';

const productDetailsContainer = document.getElementById('details');

const scope = {
  title: 'Product Details',
};

const product = {
  name: 'Product name',
  decription: 'This is a simple product description',
  stars: 5,
  price: 49,
  oldPrice: 89,
  size: '65-1',
  availability: false,
  reviews: [{
    name: 'Vitalii',
    reviewText: 'Super',
  }, {
    name: 'Ina',
    reviewText: 'Ideal, excellent seller!!! A++++',
  }],
};

if (productDetailsContainer) {
  productDetailsContainer.innerHTML = productDetailsTemplate({ scope, product });
}

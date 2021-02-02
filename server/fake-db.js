const Product = require('./model/products');

class FakeDb {
  constructor() {
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: '先頭の１',
        heading2: '先頭の２',
        heading3: '先頭の３',
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'ミニ先頭の１',
        heading2: 'ミニ先頭の２',
        heading3: 'ミニ先頭の３',
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: '標準先頭の１',
        heading2: '標準先頭の２',
        heading3: '標準先頭の３',
      }
    ]
  }

  async initDb() {
    await this.cleanDb();
    this.seeDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsTodb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsTodb();
  }
}

module.exports = FakeDb
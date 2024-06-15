import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products = [
    {
      id: 1,
      name: 'skirt',
      price: 1500,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.F_g21WrGP5U__Xq_JzzF5gHaHa&pid=Api&P=0&h=180',
      description:
        'Elegant Fuddruckers dress, cotton fabric, available in all sizes.',
    },
    {
      id: 2,
      name: 'Grinder',
      price: 3000,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.YfJ7qHPPtwO00vAe-KoijAHaHa&pid=Api&P=0&h=180',
      description:
        'Preethi Grinder, 3 jars, multi-purpose, 500W motor, stainless steel.',
    },
    {
      id: 3,
      name: 'Mixer',
      price: 2000,
      imageUrl: 'https://rukminim1.flixcart.com/image/1408/1408/mixer-grinder-juicer/t/h/g/preethi-platinum-mg-139-platinum-mg-139-original-imaefxzmufx97yt7.jpeg?q=90',
      description: 'Bajaj Mixer, 3-speed control, 2 jars, 500W, durable build.',
    },
    {
      id: 4,
      name: 'Sunscreen',
      price: 500,
      imageUrl: 'https://i5.walmartimages.com/asr/f116d5c4-5d83-4ef7-8d11-aaf4c4537f2f.4bf73431b7c48b98d0d81b3c642f747a.jpeg',
      description:
        'Neutrogena Sunscreen,SPF 50+, 100ml, water-resistant, non-greasy.',
    },
    {
      id: 5,
      name: 'Hair Bands',
      price: 100,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Ffuy5iKg1dJ8T1NF42ug1QHaHa&pid=Api&P=0&h=180',
      description: 'Colorful hair bands, pack of 10, elastic, durable.',
    },
    {
      id: 6,
      name: 'Mobile Case',
      price: 200,
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.y_7PggrNyZhihr1kH2yYHAHaHa&pid=Api&P=0&h=180',
      description:
        'Spigen mobile case, designed for iPhone 12, shock-absorbent, sleek design.',
    },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  buyNow(product: any) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({ ...product, status: 'Pending' });
    localStorage.setItem('orders', JSON.stringify(orders));
    this.addToCart(product);
  }
}
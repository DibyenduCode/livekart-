import type { Order } from '../types';
import { mockProducts } from './products';

export const initialOrders: Order[] = [
  {
    id: 'ORD-98412',
    date: '11 Oct 2026, 04:30 PM',
    status: 'Shipped',
    items: [
      {
        product: mockProducts[0],
        selectedSize: 'M',
        selectedColor: 'Emerald Green',
        quantity: 1
      }
    ],
    subtotal: 2499,
    discount: 200,
    deliveryFee: 0,
    total: 2299,
    shippingAddress: {
      fullName: 'Aarav Sharma',
      phone: '+91 98765 43210',
      addressLine: 'Flat 402, Lotus Grandeur, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038'
    },
    paymentMethod: 'UPI',
    estimatedDelivery: 'Tomorrow by 8:00 PM'
  },
  {
    id: 'ORD-97831',
    date: '08 Oct 2026, 08:15 PM',
    status: 'Delivered',
    items: [
      {
        product: mockProducts[3],
        selectedSize: 'L',
        selectedColor: 'Ecru Sand',
        quantity: 1
      },
      {
        product: mockProducts[6],
        selectedColor: 'Glazed Cherry',
        quantity: 2
      }
    ],
    subtotal: 2897,
    discount: 350,
    deliveryFee: 0,
    total: 2547,
    shippingAddress: {
      fullName: 'Aarav Sharma',
      phone: '+91 98765 43210',
      addressLine: 'Flat 402, Lotus Grandeur, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038'
    },
    paymentMethod: 'UPI',
    estimatedDelivery: 'Delivered on 10 Oct'
  }
];

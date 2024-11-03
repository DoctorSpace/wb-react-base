// Определим тип для статусов заказов
type OrderStatus = "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

// Интерфейс для товаров
interface IProduct {
  id: number;
  name: string;
  price: number;
}

// Класс Product для товаров
class Product implements IProduct {
  constructor(public id: number, public name: string, public price: number) {}
}

// Интерфейс для корзины
interface ICart {
  addProduct(product: Product, quantity: number): void;
  removeProduct(productId: number): void;
  viewCart(): void;
  getTotalPrice(): number;
}

// Класс Cart для управления корзиной
class Cart implements ICart {
  private items: Map<Product, number> = new Map();

  // Добавление товара в корзину
  addProduct(product: Product, quantity: number) {
    const existingQuantity = this.items.get(product) || 0;
    this.items.set(product, existingQuantity + quantity);
    console.log(`${quantity} x ${product.name} добавлено в корзину.`);
  }

  // Удаление товара из корзины
  removeProduct(productId: number) {
    const product = [...this.items.keys()].find((p) => p.id === productId);
    if (product) {
      this.items.delete(product);
      console.log(`${product.name} удален из корзины.`);
    } else {
      console.log(`Товар с ID ${productId} не найден в корзине.`);
    }
  }

  // Просмотр текущей корзины
  viewCart() {
    if (this.items.size === 0) {
      console.log("Корзина пуста.");
    } else {
      console.log("Содержимое корзины:");
      this.items.forEach((quantity, product) => {
        console.log(`${product.name} (ID: ${product.id}) - ${quantity} шт.`);
      });
    }
  }

  // Получение общей стоимости корзины
  getTotalPrice(): number {
    let total = 0;
    this.items.forEach((quantity, product) => {
      total += product.price * quantity;
    });
    return total;
  }
}

// Интерфейс для заказов
interface IOrder {
  id: number;
  status: OrderStatus;
  cart: Cart;
  totalPrice: number;
}

// Класс Order для заказа
class Order implements IOrder {
  public status: OrderStatus = "PENDING";
  constructor(public id: number, public cart: Cart) {
    this.totalPrice = cart.getTotalPrice();
  }

  public totalPrice: number;
}

// Класс OrderManager для управления заказами
class OrderManager {
  private orders: Order[] = [];
  private orderIdCounter = 1;

  // Добавление нового заказа
  addOrder(cart: Cart): Order {
    const newOrder = new Order(this.orderIdCounter++, cart);
    this.orders.push(newOrder);
    console.log(
      `Новый заказ (ID: ${newOrder.id}) создан. Статус: ${newOrder.status}`
    );
    return newOrder;
  }

  // Смена статуса заказа
  changeOrderStatus(orderId: number, newStatus: OrderStatus) {
    const order = this.orders.find((order) => order.id === orderId);
    if (order) {
      order.status = newStatus;
      console.log(`Статус заказа (ID: ${order.id}) изменен на: ${newStatus}`);
    } else {
      console.log(`Заказ с ID: ${orderId} не найден.`);
    }
  }

  // Просмотр информации о заказах
  viewOrders() {
    if (this.orders.length === 0) {
      console.log("Нет заказов.");
    } else {
      this.orders.forEach((order) => {
        console.log(
          `Заказ ID: ${order.id}, Статус: ${order.status}, Общая стоимость: ${order.totalPrice}`
        );
      });
    }
  }
}

// Класс ProductManager для управления товарами
class ProductManager {
  private products: Product[] = [];

  // Добавление товара
  addProduct(product: Product) {
    this.products.push(product);
    console.log(`Товар ${product.name} (ID: ${product.id}) добавлен.`);
  }

  // Удаление товара
  removeProduct(productId: number) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1);
      console.log(
        `Товар ${removedProduct[0].name} (ID: ${removedProduct[0].id}) удален.`
      );
    } else {
      console.log(`Товар с ID: ${productId} не найден.`);
    }
  }

  // Просмотр всех товаров
  viewProducts() {
    if (this.products.length === 0) {
      console.log("Нет доступных товаров.");
    } else {
      this.products.forEach((product) => {
        console.log(
          `Товар ID: ${product.id}, Название: ${product.name}, Цена: ${product.price}`
        );
      });
    }
  }
}

// Пример использования системы управления интернет-магазином
console.log("\n");

const productManager = new ProductManager();
const cart = new Cart();
const orderManager = new OrderManager();

// Добавляем товары в магазин
productManager.addProduct(new Product(1, "Телефон", 10000));
productManager.addProduct(new Product(2, "Ноутбук", 50000));
productManager.addProduct(new Product(3, "Часы", 5000));

// Просмотр товаров
productManager.viewProducts();
console.log("\n");

console.log("Добавляем товары в корзину");
cart.addProduct(new Product(1, "Телефон", 10000), 2);
cart.addProduct(new Product(2, "Ноутбук", 50000), 1);
cart.viewCart();
console.log("Общая стоимость корзины:", cart.getTotalPrice(), "\n");

// Создаем новый заказ
const newOrder = orderManager.addOrder(cart);

// Изменяем статус заказа
orderManager.changeOrderStatus(newOrder.id, "SHIPPED");

// Просмотр всех заказов
orderManager.viewOrders();
console.log("\n");

// Удаляем товар из корзины
cart.removeProduct(1);
cart.viewCart();
console.log("Общая стоимость корзины:", cart.getTotalPrice(), "\n");

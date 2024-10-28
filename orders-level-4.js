function generateUniqueId() {
    return `_${Math.random().toString(36).slice(2, 9)}`;
  }
  
  class Order {
      constructor(customerName, items, status = 'Menunggu') {
          this.id = generateUniqueId();
          this.customerName = customerName;
          this.items = items;
          this.totalPrice = items.reduce((total, item) => total + item.price, 0);
          this.status = status;
      }
  }
  
  class OrderManager {
      constructor() {
          this.orders = [];
      }
  
      addOrder(order) {
          this.orders.push(order);
      }
  
      removeOrder(id) {
          this.orders = this.orders.filter(order => order.id !== id);
      }
  
      updateOrderStatus(id, status) {
          const order = this.orders.find(order => order.id === id);
          if (order) {
              order.status = status;
          }
      }
  
      listOrders() {
          return this.orders;
      }
  
      calculateTotalRevenue() {
          return this.orders.reduce((total, order) => total + order.totalPrice, 0);
      }
  }
  
  export { Order, OrderManager };
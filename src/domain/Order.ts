import Coupon from "./Coupon";
import Product from "./Product";

export default class Order {
  products: Product[]
  coupon: Coupon
  totalValue: number

  constructor (products: Product[], coupon: Coupon, totalValue: number = 0) {
    this.products = products
    this.coupon = coupon
    this.totalValue = totalValue
  }

  calculateTotalValue() {
    this.totalValue = this.products.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  calculateDiscountValue() {
    this.totalValue * (this.coupon.percentage/100)
  }

  applyDiscount() {
    return this.totalValue * (1 - (this.coupon.percentage/100))
  }
}
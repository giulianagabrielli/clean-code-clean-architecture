export default class Coupon {
  name: string
  percentage: number

  constructor (name: string, percentage: number) {
    this.name = name
    this.percentage = percentage
  }
}
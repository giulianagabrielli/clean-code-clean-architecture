import Order from "../domain/Order";
import User from "../domain/User";

export function createOrder (order: Order, user: User) {
    const newUser = new User(user.cpf)
    const newOrder = new Order(order.products)
    if (!newUser.validateCpf()) throw new Error('Usuário inválido')
    newOrder.calculateTotalValue()
    if (order.discount > 0) {
        newOrder.applyDiscount()
    }
    return newOrder
}
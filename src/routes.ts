import { Request, Response, Router } from 'express'
import { validate } from './validator'
import pgp from 'pg-promise'
const route = Router()

route.post('/create-order', async (req: Request, res: Response) => {
  const { products, coupon, user: { cpf }} = req.body
  const output: Output = {
		total: 0
	}
  const isValid = validate(cpf)
  if (!isValid) output.message = "Invalid cpf"
	const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
	if (products) {
		for (const product of products) {
			const [productData] = await connection.query("select * from cccat10.product where id_product = $1", product.id);
			output.total += parseFloat(productData.price) * product.quantity;
		}
	}
	if (coupon) {
		const [couponData] = await connection.query("select * from cccat10.coupon where code = $1", [coupon])
		const percentage = parseFloat(couponData.percentage);
		output.total -= (output.total * percentage)/100;
	}
	await connection.$pool.end();
	res.json(output);
})

type Output = {
	total: number,
	message?: string
}

export { route }


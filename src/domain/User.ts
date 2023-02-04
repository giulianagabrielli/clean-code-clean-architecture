export default class User {
  cpf: string

  constructor (cpf: string) {
    this.cpf = cpf
  }

  validateCpf() {
    const cpfOnlyNumbers = this.cpf.replace(/[^\d]+/g,'').split('')
    const onlyEqualNumbers = cpfOnlyNumbers.every(item => item === cpfOnlyNumbers[0])
    if (!this.cpf || cpfOnlyNumbers.length !== 11 || onlyEqualNumbers) return false
    let multiplicador = 2
    for (let index = 8; index > 0; index--) {
      //const total = cpfOnlyNumbers[index] * multiplicador;
      multiplicador++
      
    }
    return true
  }
}
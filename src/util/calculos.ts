import {
  saoValoresValidos,
  calcularPotenciaTotal,
  calcularTensaoTotal,
  calcularCorrenteTotal,
  formatarPotencia,
} from './utilidades';

export const calcularEExibirResultado = (
  valor1: number,
  valor2: number,
  calcularFn: (val1: number, val2: number) => number,
  mensagemFn: (resultado: number) => string,
  zeroCheck: string
): string => {
  if (saoValoresValidos(valor1, valor2)) {
    if (valor2 !== 0) {
      const resultado = calcularFn(valor1, valor2);
      return mensagemFn(resultado);
    } else {
      return `Operação inválida: divisão por zero. Nesse cálculo a ${zeroCheck} tem que ser diferente de zero.`;
    }
  } else {
    return 'Valores inválidos';
  }
}
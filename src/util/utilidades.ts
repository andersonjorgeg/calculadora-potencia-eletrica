export const saoValoresValidos = (tensao: number, corrente: number): boolean => {
  return !isNaN(tensao) && !isNaN(corrente);
};

export const calcularPotenciaTotal = (tensao: number, corrente: number): number => {
  return tensao * corrente;
};

export const formatarPotencia = (potencia: number): string => {
  return potencia.toLocaleString('pt-BR');
};

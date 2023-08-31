export const saoValoresValidos = (tensao: number, corrente: number): boolean => {
  return !isNaN(tensao) && !isNaN(corrente);
};

export const calcularPotenciaTotal = (tensao: number, corrente: number): number => {
  return tensao * corrente;
};

export const calcularTensaoTotal = (potencia: number, corrente: number): number => {
  return potencia / corrente;
};

export const calcularCorrenteTotal = (potencia: number, tensao: number): number => {
  return potencia / tensao;
};

export const formatarPotencia = (potencia: number): string => {
  return potencia.toLocaleString('pt-BR');
};

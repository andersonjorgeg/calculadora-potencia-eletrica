'use client';

import React, { useState, ChangeEvent } from 'react';

function Calculadora(): JSX.Element {
  const [tensao, setTensao] = useState<string>('');
  const [corrente, setCorrente] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  /**
 * Calcula a potência elétrica com base nos valores de tensão e corrente fornecidos.
 *
 * @returns {void} A função não retorna um valor.
 */
  const calcularPotencia = (): void => {
    const tensaoNumero = parseFloat(tensao);
    const correnteNumero = parseFloat(corrente);

    if (saoValoresValidos(tensaoNumero, correnteNumero)) {
      const potencia = calcularPotenciaTotal(tensaoNumero, correnteNumero);
      const potenciaFormatada = formatarPotencia(potencia);
      exibirResultado(`A potência é: ${potenciaFormatada} Wats`);
      limparCampos();
    } else if (camposVazios()) {
      exibirResultado('Digite os valores');
    } else {
      exibirResultado('Valores inválidos');
    }
  };

  /**
   * Verifica se os valores de tensão e corrente são válidos (números).
   *
   * @param {number} tensao - O valor de tensão a ser verificado.
   * @param {number} corrente - O valor de corrente a ser verificado.
   * @returns {boolean} Retorna true se ambos os valores forem números válidos, caso contrário, retorna false.
   */
  const saoValoresValidos = (tensao: number, corrente: number): boolean => {
    return !isNaN(tensao) && !isNaN(corrente);
  };

  /**
   * Calcula a potência elétrica total com base nos valores de tensão e corrente fornecidos.
   *
   * @param {number} tensao - O valor de tensão.
   * @param {number} corrente - O valor de corrente.
   * @returns {number} Retorna a potência elétrica total calculada.
   */
  const calcularPotenciaTotal = (tensao: number, corrente: number): number => {
    return tensao * corrente;
  };

  /**
   * Formata a potência elétrica para exibição no formato de string com separação de milhares.
   *
   * @param {number} potencia - O valor da potência elétrica a ser formatado.
   * @returns {string} Retorna a potência formatada com a unidade de medida.
   */
  const formatarPotencia = (potencia: number): string => {
    return potencia.toLocaleString('pt-BR');
  };

  /**
   * Exibe a mensagem de resultado no componente de resultado.
   *
   * @param {string} mensagem - A mensagem de resultado a ser exibida.
   * @returns {void} A função não retorna um valor.
   */
  const exibirResultado = (mensagem: string): void => {
    setResultado(mensagem);
  };

  /**
   * Limpa os campos de entrada (tensão e corrente) após o cálculo.
   *
   * @returns {void} A função não retorna um valor.
   */
  const limparCampos = (): void => {
    setTensao('');
    setCorrente('');
  };

  /**
   * Verifica se os campos de entrada estão vazios.
   *
   * @returns {boolean} Retorna true se ambos os campos estiverem vazios, caso contrário, retorna false.
   */
  const camposVazios = (): boolean => {
    return corrente === '' && tensao === '';
  };


  return (
    <div className="bg-cor2 p-4 gap-4 grid rounded-lg mx-2">
      <h1 className="text-2xl text-cor1 font-bold text-center">Calculadora de Potência Elétrica</h1>
      <div className="grid grid-cols-12">
        <label className="md:col-span-4 col-span-12 text-cor1 mb-2">Tensão (V):</label>
        <input
          className="rounded-md p-1 md:col-span-8 col-span-12"
          type="number"
          step="0.01"
          value={tensao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTensao(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-12">
        <label className="md:col-span-4 col-span-12 text-cor1 mb-2">Corrente (A):</label>
        <input
          className="rounded-md p-1 md:col-span-8 col-span-12"
          type="number"
          step="0.01"
          value={corrente}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCorrente(e.target.value)}
        />
      </div>
      <button
        className="bg-cor1 rounded-md py-2 transition duration-500 hover:bg-cor6 hover:text-slate-50 text-white"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => calcularPotencia()}
      >
        Calcular Potência
      </button>
      <p id="resultado" className='text-center'>{resultado}</p>
    </div>
  );
}

export default Calculadora;

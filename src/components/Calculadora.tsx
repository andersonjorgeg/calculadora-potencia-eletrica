'use client';

import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import {
  saoValoresValidos,
  calcularPotenciaTotal,
  calcularTensaoTotal,
  calcularCorrenteTotal,
  formatarPotencia,
} from '../util/utilidades';

function Calculadora(): JSX.Element {
  const [tensao, setTensao] = useState<string>('');
  const [corrente, setCorrente] = useState<string>('');
  const [potencia, setPotencia] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const [calculoSelecionado, setCalculoSelecionado] = useState<string>('potencia')

  const calcularPotencia = (): void => {
    const tensaoNumero = parseFloat(tensao);
    const correnteNumero = parseFloat(corrente);

    if (saoValoresValidos(tensaoNumero, correnteNumero)) {
      const potencia = calcularPotenciaTotal(tensaoNumero, correnteNumero);
      const potenciaFormatada = formatarPotencia(potencia);
      exibirResultado(`A potência é ${potenciaFormatada} Wats`);
      limparCampos();
    } else if (camposVazios()) {
      exibirResultado('Digite os valores');
    } else {
      exibirResultado('Valores inválidos');
    }
  };

  const calcularTensao = (): void => {
    const potenciaNumero = parseFloat(potencia);
    const correnteNumero = parseFloat(corrente);

    if (saoValoresValidos(potenciaNumero, correnteNumero)) {
      if (correnteNumero !== 0) {
        const tensao = calcularTensaoTotal(potenciaNumero, correnteNumero);
        exibirResultado(`A tensão é ${tensao.toFixed(0)} Volts`);
        limparCampos();
      } else {
        exibirResultado('Operação inválida: divisão por zero. Nesse calculo a corrente tem que ser diferente de zero.');
      }
    } else if (camposVazios()) {
      exibirResultado('Digite os valores');
    } else {
      exibirResultado('Valores inválidos');
    }
  };

  const calcularCorrente = (): void => {
    const potenciaNumero = parseFloat(potencia);
    const tensaoNumero = parseFloat(corrente);

    if (saoValoresValidos(potenciaNumero, tensaoNumero)) {
      if (tensaoNumero !== 0) {
        const corrente = calcularCorrenteTotal(potenciaNumero, tensaoNumero);
        exibirResultado(`A corrente é ${corrente.toFixed(3)} Amperes`);
        limparCampos();
      } else {
        exibirResultado('Operação inválida: divisão por zero. Nesse calculo a tensão tem que ser diferente de zero.');
      }
    } else if (camposVazios()) {
      exibirResultado('Digite os valores');
    } else {
      exibirResultado('Valores inválidos');
    }
  };

  const exibirResultado = (mensagem: string): void => {
    setResultado(mensagem);
  };

  const limparCampos = (): void => {
    setTensao('');
    setCorrente('');
    setPotencia('');
  };

  const camposVazios = (): boolean => {
    return corrente === '' && tensao === '';
  };

  const limparResultado = (): void => {
    setResultado('');
    setTensao('');
    setCorrente('');
    setPotencia('');
  }


  return (
    <div className="bg-cor2 p-4 gap-4 grid rounded-lg mx-2">
      <h1 className="text-2xl text-cor1 font-bold text-center">
        Calculadora Elétrica
      </h1>
      <div className="grid grid-cols-12 gap-2">
        <label className='col-span-4'>
          <input
            className='cursor-pointer'
            type="radio"
            value="potencia"
            checked={calculoSelecionado === 'potencia'}
            onChange={() => setCalculoSelecionado('potencia')}
          />
          P = V * I
        </label>
        <label className='col-span-4'>
          <input
            className='cursor-pointer'
            type="radio"
            value="tensao"
            checked={calculoSelecionado === 'tensao'}
            onChange={() => setCalculoSelecionado('tensao')}
          />
          V = P / I
        </label>
        <label className='col-span-4'>
          <input
            className='cursor-pointer'
            type="radio"
            value="corrente"
            checked={calculoSelecionado === 'corrente'}
            onChange={() => setCalculoSelecionado('corrente')}
          />
          I = P / V
        </label>
      </div>
      {(calculoSelecionado === 'potencia') && (
        <div className="space-y-2">
          <InputField
            label="Tensão (V)"
            value={tensao}
            onChange={setTensao}
            type="number"
            step="0.1"
          />
          <InputField
            label="Corrente (A)"
            value={corrente}
            onChange={setCorrente}
            type="number"
            step="0.1"
          />
        </div>
      )}

      {(calculoSelecionado === 'tensao') && (
        <div className="space-y-2">
          <InputField
            label="Potência (P)"
            value={potencia}
            onChange={setPotencia}
            type="number"
            step="0.1"
          />
          <InputField
            label="Corrente (A)"
            value={corrente}
            onChange={setCorrente}
            type="number"
            step="0.1"
          />
        </div>
      )}

      {(calculoSelecionado === 'corrente') && (
        <div className="space-y-2">
          <InputField
            label="Potência (P)"
            value={potencia}
            onChange={setPotencia}
            type="number"
            step="0.1"
          />
          <InputField
            label="Tensão (V)"
            value={tensao}
            onChange={setTensao}
            type="number"
            step="0.1"
          />
        </div>
      )}

      <div className="grid grid-cols-12 gap-2">
        {(calculoSelecionado === 'potencia') && (
          <Button
            colSpan='col-span-6'
            bgColor='bg-cor1'
            hoverBgColor='hover:bg-cor6'
            text='Calcular'
            onClick={calcularPotencia}
          />
        )}
        {(calculoSelecionado === 'tensao') && (
          <Button
            colSpan='col-span-6'
            bgColor='bg-cor1'
            hoverBgColor='hover:bg-cor6'
            text='Calcular'
            onClick={calcularTensao}
          />
        )}
        {(calculoSelecionado === 'corrente') && (
          <Button
            colSpan='col-span-6'
            bgColor='bg-cor1'
            hoverBgColor='hover:bg-cor6'
            text='Calcular'
            onClick={calcularCorrente}
          />
        )}

        <Button
          colSpan='col-span-6'
          bgColor='bg-cor1'
          hoverBgColor='hover:bg-red-500'
          text='Limpar Resultado'
          onClick={limparResultado}
        />
      </div>
      <div className="grid max-w-xs">
        <p className='text-center'>{resultado}</p>
      </div>
    </div>
  );
}

export default Calculadora;

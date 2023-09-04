'use client';

import React, { useState } from 'react';
import Button from './Button';
import RadioButton from './RadioButton';
import GroupInput from './groupInput';
import {
  saoValoresValidos,
  calcularPotenciaTotal,
  calcularTensaoTotal,
  calcularCorrenteTotal,
  formatarPotencia,
} from '../util/utilidades';
import { calcularEExibirResultado } from '@/util/calculos';

function Calculadora(): JSX.Element {
  const [tensao, setTensao] = useState<string>('');
  const [corrente, setCorrente] = useState<string>('');
  const [potencia, setPotencia] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const [calculoSelecionado, setCalculoSelecionado] = useState<string>('potencia');

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

  const calcularPotencia = (): void => {
    const tensaoNumero = parseFloat(tensao);
    const correnteNumero = parseFloat(corrente);

    const mensagem = calcularEExibirResultado(
      tensaoNumero,
      correnteNumero,
      calcularPotenciaTotal,
      (potencia) => `A potência é ${formatarPotencia(potencia)} Wats`,
      'corrente'
    );

    exibirResultado(mensagem);
    limparCampos();
  };

  const calcularTensao = (): void => {
    const potenciaNumero = parseFloat(potencia);
    const correnteNumero = parseFloat(corrente);

    const mensagem = calcularEExibirResultado(
      potenciaNumero,
      correnteNumero,
      calcularTensaoTotal,
      (tensao) => `A tensão é ${tensao.toFixed(0)} Volts`,
      'corrente'
    );

    exibirResultado(mensagem);
    limparCampos();
  };

  const calcularCorrente = (): void => {
    const potenciaNumero = parseFloat(potencia);
    const tensaoNumero = parseFloat(tensao);

    const mensagem = calcularEExibirResultado(
      potenciaNumero,
      tensaoNumero,
      calcularCorrenteTotal,
      (corrente) => `A corrente é ${corrente.toFixed(3).replace('.', ',')} Amperes`,
      'tensão'
    );
    exibirResultado(mensagem);
    limparCampos();
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
        <RadioButton
          label='P = V * I'
          value='potencia'
          checked={calculoSelecionado === 'potencia'}
          onChange={() => setCalculoSelecionado('potencia')}
        />
        <RadioButton
          label='V = P / I'
          value='tensao'
          checked={calculoSelecionado === 'tensao'}
          onChange={() => setCalculoSelecionado('tensao')}
        />
        <RadioButton
          label='I = P / V'
          value='corrente'
          checked={calculoSelecionado === 'corrente'}
          onChange={() => setCalculoSelecionado('corrente')}
        />
      </div>
      {(calculoSelecionado === 'potencia') && (
        <GroupInput
          label1="Tensão (V)"
          value1={tensao}
          onChange1={setTensao}
          label2="Corrente (A)"
          value2={corrente}
          onChange2={setCorrente}
        />
      )}

      {(calculoSelecionado === 'tensao') && (
        <GroupInput
          label1="Potência (P)"
          value1={potencia}
          onChange1={setPotencia}
          label2="Corrente (A)"
          value2={corrente}
          onChange2={setCorrente}
        />
      )}

      {(calculoSelecionado === 'corrente') && (
        <GroupInput
          label1="Potência (P)"
          value1={potencia}
          onChange1={setPotencia}
          label2="Tensão (V)"
          value2={tensao}
          onChange2={setTensao}
        />
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

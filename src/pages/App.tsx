import React, { useState } from 'react';
import { Cronometro } from '../components/cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Itarefa from '../types/tarefa';
import style from './style.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

function selecionaTarefa(tarefaSelecionada: Itarefa){
  setSelecionado(tarefaSelecionada);
  setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
    ...tarefa,
    selecionado: tarefa.id === tarefaSelecionada.id ? true : false || tarefa.id === tarefaSelecionada.id  ? false : true 

  })))
}

  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas} />
     <Lista 
     tarefas={tarefas} 
     selecionaTarefa={selecionaTarefa}
     />
     <Cronometro />
    </div>
  );
}

export default App;

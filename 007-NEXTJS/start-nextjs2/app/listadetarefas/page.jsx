"use client"

import { useState } from 'react';
import styles from '@/app/listadetarefas/lista.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = `✅ ${newTasks[index]}`;
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Adicione uma tarefa"
        className={styles.taskInput}
      />
      <button onClick={addTask}>Adicionar</button>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskItem}>
            {task}
            <div className={styles.taskButtons}>
              <button onClick={() => completeTask(index)}>Concluir</button>
              <button onClick={() => removeTask(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

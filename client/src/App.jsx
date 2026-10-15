import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import { getTasks } from './services/api.js';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  function addTask(newTask) {
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">A little more intentional</p>
        <h1>Task Tracker<span>.</span></h1>
        <p className="intro">Keep the next thing clear. Add a task, and it will be here when you return.</p>
      </header>

      <section className="workspace" aria-label="Task tracker">
        <div className="section-heading">
          <h2>New task</h2>
          <span className="section-index">01</span>
        </div>
        <TaskForm onTaskAdded={addTask} />

        <div className="list-heading">
          <h2>Your tasks</h2>
          {!loading && !error && <span className="task-count">{tasks.length}</span>}
        </div>
        <TaskList tasks={tasks} loading={loading} error={error} />
      </section>
      <footer className="page-footer">Small steps count.</footer>
    </main>
  );
}
export default function TaskList({ tasks, loading, error }) {
  if (loading) {
    return <p className="list-message">Loading tasks…</p>;
  }

  if (error) {
    return <p className="list-message list-error" role="alert">{error}</p>;
  }

  if (tasks.length === 0) {
    return <p className="list-message">No tasks yet. Add your first one.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-item" key={task._id}>
          <span className="task-mark" aria-hidden="true" />
          <div className="task-copy">
            <strong>{task.title}</strong>
            {task.description && <p>{task.description}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
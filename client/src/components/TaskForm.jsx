import { useState } from 'react';
import { createTask } from '../services/api.js';

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSaving(true);

    try {
      const newTask = await createTask({ title, description });
      onTaskAdded(newTask);
      setTitle('');
      setDescription('');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Task</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What needs doing?"
          maxLength={100}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="description">Details <span>Optional</span></label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add a little context"
          maxLength={500}
          rows={3}
        />
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="submit-button" type="submit" disabled={saving}>
        <span aria-hidden="true">{saving ? '…' : '+'}</span>
        {saving ? 'Saving' : 'Add task'}
      </button>
    </form>
  );
}
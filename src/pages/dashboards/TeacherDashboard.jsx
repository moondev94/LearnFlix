import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, removeEvent, updateEvent } from "../../store/calendarSlice";
import { Navigate } from "react-router-dom";
import Calendar from "../../components/Calendar";
import "../../App.css";

export default function TeacherDashboard() {

  const user = useSelector((state) => state.auth.user);
  const events = useSelector((state) => state.calendar.events);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("prova");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [editingEventId, setEditingEventId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEventId) {
      const updatedEvent = {
        id: editingEventId,
        title,
        date,
        type,
        course,
        description,
      };

      dispatch(updateEvent(updatedEvent));
    } else {
      const newEvent = {
        id: Date.now(),
        title,
        date,
        type,
        course,
        description,
      };

      dispatch(addEvent(newEvent));
    }

    setTitle("");
    setDate("");
    setType("prova");
    setCourse("");
    setDescription("");
    setEditingEventId(null);
  };

  const handleEdit = (event) => {
    setTitle(event.title);
    setDate(event.date);
    setType(event.type);
    setCourse(event.course);
    setDescription(event.description);
    setEditingEventId(event.id);
  };

  const handleDelete = (id) => {
    dispatch(removeEvent(id));

    if (editingEventId === id) {
      setTitle("");
      setDate("");
      setType("prova");
      setCourse("");
      setDescription("");
      setEditingEventId(null);
    }
  };

  if (!user || user.role !== "teacher") {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Bem-vindo, {user.name}</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Turmas</h3>
        </div>

        <div className="dashboard-card">
          <h3>Disciplinas</h3>
        </div>

        <div className="dashboard-card">
          <h3>Materiais</h3>
        </div>

        <div className="dashboard-card">
          <h3>{editingEventId ? "Editar avaliação" : "Cadastrar avaliação"}</h3>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título da avaliação"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="prova">Prova</option>
              <option value="teste">Teste</option>
              <option value="trabalho">Trabalho</option>
            </select>

            <input
              type="text"
              placeholder="Disciplina"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />

            <textarea
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />

            <button type="submit" className="hero-btn btn-reset">
              {editingEventId ? "Atualizar avaliação" : "Salvar avaliação"}
            </button>
          </form>

        </div>
        <div className="dashboard-card">
          <h3>Avaliações cadastradas</h3>

          {events.length === 0 ? (
            <p>Nenhuma avaliação cadastrada ainda.</p>
          ) : (
            <div className="event-list">
              {events.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-info">
                    <strong>{event.title}</strong>
                    <p>{event.course}</p>
                    <p>{event.date} • {event.type}</p>
                    {event.description && <p>{event.description}</p>}
                  </div>

                  <div className="event-actions">
                    <button
                      className="hero-btn-outline btn-reset"
                      onClick={() => handleEdit(event)}
                    >
                      Editar
                    </button>

                    <button
                      className="delete-btn btn-reset"
                      onClick={() => handleDelete(event.id)}
                    >
                      Apagar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="dashboard-card">
          <Calendar />
        </div>

      </div>

    </section>
  );
}
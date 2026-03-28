import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../App.css";
import Calendar from "../../components/Calendar";
import { fetchHolidays } from "../../store/calendarSlice";

export default function StudentDashboard() {

  const user = useSelector((state) => state.auth.user);
  const courses = useSelector((state) => state.progress.courses);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="dashboard page-transition">

      <h2>Bem-vindo, {user.name}</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Calendário</h3>
          <Calendar />
        </div>

        <div className="dashboard-card">
          <h3>Minhas Disciplinas</h3>

          <div className="progress-list">
            {courses.map((course) => {
              const completedLessons = course.lessons.filter(
                (lesson) => lesson.completed
              ).length;

              const progress = Math.round(
                (completedLessons / course.lessons.length) * 100
              );


              return (
                <div key={course.id}
                  className="course-item"
                  onClick={() => navigate(`/classes/${course.id}`)}>
                  <div className="progress-header">
                    <strong>{course.name}</strong>
                    <span>{progress}%</span>
                  </div>

                  <p>
                    {completedLessons} de {course.lessons.length} aulas concluídas
                  </p>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
import "../App.css";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCheck, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Classes() {
  const { id } = useParams();
  const courses = useSelector((state) => state.progress.courses);

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <Navigate to="/dashboard/aluno" replace />;
  }

  return (
    <div className="page-transition classes-page">
      <section className="classes-wrapper">
        <h2 className="classes-title">{course.name}</h2>

        <div className="classes-grid">
          {course.lessons.map((lesson) => (
            <Card
              key={lesson.id}
              content={lesson.title}
              button1={<FontAwesomeIcon icon={faPlay} />}
              button2={<FontAwesomeIcon icon={faCheck} />}
              button3={<FontAwesomeIcon icon={faBookmark} />}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
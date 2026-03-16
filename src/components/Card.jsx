import "../App.css";

export default function Card({content, button1, button2, button3}) {
  return (
    <div className="card">
        <div className="content">
            {content}
        </div>
      <div className="card-footer">
        <div className="card-btn">
            <button className="svg-icons btn-reset">{button1}</button>
        </div>
        <div className="card-btn">
            <button className="svg-icons btn-reset">{button2}</button>
        </div>
        <div className="card-btn">
            <button className="svg-icons btn-reset">{button3}</button>
        </div>
      </div>
    </div>
  );
}



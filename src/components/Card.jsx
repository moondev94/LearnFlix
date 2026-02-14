import "../App.css";

function Card({content, button1, button2, button3}) {
  return (
    <div className="card">
        <div className="content">
            {content}
        </div>
      <div className="card-footer">
        <div className="card-btn">
            <button className="svg-icons">{button1}</button>
        </div>
        <div className="card-btn">
            <button className="svg-icons">{button2}</button>
        </div>
        <div className="card-btn">
            <button className="svg-icons">{button3}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

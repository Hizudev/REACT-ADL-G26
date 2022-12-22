const Card = (props) => {
  return (
    <div className="card text-center">
      <img src={`${props.link}`} alt="" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title">{props.titulo}</h4>
          <p className="card-text">{props.descripcion}</p>
        </div>
        <a
          href={`https://picsum.photos/${props.width}`}
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
        >
          Imagen random de {props.width}x{props.width}
        </a>
      </div>
    </div>
  );
};

export default Card;

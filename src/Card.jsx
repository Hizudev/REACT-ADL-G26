const Card = ({link, titulo, descripcion, width}) => {
  return (
    <div className="card text-center">
      <img src={`${link}`} alt="" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{descripcion}</p>
        </div>
        <a
          href={`https://picsum.photos/${width}`}
          target="_blank"
          rel="noopener"
          className="btn btn-primary"
        >
          Imagen random de {width}x{width}
        </a>
      </div>
    </div>
  );
};

export default Card;

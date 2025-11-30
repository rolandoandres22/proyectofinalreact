function ResultCard({ registro }) {//define el componente ResultCard
  return (
    //contenedor principal "card" subtitulo "Resultado" 
    //la cantidad y moneda original y el resultado en moneda de destino
    //luego muestra la fecha
    <div className="card">
      <h2>Resultado</h2>
      <p><strong>{registro.cantidad}</strong> {registro.origen} =</p>
      <h3>{registro.resultado} {registro.destino}</h3>
      <p><small>{registro.fecha}</small></p>
    </div>
  );
}

export default ResultCard;

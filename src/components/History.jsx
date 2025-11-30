function History({ historial }) {
  return (
    <div className="card">
      <h2>Historial de conversiones</h2>

      {historial.length === 0 && <p>No hay consultas aún.</p>}

      {historial.map((item, index) => (
        <div key={index} className="history-item">
          <strong>{item.cantidad} {item.origen}</strong>
          {" → "}
          {item.resultado} {item.destino}
          <br />
          <small>{item.fecha}</small>
        </div>
      ))}
    </div>
  );
}

export default History;

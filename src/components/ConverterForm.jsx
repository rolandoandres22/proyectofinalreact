function ConverterForm({ data, onChange, onConvert }) {//componente 'ConverterForm' recibe 3 props
  return (
    //define el elemento form y el evento onSubmit, luego los select con las option y el input
    <form onSubmit={(e) => { e.preventDefault(); onConvert(); }}>
      <label>Moneda origen</label>
      <select name="origen" value={data.origen} onChange={onChange}>
        <option>USD</option>
        <option>EUR</option>
        <option>BRL</option>
        <option>ARS</option>
        <option>JPY</option>
      </select>

      <label>Moneda destino</label>
      <select name="destino" value={data.destino} onChange={onChange}>
        <option>USD</option>
        <option>EUR</option>
        <option>BRL</option>
        <option>ARS</option>
        <option>JPY</option>
      </select>

      <label>Cantidad</label>
      <input type="number" name="cantidad" value={data.cantidad} onChange={onChange} />

      <button type="submit">Convertir</button>
    </form>
  );
}

export default ConverterForm;

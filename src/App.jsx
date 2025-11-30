import { useState, useEffect, useRef } from "react"; //importa Hooks esenciales
import "./App.css"; // importa el  CSS
import Header from "./components/Header"; //importa los componente
import ConverterForm from "./components/ConverterForm";
import ResultCard from "./components/ResultCard";
import History from "./components/History";
import { fetchRates } from "./utils/api"; // importa la función que tiene las tasas (no quise usar api externa)
import { validate } from "./utils/validators"; //importa la función para validar los datos

function App() { //define el componente principal
  const [vista, setVista] = useState("cotizador"); //crea un estado para controlar qué vista se muestra "cotizador" o "historial"

  const [data, setData] = useState({ //crea un estado para almacenar los datos del formulario.
    origen: "USD", //valores iniciales del select
    destino: "ARS", 
    cantidad: "", 
  });

  const [resultado, setResultado] = useState(null); //estado para almacenar el último resultado de la conversión
  const [historial, setHistorial] = useState([]); //estado para almacenar la lista de todas las conversiones
  const [rates, setRates] = useState({}); //estado para almacenar las tasas de cambio obtenidas de la api.jsx

  // referencia para hacer scroll al resultado
  const resultadoRef = useRef(null);

  useEffect(() => { //hook que se ejecuta una vez al montar el componente
    const saved = localStorage.getItem("historial"); //intenta obtener el historial guardado en el almacenamiento local del navegador
    if (saved) setHistorial(JSON.parse(saved)); //si existe historial guardado, lo parsea y actualiza el estado `historial`
  }, []); 

  useEffect(() => { //hook quese ejecuta cuando `historial` cambia
    localStorage.setItem("historial", JSON.stringify(historial)); //guarda el estado `historial` actualizado en el almacenamiento local
  }, [historial]); //se ejecuta cada vez que el estado `historial` cambia

  useEffect(() => { //hook para obtener las tasas de cambio iniciales
    setRates(fetchRates()); //llama a la función `fetchRates` para obtener las tasas y actualiza el estado `rates`
  }, []); //se ejecuta solo al montar el componente

  const handleChange = (e) => { //función de cambios en los inputs del formulario
    setData({ ...data, [e.target.name]: e.target.value }); //actualiza el estado
  };

  const convertir = () => { //función principal que realiza la lógica de conversión
    const errors = validate(data); //llama a la función de validación

    if (Object.keys(errors).length > 0) { //si el objeto `errors` tiene errores de validación
      alert("Ingrese una cantidad válida."); //muestra una alerta
      return; 
    }

    const { origen, destino, cantidad } = data; //desestructura

    // La tasa se calcula dividiendo la tasa base de origen entre la tasa base de destino
    const tasa = rates[origen] / rates[destino]; 
    const res = (cantidad * tasa).toFixed(2); //redondea

    const registro = { //crea un objeto para registrar esta conversión en el historial
      fecha: new Date().toLocaleString(), //fecha y hora actual del registro
      origen, //Moneda de origen
      destino, //Moneda de destino
      cantidad, //Cantidad original
      resultado: res //Resultado
    };

    setResultado(registro); //actualiza el estado `resultado` para mostrar el registro actual en la tarjeta de resultado.
    setHistorial(prev => [registro, ...prev]); //agrega el nuevo registro al inicio del estado `historial`.

    //hacer scroll al resultado después de actualizarlo sino quedaba tapado y habia que scrolear a mano
    setTimeout(() => { //espera para que el DOM se actualice antes de intentar el scroll.
      if (resultadoRef.current) { 
        resultadoRef.current.scrollIntoView({ behavior: "smooth" }); //hace scroll suave al elemento del resultado.
      }
    }, 100); //espera 100ms antes de ejecutar el scroll.
  };

  return ( //comienzo del bloque JSX que define la interfaz del componente.
    //contenedor principal de la aplicación.
    <div className="container"> 
    
      <Header /> 

      {/* menu */}
      <div className="menu-icons">
        <button 
          className={`menu-btn ${vista === "cotizador" ? "active" : ""}`} 
          onClick={() => setVista("cotizador")} //al hacer click, cambia el estado `vista` a "cotizador".
        >
          VER EL CONVERSOR
        </button>

        <button 
          className={`menu-btn ${vista === "historial" ? "active" : ""}`} 
          onClick={() => setVista("historial")} //al hacer click, cambia el estado `vista` a "historial".
        >
          VER EL HISTORIAL
        </button>
      </div>

      {/* vistas */}
      {vista === "cotizador" && (
        <> 
          <ConverterForm //renderiza el formulario de conversion
            data={data} //pasa los datos del formulario como prop.
            onChange={handleChange} 
            onConvert={convertir}
          />

          {/* agrego el ref al contenedor del resultado */}
          <div ref={resultadoRef}> 
            {resultado && <ResultCard registro={resultado} />} 
          </div>
        </>
      )}

      {vista === "historial" && ( 
        <History historial={historial} /> //renderiza el componente de historial, pasándole la lista de registros.
      )}

    </div> 
  );
}

export default App; 
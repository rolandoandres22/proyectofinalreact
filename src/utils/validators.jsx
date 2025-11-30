export function validate(data) { //define y exporta la función 'validate'
  const errors = {};//inicializa un objeto 'errors'

  // Verifica si el campo 'cantidad' está vacío o si es menor o igual a cero (0).
  if (!data.cantidad || data.cantidad <= 0) {
    errors.cantidad = "Cantidad inválida"; //lanza el error
  }

  return errors;
}

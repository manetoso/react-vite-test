/* 
	Recibiras un arreglo con las dimensiones para figuras
	para rectangulos recibiras un largo y ancho y para el circulo recibiras radios 

	El ejercicio consiste en calcular el diametro de cada una de las figuras y ordenar el arreglo inicial de menor a mayor dependiendo del diametro de cada una de las figuras 

	El arreglo de entrada de ejemplo es [[2,3], 2.8, 3.1, [3,3.5], 3.4] 

	El resultadoa a generar es [2.8,3.1,[2,3],3.4,[3,3.5]] 

	En el arreglo de entrada identificas las figuras ya que cuando es un rectangulo recibes un arreglo con el largo y el ancho y cuando son circulos recibes solo el decimal 
*/
  const calcDiameter = figure => {
    let diameter
      if ( typeof figure === 'object' ) {
        const [side, width] = figure
        diameter = (side * 2) + (width * 2)
      } else {
        diameter = Math.PI * figure
      }
    return diameter
  }
  
  const orderFigures = figArr => {
    return figArr.sort((a,b) => {
      const diameterA = calcDiameter(a)
      const diameterB = calcDiameter(b)
			
      return diameterA < diameterB ? -1 : diameterA > diameterB ? 1 : 0
    })
  }
  
  const data = [[2,3], 2.8, 3.1, [3,3.5], 3.4]

  console.log(orderFigures(data));

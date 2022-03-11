const detalle = [
  {
    Empresa: "¡KATAPLUM!",
    Id: 1,
    Imagen: "'img/kataplum.png'",
    Highlight: "-$40",
    Texto: "descuento en Kaporte",
    Vigencia: "12/31/2022",
    MensajeLargo: "Kataporte de $190 a $150 pesos",
    ComoAplicarlo: "Menciona la promoción y paga con tu tarjeta en taquilla",
    Restricciones:
      "- No aplica con otras promociones, sujeto a cambio sin previo aviso.\n" +
      "- La vigencia del Kataporte será válido únicamente para la fecha que seleccionas al adquirirlo.\n" +
      "- La promoción es válida todos los días del año.\n" +
      "- No hay límite en la compra de Kataportes\n" +
      "- El Kataporte es un brazalete electrónico, personal e intransferible con el que podrás tener acceso a 30 diferentes juegos y atracciones excepto Kids, Vértigo, Gran Premio, Pabellón Norma y Juegos de destreza.\n" +
      "- No aplica en ventas on line.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/transporte-y-entretenimiento/kataplum.html",
  },
  {
    Empresa: "¡Recórcholis!",
    Id: 2,
    Imagen: "'img/recorcholis.png'",
    Highlight: "$150",
    Texto: "adicionales con recarga",
    Vigencia: "12/31/2022",
    MensajeLargo:
      "Recibe $300 pesos al hacer una recarga de $150 pesos en tu Recorcard",
    ComoAplicarlo: "Menciona la promoción y paga con tu tarjeta en taquilla",
    Restricciones:
      "- No aplica con otras promociones, sujeto a cambio sin previo aviso.\n- La bonificación se hace en saldo en bonus cargado en la Recorcard.\n- La bonificación no puede ser canjeable por dinero en efectivo.\n- La promoción es válida todos los días durante la vigencia de la promoción.\n- No aplica descuento en la compra de Recorcard\n- No aplica en ventas online.\n- La promoción aplica únicamente en Ciudad de México, Guanajuato, Jalisco, Querétaro, Estado de México, Chiapas, Yucatán, Coahuila, Morelos, Sonora, Nayarit, Aguascalientes, Tamaulipas y Tabasco.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Acuario Interactivo",
    Id: 3,
    Imagen: "'img/acuario.png'",
    Highlight: "-15%",
    Texto: "en pase marino",
    Vigencia: "6/30/2022",
    MensajeLargo: "15% de descuento sobre el total de compra en Pase Marino",
    ComoAplicarlo: "Menciona la promoción y paga con tu tarjeta en taquilla",
    Restricciones:
      "- El cliente deberá llamar al teléfono de atención a clientes al 55 5395 4586 indicar el número de personas, fecha y hora de visita, mencionar la promoción con Banco Azteca y realizar una reservación.\n- Posteriormente dirigirse a la taquilla general del Acuario Inbursa o Acuario Interactivo el día y hora de la reservación para hacer el pago con el descuento y obtener lo boletos de entrada.\n- El cliente deberá pagar con alguna de las Tarjetas de Banco Azteca participantes para recibir el beneficio\n- El cliente recibirá el 15% de descuento sobre el total de su compra en pase marino.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Acuario Interactivo",
    Id: 4,
    Imagen: "'img/acuario.png'",
    Highlight: "-15%",
    Texto: "en fotografía",
    Vigencia: "6/30/2022",
    MensajeLargo: "15% de descuento en fotografía de bienvenida",
    ComoAplicarlo:
      "Menciona la promoción y paga con tu tarjeta en el módulo de fotos",
    Restricciones:
      "- El cliente deberá haberse tomado una fotografía en el set de bienvenida al inicio de su recorrido en el Acuario Inbursa o Acuario Interactivo.\n- El cliente deberá dirigirse al módulo de fotografías que se encuentra al final del recorrido para visualizar su fotografía y ahí mencionar la promoción.\n- El cliente deberá pagar con alguna de las Tarjetas de Banco Azteca participantes para recibir el beneficio.\n- El cliente recibirá el 15% de descuento sobre el costo total de su fotografía.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "aspik",
    Id: 5,
    Imagen: "'img/aspik.png'",
    Highlight: "-15%",
    Texto: "de descuento en línea",
    Vigencia: "6/30/2022",
    MensajeLargo: "15% de descuento en mercancía de línea",
    ComoAplicarlo: "Ingresa el código BANCOAZTECA-15% al finalizar la compra",
    Restricciones:
      "- Aplica solo en compras con un monto mínimo de $899.00 (Ochocientos noventa y nueve pesos, 00/100 M.N.).\n- La promoción es aplicable únicamente durante el periodo de vigencia.\n- No acumulable con otras promociones o descuentos.\n- No aplica en mercancía de rebaja.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/ropa-y-calzado/aspik.html",
  },
  {
    Empresa: "Cabify",
    Id: 6,
    Imagen: "'img/cabify.png'",
    Highlight: "-50%",
    Texto: "descuento en viajes",
    Vigencia: "4/30/2022",
    MensajeLargo: "50% de descuento en los primeros 4 viajes o envíos",
    ComoAplicarlo: "Utiliza el código BANCOAZTECA21 en tu app de Cabify",
    Restricciones:
      "- Promoción válida solo para primeros usuarios durante los primeros 30 días de ingreso como nuevo usuario durante la vigencia de la promoción.\n- No válido con otras promociones o descuentos.\n- Descuento máximo $50.00 MXN (cincuenta pesos, 00/100 M.N.).",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/cabify.html",
  },
  {
    Empresa: "Chopo",
    Id: 7,
    Imagen: "'img/chopo.png'",
    Highlight: "-20%",
    Texto: "En laboratorio",
    Vigencia: "10/31/2022",
    MensajeLargo: "20% de descuento en estudios de Laboratorio",
    ComoAplicarlo:
      "Solicita la promoción en caja con el código 106478 y paga con tu tarjeta baz",
    Restricciones:
      "- Aplican restricciones, el cliente deberá consultarlas las restricciones previamente en cada laboratorio.\n- Los diferentes descuentos aplican en estudios de Laboratorio, de Gabinete y en Estudios Especiales, la definición de los estudios que se incluyen en cada una de estas categorías se encontrarán señalados en cada sucursal Chopo.\n- El beneficio no podrá ser canjeable por dinero en efectivo.\n- Aplica solo en sucursal, no aplica en línea.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/laboratorio-medico-chopo.html",
  },
  {
    Empresa: "Chopo",
    Id: 8,
    Imagen: "'img/chopo.png'",
    Highlight: "-15%",
    Texto: "en estudios de gabinete",
    Vigencia: "10/31/2022",
    MensajeLargo: "15% de descuento en estudios de Gabinete",
    ComoAplicarlo:
      "Solicita la promoción en caja con el código 106478 y paga con tu tarjeta baz",
    Restricciones:
      "- Aplican restricciones, el cliente deberá consultarlas las restricciones previamente en cada laboratorio.\n- Los diferentes descuentos aplican en estudios de Laboratorio, de Gabinete y en Estudios Especiales, la definición de los estudios que se incluyen en cada una de estas categorías se encontrarán señalados en cada sucursal Chopo.\n- El beneficio no podrá ser canjeable por dinero en efectivo.\n- Aplica solo en sucursal, no aplica en línea.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/laboratorio-medico-chopo.html",
  },
  {
    Empresa: "Chopo",
    Id: 9,
    Imagen: "'img/chopo.png'",
    Highlight: "-5%",
    Texto: "en estudio especiales",
    Vigencia: "10/31/2022",
    MensajeLargo: "5% de descuento en estudios Especiales",
    ComoAplicarlo:
      "Solicita la promoción en caja con el código 106478 y paga con tu tarjeta baz",
    Restricciones:
      "- Aplican restricciones, el cliente deberá consultarlas las restricciones previamente en cada laboratorio.\n- Los diferentes descuentos aplican en estudios de Laboratorio, de Gabinete y en Estudios Especiales, la definición de los estudios que se incluyen en cada una de estas categorías se encontrarán señalados en cada sucursal Chopo.\n- El beneficio no podrá ser canjeable por dinero en efectivo.\n- Aplica solo en sucursal, no aplica en línea.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/laboratorio-medico-chopo.html",
  },
  {
    Empresa: "Chopo",
    Id: 10,
    Imagen: "'img/chopo.png'",
    Highlight: "-3%",
    Texto: "adicional a promos",
    Vigencia: "10/31/2022",
    MensajeLargo: "3% adicional en promociones en sucursales",
    ComoAplicarlo:
      "Solicita la promoción en caja con el código 106478 y paga con tu tarjeta baz",
    Restricciones:
      "- Aplican restricciones, el cliente deberá consultarlas las restricciones previamente en cada laboratorio.\n- Los diferentes descuentos aplican en estudios de Laboratorio, de Gabinete y en Estudios Especiales, la definición de los estudios que se incluyen en cada una de estas categorías se encontrarán señalados en cada sucursal Chopo.\n- El beneficio no podrá ser canjeable por dinero en efectivo.\n- Aplica solo en sucursal, no aplica en línea.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/laboratorio-medico-chopo.html",
  },
  {
    Empresa: "ClickBus",
    Id: 11,
    Imagen: "'img/clickbus.png'",
    Highlight: "-10%",
    Texto: "de descuento en rutas",
    Vigencia: "7/15/2022",
    MensajeLargo: "10% de descuento en todas las rutas",
    ComoAplicarlo:
      "Menciona el código VIVEPLUS10 en Centro de atención a Clientes ClickBus y paga con tu tarjeta baz",
    Restricciones:
      "- Llamar al centro de atención a clientes de Clickbus al teléfono 55 5350 8737.\n- No aplica con otras promociones o descuentos.\n- Aplican restricciones. Para conocer las restricciones y rutas aplicables el cliente deberá llamar al 55 5350 8737.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/transporte-y-entretenimiento/clickbus.html",
  },
  {
    Empresa: "COSTCO",
    Id: 12,
    Imagen: "'img/costco.png'",
    Highlight: "$250",
    Texto: "en monedero electrónico",
    Vigencia: "4/30/2022",
    MensajeLargo:
      "$ 250 pesos en monedero al adquirir Membresía y renovar domiciliación",
    ComoAplicarlo:
      "Adquiere y domicilia renovación de membresía; clave de afiliación 4000712",
    Restricciones:
      "- $100 pesos al adquirir membresía + $150 pesos al domiciliar renovación. En total recibes $250 pesos.\n- Dírigete al módulo de membresías y solicita tu membresía Dorada o de Negocio así como tu domiciliación y menciona la promoción o la Clave de Afiliacion 4000712.\n- Sólo aplica en tienda física.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/tiendas-y-supermercados/cotsco.html",
  },
  {
    Empresa: "Cuponatic",
    Id: 13,
    Imagen: "'img/cuponatic.png'",
    Highlight: "10%",
    Texto: "de cashback",
    Vigencia: "5/31/2022",
    MensajeLargo: "bonificación del 10% del total de tu compra",
    ComoAplicarlo:
      "Ingresa el código CASHBACKAZTECA al finalizar la compra con tu cuenta baz",
    Restricciones:
      "- No aplica con otras promociones o descuentos.\n- El beneficio no podrá ser cambiado por dinero en efectivo.\n- Aplica para clientes nuevos y registrados en el sitio web.\n- La bonificación máxima es de $120 pesos.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "DEVLYN",
    Id: 14,
    Imagen: "'img/devlyn.png'",
    Highlight: "-15%",
    Texto: "descuento en armazones y más",
    Vigencia: "12/31/2022",
    MensajeLargo:
      "15% de descuento en armazones oftálmicos y lentes con el convenio 350",
    ComoAplicarlo: "Menciona el convenio 350 en caja y paga con tu tarjeta baz",
    Restricciones:
      "- Aplica en adquisición de armazones oftálmicos, lentes de cristal o plástico, lentes de contacto graduados, lentes solares, limpieza y ajuste de lentes\n- No aplica en lentes de contacto graduados de color.\n- No válido en concesiones, tiendas dentro de FAMSA, SAMS, SEARS, COPPEL, CHAPUR, HEB, CIMACO, Y CHEDRAUI.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/somos-devlyn.html",
  },
  {
    Empresa: "DEVLYN",
    Id: 15,
    Imagen: "'img/devlyn.png'",
    Highlight: "-5%",
    Texto: "adicional en compras en línea",
    Vigencia: "12/31/2022",
    MensajeLargo:
      "5% adicional a promociones vigentes de temporada en compras en línea con el código Vive350",
    ComoAplicarlo:
      "Ingresa el código Vive350 al finalizar la compra con tu cuenta baz",
    Restricciones:
      "- El descuento del 5% de descuento sobre promociones vigentes, deberá consultarse o comunicarse directamente en tienda para conocer las restricciones.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/somos-devlyn.html",
  },
  {
    Empresa: "Doto",
    Id: 16,
    Imagen: "'img/doto.png'",
    Highlight: "-$100",
    Texto: "de descuento",
    Vigencia: "6/30/2022",
    MensajeLargo: "$100 de descuento en compra mínima de $2,000",
    ComoAplicarlo: "Ingresa el código AZTECA y compra con tu cuenta baz",
    Restricciones:
      "- $100 pesos de descuento en carrito de compra.\n- Monto mínimo de compra $2,000 pesos.\n- El descuento se verá reflejado en el paso 3 (datos de envío y pago) al ingresar la tarjeta participante en la promoción.\n- Válido únicamente al pagar directamente en el sitio web.\n- No aplica pago a través de PayPal, MercadoPago ni ningún otro procesador de pagos externo.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/tiendas-y-supermercados/doto.html",
  },
  {
    Empresa: "Elektra",
    Id: 17,
    Imagen: "'img/elektra.png'",
    Highlight: "-5%",
    Texto: "descuento adicional",
    Vigencia: "5/31/2022",
    MensajeLargo: "5% de descuento + ofertas vigentes + envío a domicilio",
    ComoAplicarlo: "Paga con tu tarjeta baz en elektra.com.mx",
    Restricciones:
      "- No acumulable con otras promociones.\n- La promoción es válida en mercancías generales.\n- La promoción no aplica en el modelo 3022635 Consola PS5.\n- Promoción válida en artículos vendidos y enviados por www.elektra.com.mx\n- La promoción no aplica en caso de haber cancelaciones y devoluciones.\n- No aplica en Viajes.\n- Monto mínimo de compra $2,500 MXN (Dos mil quinientos pesos 00/100 M.N.) en mercancías generales.\n- La promoción aplica en todo el sitio.\n- Aplica en artículos vendidos y enviados por Elektra.com.mx",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/tiendas-y-supermercados/elektra.html",
  },
  {
    Empresa: "flexi",
    Id: 18,
    Imagen: "'img/flexi.png'",
    Highlight: "-10%",
    Texto: "descuento en calzado",
    Vigencia: "4/30/2022",
    MensajeLargo:
      "10% de descuento en el total de la compra en zapatos para toda la familia",
    ComoAplicarlo:
      "Menciona el código RUDOS2021 al pagar en caja con tu tarjeta baz",
    Restricciones:
      "- Aplica en zapatos para toda la familia (hombres, mujeres y niños).\n- No aplica para compras en línea.\n- No aplica en productos en oferta ni con otras promociones.\n- Aplica en Ciudad de México",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Harmon Hall",
    Id: 19,
    Imagen: "'img/harmonhall.png'",
    Highlight: "-$500",
    Texto: "en colegiaturas (hasta*)",
    Vigencia: "6/30/2022",
    MensajeLargo: "Hasta $500 pesos de descuento en colegiaturas",
    ComoAplicarlo:
      "Comunícate al Instituto, menciona la promoción y paga con tu tarjeta baz en la fecha indicada",
    Restricciones:
      "- Para hacer válida la promoción, es importante que el cliente realice su pago en la semana correspondiente que le indiquen en el Instituto.\n- En caso de no ejercer el pago en los plazos indicados, el descuento no será aplicable.\n- No aplica para el costo de los materiales didácticos, certificaciones, cursos o programas especiales o cualquier otro servicio distinto a los cursos.\n- Para hacer válidos los descuentos, el alumno deberá cubrir el importe del mismo a través del pago en ventanillas de la institución que indique Harmon Hall con la referencia que le será entregada en el instituto Harmon Hall.\n- No aplica con otras promociones o descuentos.\n- El importe del descuento dependerá del curso al que se inscriba, por lo que es necesario que el cliente cotice y mencione la promoción directamente en Harmon Hall.\n- El descuento aplica para clientes nuevos o existentes de Harmon Hall.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/harmonhall.html",
  },
  {
    Empresa: "JULIO",
    Id: 20,
    Imagen: "'img/julio.png'",
    Highlight: "-10%",
    Texto: "descuento en temporada",
    Vigencia: "12/31/2022",
    MensajeLargo: "10% de descuento en mercancía de temporada",
    ComoAplicarlo:
      "Menciona el código CNV 1535 al pagar en caja con tu tarjeta baz",
    Restricciones:
      "- Aplica en mercancía de temporada, misma que se encrontrará señalada en la sucursal JULIO.\n- No es válido en Palacio de Hierro, Liverpool, Outles, ni franquicias.\n- No es acumulable con otras promociones\n- No aplica para compras en línea.\n- Aplica en las sucursales JULIO dentro de la cobertura geográfica de la promoción (Aguascalientes, Campeche, Chiapas, Ciudad de México, Durango, Guanajuato, Guerrero, Hidalgo, Jalisco, Michoacán, Morelos, Nuevo León, Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí, Sinaloa, Tabasco, Tamaulipas, Veracruz, Yucatán y Zacatecas).",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "KFC",
    Id: 21,
    Imagen: "'img/kfc.png'",
    Highlight: "-$66",
    Texto: "en combo Crujipollo",
    Vigencia: "7/18/2022",
    MensajeLargo:
      "10 piezas de Crujipollo + 1 puré + 2 bisquets de $ 299 a $233",
    ComoAplicarlo:
      "Descarga y muestra el cupón [https://www.bancoazteca.com.mx/content/\ndam/azteca/promociones-y-descuentos/\nservicios-y-otros/kfc-10-piezas/cupon-kfc-10-piezas.png] de la promoción, y paga con tu tarjeta baz",
    Restricciones:
      "- La promoción aplica en compras directas en restaurantes KFC® y en servicio a domicilio llamando al 55 1515 4747 dentro del interior de la república.\n- Consulta por teléfono el monto mínimo de compra para evitar gastos de envío a domicilio o consulta el costo por servicio a domicilio al realizar tu pedido en caso de que el monto de tu compra sea menor al monto mínimo de compra.\n- No aplica con otras promociones o descuentos.\n- Cupón no acumulable ni canjeable por dinero en efectivo.\n- La promoción no aplica en los Estados y Municipios de Puebla, Tlaxcala, Córdoba, Orizaba y Veracruz.\n- La promoción únicamente aplicará para el paquete referido en la Mecánica.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/kfc-diez-piezas.html",
  },
  {
    Empresa: "KFC",
    Id: 22,
    Imagen: "'img/kfc.png'",
    Highlight: "-$67",
    Texto: "en combo 14 piezas",
    Vigencia: "7/18/2022",
    MensajeLargo:
      "14 piezas de Crujipollo + 1 puré familiar + 1 ensalada familiar + 2 bisquets de $395 a $328 pesos",
    ComoAplicarlo:
      "Descarga y muestra el cupón [https://www.bancoazteca.com.mx/content/\ndam/azteca/romociones-y-descuentos/\nservicios-y-otros/kfc-14-piezas/cupon-kfc-14-piezas.png] de la promoción, y paga con tu tarjeta baz",
    Restricciones:
      "- La promoción es aplicable únicamente durante el periodo de vigencia de la promoción.\n- La promoción aplica en compras directas en restaurantes KFC® y en servicio a domicilio llamando al 55 1515 4747 dentro del interior de la república.\n- Consulta por teléfono el monto mínimo de compra para evitar gastos de envío a domicilio o consulta el costo por servicio a domicilio al realizar tu pedido en caso de que el monto de tu compra sea menor al monto mínimo de compra.\n- No aplica con otras promociones o descuentos.\n- Cupón no acumulable ni canjeable por dinero en efectivo.\n- Sujeto a disponibilidad de productos e ingredientes en tienda.\n- La promoción no aplica en los Estados y Municipios de Puebla, Tlaxcala, Córdoba, Orizaba y Veracruz.\n- La promoción únicamente aplicará para el paquete referido en la Mecánica.",
    TyCs: "\nhttps://www.bancoazteca.com.mx/content/dam/\nazteca/docs/promociones-y-descuentos/kfc-14-piezas/kfc-14-piezas-terminos-y-condiciones.pdf",
  },
  {
    Empresa: "KFC",
    Id: 23,
    Imagen: "'img/kfc.png'",
    Highlight: "-$36",
    Texto: "en combo Ke-tiras",
    Vigencia: "7/18/2022",
    MensajeLargo: "3 Ke Tiras + 1 refresco + 1 puré individual de $119 a $83",
    ComoAplicarlo:
      "Descarga y muestra el cupón [https://www.bancoazteca.com.mx/content/\ndam/azteca/promociones-y-descuentos/\nservicios-y-otros/kfc-3-piezas/cupon-kfc-3-ketiras.jpeg] de la promoción, y paga con tu tarjeta baz",
    Restricciones:
      "- La promoción es aplicable únicamente durante el periodo de vigencia de la promoción.\n- La promoción aplica en compras directas en restaurantes KFC® dentro del interior de la republica excepto los estado de  Puebla y Tlaxcala.\n- No aplica con otras promociones o descuentos.\n- Cupón no acumulable ni canjeable por dinero en efectivo.\n- Sujeto a disponibilidad de productos e ingredientes en tienda.\n- La promoción no aplica en Puebla y Tlaxcala.\n- La promoción únicamente aplicará para el paquete referido en la Mecánica.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/kfc-tres-piezas.html",
  },
  {
    Empresa: "Krispy Kreme",
    Id: 24,
    Imagen: "'img/krispy.png'",
    Highlight: "-10%",
    Texto: "descuento en el total",
    Vigencia: "6/30/2022",
    MensajeLargo: "10% de descuento en el total de la cuenta",
    ComoAplicarlo: "Menciona la promoción y paga con tu tarjeta en caja",
    Restricciones:
      "- No aplica con otras promociones o descuentos.\n- No aplica en la compra de artículos coleccionables ni bebidas embotelladas.\n- El beneficio no podrá ser cambiado por dinero en efectivo.\n- No aplica en cancelaciones o devoluciones.\n- La promoción es aplicable únicamente durante el periodo de vigencia de la promoción.\n- La promoción aplica en compras directas en todas las sucursales Krispy Kreme dentro de la Cobertura geográfica excepto en productos y/o sucursales que se encuentren en Liverpool, Fábricas de Francia, Tiendas Oxxo y Chedraui.",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos/servicios-y-otros/krispy-kreme.html",
  },
  {
    Empresa: "La Generosa",
    Id: 25,
    Imagen: "'img/lagenerosa.png'",
    Highlight: "-25%",
    Texto: "descuento en lunes",
    Vigencia: "5/31/2022",
    MensajeLargo:
      "25% de descuento los lunes medicamentos genéricos, suplementos y vitaminas",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "La Generosa",
    Id: 26,
    Imagen: "img/lagenerosa.png",
    Highlight: "-10%",
    Texto: "descuento (mar - dom)",
    Vigencia: "5/31/2022",
    MensajeLargo:
      "10% de descuento en medicamentos genéricos, suplementos y vitaminas (martes a domingo).",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Nailkery",
    Id: 27,
    Imagen: "'img/nailkery.png'",
    Highlight: "-15%",
    Texto: "sobre precio de lista",
    Vigencia: "3/31/2022",
    MensajeLargo: "15% sobre precio de lista en servicio de uñas",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Óptica Americana",
    Id: 28,
    Imagen: "'img/americana.png'",
    Highlight: "-15%",
    Texto: "en compra de anteojos",
    Vigencia: "6/30/2022",
    MensajeLargo: "15% de descuento en la compra de anteojos completo",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Rinna Bruni",
    Id: 29,
    Imagen: "'img/rb.png'",
    Highlight: "-10%",
    Texto: "descuento en tienda",
    Vigencia: "6/30/2022",
    MensajeLargo: "10% de descuento en tienda física y en línea",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "undostres",
    Id: 30,
    Imagen: "'img/undostres.png'",
    Highlight: "$75",
    Texto: "bonificación en saldo",
    Vigencia: "12/31/2022",
    MensajeLargo:
      "Recibe $50 pesos de bonificación en la primer recarga y $25 pesos en la segunda recarga de tiempo aire o datos.   Aplica para clientes nuevos al pagar con Tarjetas de Banco Azteca.   Ingresa al sitio web y usa el código 123BA75.",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Viajes Libertad",
    Id: 31,
    Imagen: "'img/viajes.png'",
    Highlight: "-10%",
    Texto: "descuento sobre total",
    Vigencia: "10/31/2022",
    MensajeLargo: "10% de descuento en cuenta total.   (Paquetes y Hoteles)",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "VIPS",
    Id: 32,
    Imagen: "'img/vips.png'",
    Highlight: "-25%",
    Texto: "descuento con código",
    Vigencia: "12/31/2022",
    MensajeLargo:
      "Aprovecha el 25% de descuento exclusivo en Vips que tienes al pagar con tus Tarjetas de Banco Azteca en consumos mayores a $149.   Menciona el cupón Q07R0NPCC3 al ordenar y preséntalo en caja.",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "volaris",
    Id: 33,
    Imagen: "'img/volaris.png'",
    Highlight: "-55%",
    Texto: "de descuento (*hasta)",
    Vigencia: "3/23/2022",
    MensajeLargo:
      "Hasta 55 % de descuento en vuelos nacionales e internacionales para volar en agosto 2022.",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
  {
    Empresa: "Benedetti's",
    Id: 34,
    Imagen: "'img/benedettis.png'",
    Highlight: "-25%",
    Texto: "en pizza grande",
    Vigencia: "En negociación",
    MensajeLargo: "25% de descuento en pizza grande de 2 ingredientes en App .",
    ComoAplicarlo: "",
    Restricciones: "",
    TyCs: "https://www.bancoazteca.com.mx/promociones-y-descuentos.html",
  },
];

const verDetalle = (element) => {
  let container = document.querySelector(".container");
  container.innerHTML += `
        <div class="container-img">
            <img src=${element.Imagen} alt="">
            <h1>${element.Highlight}</h1>
        </div>
        
        <div class="container-subtitle">
            <p>${element.MensajeLargo}</p>
        </div>

        <div class="container-aviso">
            <p>${element.ComoAplicarlo}</p>
        </div>

        <div class="containerSucursales">
            <p>${element.Restricciones}</p>
        </div>

        <hr>

        <div class="container-terminos">
          <p>Consulta términos y condiciones en: </p>
          <a href="${element.TyCs}" target="_blank"> 
            ${element.TyCs}
          </a>
        </div>

        <div class="container-vence">
            <a href="/index.html">
              <img src="./img/arrow-back.svg" alt="flecha">
            </a>
            <div class="container-vigencia">
                <p>Hasta el ${element.Vigencia}</p>
            </div>
        </div>
    `;
};

let nombre = Number(location.search.substring(4));
let variable = detalle[nombre - 1];

verDetalle(variable);

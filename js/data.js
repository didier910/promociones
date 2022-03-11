
const promociones = [
    {
        id: 1,
        empresa: '¡KATAPLUM!',
        urlImg: 'img/kataplum.png',
        highLight: '-$40',
        desc: 'descuento en Kaporte',
        vigencia: '12/31/2022'
    },
    {
        id: 2,
        empresa: '¡Recórcholis!',
        urlImg: 'img/recorcholis.png',
        highLight: '$150',
        desc: 'adicionales con recarga',
        vigencia: '12/31/2022'
    },
    {
        id: 3,
        empresa: 'Acuario Interactivo',
        urlImg: 'img/acuario.png',
        highLight: '-15%',
        desc: 'en pase marino',
        vigencia: '6/30/2022'
    },
    {
        id: 4,
        empresa: 'Acuario Interactivo',
        urlImg: 'img/acuario.png',
        highLight: '-15%',
        desc: 'en fotografía',
        vigencia: '6/30/2022'
    },
    {
        id: 5,
        empresa: 'aspik',
        urlImg: 'img/aspik.png',
        highLight: '-15%',
        desc: 'de descuento en línea',
        vigencia: '6/30/2022'
    },
    {
        id: 6,
        empresa: 'Cabify',
        urlImg: 'img/cabify.png',
        highLight: '-50%',
        desc: 'descuento en viajes',
        vigencia: '4/30/2022'
    },
    {
        id: 7,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '-20%',
        desc: 'en laboratorio',
        vigencia: '10/31/2022'
    },
    {
        id: 8,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '-20%',
        desc: 'en estudios de gabinete',
        vigencia: '10/31/2022'
    },
    {
        id: 9,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '-20%',
        desc: 'en estudios especiales',
        vigencia: '10/31/2022'
    },
    {
        id: 10,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '-3%',
        desc: 'adicional a promos',
        vigencia: '10/31/2022'
    },
    {
        id: 11,
        empresa: 'ClickBus',
        urlImg: 'img/clickbus.png',
        highLight: '-10%',
        desc: 'de descuento en rutas',
        vigencia: '7/15/2022'
    },
    {
        id: 12,
        empresa: 'COSTCO',
        urlImg: 'img/costco.png',
        highLight: '$250',
        desc: 'en monedero electrónico',
        vigencia: '4/30/2022'
    },
    {
        id: 13,
        empresa: 'Cuponatic',
        urlImg: 'img/cuponatic.png',
        highLight: '10%',
        desc: 'de cashback',
        vigencia: '5/31/2022'
    },
    {
        id: 14,
        empresa: 'DEVLYN',
        urlImg: 'img/devlyn.png',
        highLight: '-15%',
        desc: 'descuento en armazones y más',
        vigencia: '12/31/2022'
    },
    {
        id: 15,
        empresa: 'DEVLYN',
        urlImg: 'img/devlyn.png',
        highLight: '-5%',
        desc: 'adicional en compras en línea',
        vigencia: '12/31/2022'
    },
    {
        id: 16,
        empresa: 'Doto',
        urlImg: 'img/doto.png',
        highLight: '-$100',
        desc: 'de descuento',
        vigencia: '6/30/2022'
    },
    {
        id: 17,
        empresa: 'Elektra',
        urlImg: 'img/elektra.png',
        highLight: '-5%',
        desc: 'de descuento adicional',
        vigencia: '5/31/2022'
    },
    {
        id: 18,
        empresa: 'flexi',
        urlImg: 'img/flexi.png',
        highLight: '-10%',
        desc: 'de descuento en calzado',
        vigencia: '4/30/2022'
    },
    {
        id: 19,
        empresa: 'Harmon Hall',
        urlImg: 'img/harmanhall.png',
        highLight: '-$500',
        desc: 'en colegiaturas (hasta*)',
        vigencia: '6/30/2022'
    },
    {
        id: 20,
        empresa: 'JULIO',
        urlImg: 'img/julio.png',
        highLight: '-10%',
        desc: 'descuento en temporada',
        vigencia: '12/31/2022'
    },
    {
        id: 21,
        empresa: 'KFC',
        urlImg: 'img/kfc.png',
        highLight: '-$66',
        desc: 'en combo Crujipollo',
        vigencia: '7/18/2022'
    },
    {
        id: 22,
        empresa: 'KFC',
        urlImg: 'img/kfc.png',
        highLight: '-$67',
        desc: 'en combo 14 piezas',
        vigencia: '7/18/2022'
    },
    {
        id: 23,
        empresa: 'KFC',
        urlImg: 'img/kfc.png',
        highLight: '-$36',
        desc: 'en combo Ke-tiras',
        vigencia: '7/18/2022'
    },
    {
        id: 24,
        empresa: 'Krispy Kreme',
        urlImg: 'img/krispy.png',
        highLight: '-10%',
        desc: 'descuento en el total',
        vigencia: '6/30/2022'
    },
    {
        id: 25,
        empresa: 'La Generosa',
        urlImg: 'img/lagenerosa.png',
        highLight: '-25%',
        desc: 'descuento en lunes',
        vigencia: '5/31/2022'
    },
    {
        id: 26,
        empresa: 'La Generosa',
        urlImg: 'img/lagenerosa.png',
        highLight: '-10%',
        desc: 'descuento (mar-dom)',
        vigencia: '5/31/2022'
    },
    {
        id: 27,
        empresa: 'Nailkery',
        urlImg: 'img/nailkery.png',
        highLight: '-15%',
        desc: 'sobre precio de lista',
        vigencia: '3/31/2022'
    },
    {
        id: 28,
        empresa: 'Óptica Americana',
        urlImg: 'img/americana.png',
        highLight: '-15%',
        desc: 'en compra de anteojos',
        vigencia: '6/30/2022'
    },
    {
        id: 29,
        empresa: 'Rinna Bruni',
        urlImg: 'img/rb.png',
        highLight: '-10%',
        desc: 'descuento en tienda',
        vigencia: '6/30/2022'
    },
    {
        id: 30,
        empresa: 'undostres',
        urlImg: 'img/undostres.png',
        highLight: '$75',
        desc: 'bonificación en saldo',
        vigencia: '12/31/2022'
    },
    {
        id: 31,
        empresa: 'Viajes Libertad',
        urlImg: 'img/viajes.png',
        highLight: '-10%',
        desc: 'descuento sobre el total',
        vigencia: '10/31/2022'
    },
    {
        id: 32,
        empresa: 'VIPS',
        urlImg: 'img/vips.png',
        highLight: '-25%',
        desc: 'descuento con código',
        vigencia: '12/31/2022'
    },
    {
        id: 33,
        empresa: 'volaris',
        urlImg: 'img/volaris.png',
        highLight: '-55%',
        desc: 'de descuento (*hasta)',
        vigencia: '3/23/2022'
    }
    ];
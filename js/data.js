
const promociones = [
    {
        id: 1,
        empresa: 'Elektra',
        urlImg: 'img/elektra.png',
        highLight: '5%',
        desc: 'de descuento adicional',
        vigencia: '5/31/2022'
    },
     {
        id: 2,
        empresa: 'VIPS',
        urlImg: 'img/vips.png',
        highLight: '25%',
        desc: 'descuento con código',
        vigencia: '12/31/2022'
    },
    {
        id: 3,
        empresa: 'KFC',
        urlImg: 'img/kfc.png',
        highLight: '$66',
        desc: 'en combo Crujipollo',
        vigencia: '7/18/2022'
    },
    {
        id: 4,
        empresa: 'KFC',
        urlImg: 'img/kfc.png',
        highLight: '$67',
        desc: 'en combo 14 piezas',
        vigencia: '7/18/2022'
    },
    {
        id: 5,
        empresa: 'KFC',
        urlImg: 'img/kfc.png',
        highLight: '$36',
        desc: 'en combo Ke-tiras',
        vigencia: '7/18/2022'
    },
    {
        id: 6,
        empresa: 'Krispy Kreme',
        urlImg: 'img/krispy.png',
        highLight: '10%',
        desc: 'descuento en el total',
        vigencia: '6/30/2022'
    },
    {
        id: 7,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '20%',
        desc: 'en laboratorio',
        vigencia: '10/31/2022'
    },
    {
        id: 8,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '15%',
        desc: 'en estudios de gabinete',
        vigencia: '10/31/2022'
    },
    {
        id: 9,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '5%',
        desc: 'en estudios especiales',
        vigencia: '10/31/2022'
    },
    {
        id: 10,
        empresa: 'Chopo',
        urlImg: 'img/chopo.png',
        highLight: '3%',
        desc: 'adicional a promos',
        vigencia: '10/31/2022'
    },
    {
        id: 11,
        empresa: 'DEVLYN',
        urlImg: 'img/devlyn.png',
        highLight: '15%',
        desc: 'descuento en armazones y más',
        vigencia: '12/31/2022'
    },
    {
        id: 12,
        empresa: 'DEVLYN',
        urlImg: 'img/devlyn.png',
        highLight: '5%',
        desc: 'adicional en compras en línea',
        vigencia: '12/31/2022'
    },
    {
        id: 13,
        empresa: 'Óptica Americana',
        urlImg: 'img/americana.png',
        highLight: '15%',
        desc: 'en compra de anteojos',
        vigencia: '6/30/2022'
    },
    {
        id: 14,
        empresa: 'La Generosa',
        urlImg: 'img/lagenerosa.png',
        highLight: '25%',
        desc: 'descuento en lunes',
        vigencia: '5/31/2022'
    },
    {
        id: 15,
        empresa: 'La Generosa',
        urlImg: 'img/lagenerosa.png',
        highLight: '10%',
        desc: 'descuento (mar-dom)',
        vigencia: '5/31/2022'
    },
    {
        id: 16,
        empresa: 'Harmon Hall',
        urlImg: 'img/harmanhall.png',
        highLight: '$500',
        desc: 'en colegiaturas (hasta*)',
        vigencia: '6/30/2022'
    },
    {
        id: 17,
        empresa: 'Doto',
        urlImg: 'img/doto.png',
        highLight: '$100',
        desc: 'de descuento',
        vigencia: '6/30/2022'
    },
    {
        id: 18,
        empresa: 'aspik',
        urlImg: 'img/aspik.png',
        highLight: '15%',
        desc: 'de descuento en línea',
        vigencia: '6/30/2022'
    },
    {
        id: 19,
        empresa: 'JULIO',
        urlImg: 'img/julio.png',
        highLight: '10%',
        desc: 'descuento en temporada',
        vigencia: '12/31/2022'
    },
    {
        id: 20,
        empresa: 'flexi',
        urlImg: 'img/flexi.png',
        highLight: '10%',
        desc: 'de descuento en calzado',
        vigencia: '4/30/2022'
    },
    {
        id: 21,
        empresa: 'Rinna Bruni',
        urlImg: 'img/rb.png',
        highLight: '10%',
        desc: 'descuento en tienda',
        vigencia: '6/30/2022'
    },
    {
        id: 22,
        empresa: '¡Recórcholis!',
        urlImg: 'img/recorcholis.png',
        highLight: '$150',
        desc: 'adicionales con recarga',
        vigencia: '12/31/2022'
    },
    {
        id: 23,
        empresa: '¡KATAPLUM!',
        urlImg: 'img/kataplum.png',
        highLight: '$40',
        desc: 'descuento en Kataporte',
        vigencia: '12/31/2022'
    },
    {
        id: 24,
        empresa: 'COSTCO',
        urlImg: 'img/costco.png',
        highLight: '$250',
        desc: 'en monedero electrónico',
        vigencia: '4/30/2022'
    },
    {
        id: 25,
        empresa: 'Cabify',
        urlImg: 'img/cabify.png',
        highLight: '50%',
        desc: 'descuento en viajes',
        vigencia: '4/30/2022'
    },
    {
        id: 26,
        empresa: 'ClickBus',
        urlImg: 'img/clickbus.png',
        highLight: '10%',
        desc: 'de descuento en rutas',
        vigencia: '7/15/2022'
    },
    {
        id: 27,
        empresa: 'Viajes Libertad',
        urlImg: 'img/viajes.png',
        highLight: '10%',
        desc: 'descuento sobre el total',
        vigencia: '10/31/2022'
    },
    {
        id: 28,
        empresa: 'volaris',
        urlImg: 'img/volaris.png',
        highLight: '55%',
        desc: 'de descuento (*hasta)',
        vigencia: '3/23/2022'
    },
    {
        id: 29,
        empresa: 'Nailkery',
        urlImg: 'img/nailkery.png',
        highLight: '15%',
        desc: 'sobre precio de lista',
        vigencia: '03/31/2022'
    }
    ];
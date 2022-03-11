

const verPromociones= ()=> {
    
    let container = document.querySelector(".content");

    promociones.forEach( element => {   
        console.log(element)     
        container.innerHTML += "<div class=\"journal__entry\">" + 
                                "<div class=\"journal__entry-picture\">" +
                                     `<a href=\"detalle.html?id=${element.id}\"><img src=\"${element.urlImg}\" width=\"120px\"/></a>` +
                                "</div>" +
                                    "<div class=\"journal__entry-body\">" +
                                        "<p class=\"journal__highlight\">"+
                                            `${element.highLight}` +
                                        "</p>" +
                                        `<p class=\"journal__entry-title\" ${element.id == 14 || element.id == 15 ? "style=\"font-size: 11px;\"" : ""}> `+
                                            `${element.desc}`+
                                        "</p>" +
                                        "<p class=\"journal__entry-content\">" +
                                        `Válido hasta el ${element.vigencia}` +
                                        "</p>" +
                                    "</div>"+
                                "</div>";
    });

    container.innerHTML += "<div class=\"term-cond\">"+
                                "<div class=\"icon-info\">"+
                                    "<img src=\"img/info.svg\"/>"+
                                "</div>" +
                                "<div class=\"text-term\">"+
                                    "<span>Consulta <a href=\"https://www.bancoazteca.com.mx/promociones-y-descuentos.html\">Términos y Condiciones</a> de la promoción en baz app</span>"+
                                "</div>"+
                            "</div>";
    
};

verPromociones();

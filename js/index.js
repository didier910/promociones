

const verPromociones= ()=> {
    
    let container = document.querySelector(".content");

    promociones.forEach( element => {        
        container.innerHTML += `<a href=\"detalle.html?id=${element.id}\">`+
                                "<div class=\"journal__entry\">" + 
                                "<div class=\"journal__entry-picture\">" +
                                    `<img src=\"${element.urlImg}\" width=\"120px\"/>` +
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
                                "</div>"+
                                "</a>";
    });
};

verPromociones();

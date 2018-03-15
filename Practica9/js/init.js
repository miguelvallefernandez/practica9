function init() {
    //deleteAllCookies();
    const dbName = "ERPDataBase";

    var store = StoreHouse.getInstance();

    var ventana;
    var varias = [];

    /*

     var eroski = new Shop("1234", "Eroski");
    var carrefour = new Shop("1235", "Carrefour");
    var cex = new Shop("1236", "Cex");

    //Le añadimos las imagenes
    eroski.images = "images/eroski.png";
    carrefour.images = "images/carrefour.png";
    cex.images = "images/cex.png";

    store.addShop(eroski);
    store.addShop(carrefour);
    store.addShop(cex);


    var titanic = new DVD("Titanc", "James Cameron", "0001", "DVD-Titanic", "20");
    var fast = new DVD("Fast and Furious 7", "Vin Diesel", "0002", "DVD-A Todo Gas 7", "35");

    var aquarisu = new Smartphone("Aquaris U", "0003", "BQ Aquaris U", "180");
    var tvLG = new TV("LG Smart", "0004", "SmartTV LG", "550");
    var aquarisx = new Smartphone("Aquaris X", "0005", "BQ Aquaris X", "350");

    var lgOptimus = new Smartphone("LG Movil", "0006", "LG Optimus", "50");
    var iphonex = new Smartphone("Iphone", "0007", "Iphone X", "950");

    var galaxyJ5 = new Smartphone("J5", "0008", "Samsung Galaxy J5", "181");


    titanic.images = "images/productos/titanic.jpg";
    fast.images = "images/productos/fastfurious.jpg";
    aquarisu.images = "images/productos/aquaris-u.jpg";
    aquarisx.images = "images/productos/aquaris-x.jpg";
    tvLG.images = "images/productos/smart-tv-lg.jpg";
    lgOptimus.images = "images/productos/lg-optimus.jpg";
    iphonex.images = "images/productos/iphone-x.jpg";
    galaxyJ5.images = "images/productos/gj5.jpg";

    titanic.description = "Relata la relación de Jack Dawson y Rose DeWitt Bukater, dos jóvenes que se conocen y se enamoran a bordo del transatlántico RMS Titanic en su viaje inaugural desde Southampton, Inglaterra, a Nueva York, EE. UU., en abril de 1912. Pertenecientes a diferentes clases sociales, intentan salir adelante pese a las adversidades que los separarían de forma definitiva, entre ellas el prometido de Rose, Caledon «Cal» Hockley (un adinerado del cual ella no está enamorada, pero su madre la ha obligado a permanecer con él para garantizar un futuro económico próspero) y el hundimiento del lujoso barco tras chocar con un iceberg.";
    fast.description = "Película de acción estadounidense de 2015 dirigida por James Wan y protagonizada por Vin Diesel, Paul Walker, Dwayne Johnson, Michelle Rodríguez, Jordana Brewster, Tyrese Gibson, Ludacris y Jason Statham. Es el séptimo film de la saga The Fast and the Furious y también la secuela paralela de la película Fast & Furious 6 y de su spin-off The Fast and the Furious: Tokyo Drift.";
    aquarisu.description = "Disfruta en tu BQ de lo mejor de Android Nougat. Con la opción multiventana podrás tener dos apps abiertas simultáneamente, el modo luz nocturna reduce la luz azul de la pantalla para ayudarte a descansar y las notificaciones ahora están agrupadas, son más interactivas y puedes responder directamente desde ellas.";
    aquarisx.description = "Una pantalla con más de 16,5 millones de colores que abraza sutilmente el marco metálico. Líneas limpias y bordes ovalados gracias al cristal 2,5D. Cámaras que redefinen la fotografía con baja luz. Máxima potencia con el mínimo consumo. Podemos contártelo, pero nunca será como verlo.";
    tvLG.description = "Televisor con conexión a internet, de manera que puede acceder a través de aplicaciones a la infinita oferta de deportes, series, películas y dibujos animados disponibles en la red, de manera rápida y sencilla.";
    lgOptimus.description = "Smartphone compacto, Android 4.1.2 Jelly Bean, pantalla táctil de 4,7'', procesador de cuatro núcleos y diseño cuidado al detalle.";
    iphonex.description = "Siempre hemos querido crear un iPhone que sea todo pantalla. Un iPhone capaz de sumergirte por completo en lo que ves. Y tan inteligente que responda a un toque, a tu voz, incluso a tu mirada. Ahora el iPhone X hace realidad esa visión. Dile hola al futuro.";
    galaxyJ5.description = "Un móvil de gama media de entrada, ideal para las operadoras que buscan colocar sus tarifas ofreciendo terminales como añadido, y para quienes no quieren gastar demasiado dinero porque no necesitan un teléfono de última generación.";


    var categoriaMoviles = new Category("Moviles");
    var categoriaPeliculas = new Category("Peliculas");
    var categoriaTelevisores = new Category("Televisores");

    store.addCategory(categoriaPeliculas);
    store.addCategory(categoriaMoviles);
    store.addCategory(categoriaTelevisores);

    store.addProduct(titanic, categoriaPeliculas);
    store.addProduct(fast, categoriaPeliculas);

    store.addProduct(aquarisu, categoriaMoviles);
    store.addProduct(aquarisx, categoriaMoviles);
    store.addProduct(lgOptimus, categoriaMoviles);
    store.addProduct(iphonex, categoriaMoviles);
    store.addProduct(galaxyJ5, categoriaMoviles);

    store.addProduct(tvLG, categoriaTelevisores);


    store.addProductInShop(titanic, eroski, 30);
    store.addProductInShop(fast, eroski, 45);
    store.addProductInShop(iphonex, eroski, 5);
    store.addProductInShop(lgOptimus, eroski, 2);
    store.addProductInShop(tvLG, eroski, 15);

    store.addProductInShop(aquarisx, carrefour, 30);
    store.addProductInShop(aquarisu, carrefour, 45);
    store.addProductInShop(galaxyJ5, carrefour, 10);

    store.addProductInShop(tvLG, cex, 15);
    store.addProductInShop(aquarisu, cex, 10);
    store.addProductInShop(galaxyJ5, cex, 15);





     */
    abrirBaseDatos();


    //console.log(tiendas);

    initPopulate(store);
    shopMenusPopulate(store);
    // console.log(showProductCategoryShop(store, "Eroski", "Peliculas"));


    globalProductPopulate(store);

    var home = document.getElementById("home");

    //document.getElementById("jsongen").addEventListener("click", JSon());

    JSon();

    cargarJson();


    document.getElementById("crearJson").addEventListener("click", crearJSON());


    // var Json = JSon();
    //var myJSON = JSON.stringify(Json);

    //console.log(myJSON);

    /*
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "json.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("x =" + "hola");
    */


    function homeEvent(store) {
        return function () {
            var principal = document.getElementById("principal");
            principal.remove();

            if (document.getElementById("categorias")) {
                document.getElementById("categorias").remove();
            }
            if (document.getElementById("title")) {
                document.getElementById("title").remove();
            }

            if (document.getElementById("agregar")) {
                document.getElementById("agregar").remove();
            }


            if (document.getElementById("cerrarVentana")) {
                document.getElementById("cerrarVentana").remove();
            }

            document.getElementById("home").innerHTML = "Home";

            if (checkCookie("prueba", "prueba")) {
                document.getElementById("crearJson").style.display = "block";
            }


            initPopulate(store);
            shopMenusPopulate(store);

        }
    }

    document.getElementById("home").addEventListener("click", homeEvent(store));


    function initPopulate(store) {

        if (!checkCookie("prueba", "prueba")) {
            document.getElementById("crearJson").style.display = "none";
        }

        document.getElementById("tipoProd").addEventListener("click", tipoProducto());

        var main = document.getElementById("main");

        if (document.getElementById("principal")) {
            document.getElementById("principal").remove();
        }


        //Recorremos las tiendas

        //Creamos el div principal dentro del main

        var divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class", "principal row");
        divPrincipal.setAttribute("id", "principal");
        //idDiv.id = "opcion1";
        main.appendChild(divPrincipal);

        var tiendas = store.tiendas;
        var shop = tiendas.next();
        var count = 0;
        while (shop.done !== true) {


            var div1 = document.createElement("div");
            div1.setAttribute("class", "div-Centro col-md-3");
            divPrincipal.appendChild(div1);
            var div1panel = document.createElement("div");
            div1panel.setAttribute("class", "panel-body");
            div1.appendChild(div1panel);
            var imagen1 = document.createElement("img");
            if (shop.value.name !== "Anonymous shop") {
                imagen1.setAttribute("src", shop.value.images);
            }
            else {
                imagen1.setAttribute("src", "images/default.jpg");
            }
            imagen1.setAttribute("class", "img-responsive");
            div1panel.appendChild(imagen1);
            var div1panelf = document.createElement("div");
            div1panelf.setAttribute("class", "panel-footer");
            div1.appendChild(div1panelf);
            var enlace1 = document.createElement("a");
            enlace1.setAttribute("href", "#");
            if (shop.value.description) {
                enlace1.setAttribute("title", shop.value.description);
            }
            enlace1.setAttribute("id", "btnTiendaPrincipal" + count++);

            var textoEnlace1 = document.createTextNode(shop.value.name);
            enlace1.appendChild(textoEnlace1);
            div1panelf.appendChild(enlace1);


            if (shop.value.name != "Anonymous shop") {
                if (checkCookie("prueba", "prueba")) {
                    var divButtons = document.createElement("div");
                    var btn1 = document.createElement("button");
                    btn1.setAttribute("class", "btn btn-success");
                    btn1.setAttribute("id", "editar" + shop.value.name);
                    btn1.setAttribute("data-target", "#modalModificarTienda");
                    btn1.setAttribute("data-toggle", "modal");
                    btn1.addEventListener("click", rellenarForm(shop.value));
                    var span = document.createElement("span");
                    span.setAttribute("class", "glyphicon glyphicon-pencil");
                    btn1.appendChild(span);
                    var btn2 = document.createElement("button");
                    btn2.setAttribute("class", "btn btn-danger");
                    btn2.setAttribute("id", shop.value.name);
                    btn2.setAttribute("data-target", "#eliminarShop");
                    btn2.setAttribute("data-toggle", "modal");
                    btn2.addEventListener("click", eliminarTienda(store, shop.value));
                    var span2 = document.createElement("span");
                    span2.setAttribute("class", "glyphicon glyphicon-remove");
                    btn2.appendChild(span2);
                    div1panelf.appendChild(divButtons);
                    divButtons.appendChild(btn1);
                    divButtons.appendChild(btn2);

                }

            }
            div1.appendChild(div1panel);
            div1.appendChild(div1panelf);
            divPrincipal.appendChild(div1);


            shop = tiendas.next();
        }


        if (!document.getElementById("agregar")) {
            if (checkCookie("prueba", "prueba")) {
                var divAgregar = document.createElement("div");
                var agregarNueva = document.createElement("button");
                agregarNueva.setAttribute("class", "btn btn-warning");
                var spanAdd = document.createElement("span");
                spanAdd.setAttribute("class", "glyphicon glyphicon-plus");
                var texto = document.createTextNode("Agregar nueva");
                spanAdd.appendChild(texto);
                agregarNueva.setAttribute("id", "agregar");
                agregarNueva.setAttribute("data-target", "#modalAgregarTienda");
                agregarNueva.setAttribute("data-toggle", "modal");
                agregarNueva.appendChild(spanAdd);
                divAgregar.appendChild(agregarNueva);
                main.appendChild(divAgregar);

                document.getElementById("addShop").addEventListener("click", agregarTienda(store));
            }
        }


        for (var i = 0; i < count; i++) {
            document.getElementById("btnTiendaPrincipal" + i).addEventListener("click", shopPopulate(store, document.getElementById("btnTiendaPrincipal" + i).textContent));
        }

    }


    function shopMenusPopulate(store) {
        if (document.getElementById("menu")) {
            document.getElementById("menu").remove();
        }

        var myNavbar = document.getElementById("myNavbar");

        var ul = document.createElement("ul");
        ul.setAttribute("id", "menu");
        ul.setAttribute("class", "nav navbar-nav navbar-left");
        myNavbar.appendChild(ul);


        var tiendas = store.tiendas;
        var shop = tiendas.next();

        var count = 0;
        while (shop.done !== true) {

            var li = document.createElement("li");
            ul.appendChild(li);
            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.setAttribute("id", "btnTienda" + count++);
            var textoEnlace1 = document.createTextNode(shop.value.name);
            console.log(shop.value.name);
            a.appendChild(textoEnlace1);
            li.appendChild(a);
            shop = tiendas.next();

            if (document.getElementById("categorias")) {

                var categories = store.categorias;
                var category = categories.next();
                while (category.done !== true) {

                    document.getElementById(category.value.title).addEventListener("click", productsCategoryShopPopulate(store, shop.value.name, category.value.title));
                    category = categories.next();
                }

            }


        }

        var globalP = document.createElement("li");
        globalP.setAttribute("id", "globalP");
        var x = document.createElement("a");
        x.setAttribute("href", "#");
        var textoEn = document.createTextNode("Productos globales");
        x.appendChild(textoEn);
        globalP.appendChild(x);
        ul.appendChild(globalP);

        document.getElementById("globalP").addEventListener("click", globalProductPopulate(store));


        for (var i = 0; i < count; i++) {
            document.getElementById("btnTienda" + i).addEventListener("click", shopPopulate(store, document.getElementById("btnTienda" + i).textContent));
        }

        botonCategorias(store);
    }

    function shopPopulate(store, tiendaParam) {
        return function () {

            if (document.getElementById("title")) {
                document.getElementById("title").remove();
            }

            if (!document.getElementById("categorias")) {
                menuCategoryShopPopulate(store);
            }


            if (document.getElementById("cerrarVentana")) {
                document.getElementById("cerrarVentana").remove();
            }

            if (document.getElementById("agregar")) {
                document.getElementById("agregar").remove();
            }

            var navBar = document.getElementById("main");
            var cerrarVentanas = document.createElement("button");
            cerrarVentanas.setAttribute("type", "button");
            cerrarVentanas.setAttribute("class", "btn btn-danger");
            cerrarVentanas.setAttribute("id", "cerrarVentana");
            var span = document.createElement("span");
            var tx = document.createTextNode("Cerrar Ventanas");
            span.appendChild(tx);
            cerrarVentanas.appendChild(span);
            navBar.appendChild(cerrarVentanas);

            document.getElementById("cerrarVentana").addEventListener("click", CerrarVentana());


            console.log(tiendaParam);

            var principal = document.getElementById("principal");
            principal.remove();

            var divPrincipal = document.createElement("div");
            divPrincipal.setAttribute("class", "principal row");
            divPrincipal.setAttribute("id", "principal");
            main.appendChild(divPrincipal);

            var tiendas = store.tiendas;
            var shop = tiendas.next();

            var count = 0;
            while (shop.done !== true) {
                if (shop.value.name == tiendaParam) {


                    if (!document.getElementById("agregar")) {
                        if (checkCookie("prueba", "prueba")) {
                            var divAgregar = document.createElement("div");
                            var agregarNueva = document.createElement("button");
                            agregarNueva.setAttribute("class", "btn btn-warning");
                            var spanAdd = document.createElement("span");
                            spanAdd.setAttribute("class", "glyphicon glyphicon-plus");
                            var texto = document.createTextNode("Agregar nuevo");
                            spanAdd.appendChild(texto);
                            agregarNueva.setAttribute("id", "agregar");
                            agregarNueva.setAttribute("data-target", "#modalAgregarProducto");
                            agregarNueva.setAttribute("data-toggle", "modal");
                            agregarNueva.appendChild(spanAdd);
                            divAgregar.appendChild(agregarNueva);
                            navBar.appendChild(divAgregar);

                            if (document.getElementById("categories")) {
                                document.getElementById("categories").remove();
                            }


                            var div = document.getElementById("cats");
                            var select = document.createElement("select");
                            select.setAttribute("class", "form-control");
                            select.setAttribute("id", "categories");

                            var categories = store.categorias;
                            var category = categories.next();


                            while (category.done !== true) {

                                var option = document.createElement("option");
                                option.setAttribute("value", category.value.title);
                                var texto = document.createTextNode(category.value.title);
                                option.appendChild(texto);
                                select.appendChild(option);

                                category = categories.next();
                            }
                            div.appendChild(select);


                            /*

                            <button class="btn btn-default" id="addPro" data-target="#addProductoCorrecto" data-toggle="modal">
                        Añadir
                    </button>


                             */

                            if (document.getElementById("addPro")) {
                                document.getElementById("addPro").remove();
                            }

                            var btnn = document.createElement("button");
                            btnn.setAttribute("class", "btn btn-default");
                            btnn.setAttribute("id", "addPro");
                            btnn.setAttribute("data-target", "#addProductoCorrecto");
                            btnn.setAttribute("data-toggle", "modal");
                            btnn.appendChild(document.createTextNode("Añadir"));
                            document.getElementById("bodym").appendChild(btnn);
                            document.getElementById("resetear2").reset();
                            document.getElementById("addPro").addEventListener("click", agregarProducto(store, shop.value));

                        }
                    }


                    var nameShop = shop.value.name;
                    var tienda = store.getShopProducts(shop.value);
                    var shops = tienda.next();
                    while (shops.done !== true) {
                        var div1 = document.createElement("div");
                        div1.setAttribute("class", "div-Centro col-md-3");
                        divPrincipal.appendChild(div1);
                        var div1panel = document.createElement("div");
                        div1panel.setAttribute("class", "panel-body");
                        div1.appendChild(div1panel);
                        var imagen1 = document.createElement("img");
                        imagen1.setAttribute("src", shops.value.product.images);
                        imagen1.setAttribute("class", "img-responsive");
                        div1panel.appendChild(imagen1);
                        var div1panelf = document.createElement("div");
                        div1panelf.setAttribute("class", "panel-footer");
                        div1.appendChild(div1panelf);
                        var enlace1 = document.createElement("a");
                        enlace1.setAttribute("href", "#");

                        enlace1.setAttribute("id", shops.value.product.name);

                        var textoEnlace1 = document.createTextNode(shops.value.product.name + "(" + shops.value.stock + ")");
                        //  enlace1.setAttribute("name", shop.value.product.name);
                        enlace1.appendChild(textoEnlace1);
                        div1panelf.appendChild(enlace1);


                        // document.getElementById(shop.value.product.name).addEventListener("click", productShopPopulate(store, shop.value.product.name, nameShop));
                        document.getElementById(shops.value.product.name).addEventListener("click", abrirDescripcion(store, shops.value.product.name, nameShop));


                        var categories = store.categorias;
                        var category = categories.next();
                        while (category.done !== true) {

                            document.getElementById(category.value.title).addEventListener("click", productsCategoryShopPopulate(store, nameShop, category.value.title));
                            category = categories.next();
                        }


                        if (checkCookie("prueba", "prueba")) {
                            var divButtons = document.createElement("div");
                            var btn1 = document.createElement("button");
                            btn1.setAttribute("class", "btn btn-success");
                            btn1.setAttribute("id", "editar" + shops.value.product.name);
                            btn1.setAttribute("data-target", "#modificarStock");
                            btn1.setAttribute("data-toggle", "modal");
                            btn1.addEventListener("click", rellenarFormStock(shops));
                            var spann = document.createElement("span");
                            spann.setAttribute("class", "glyphicon glyphicon-pencil");
                            btn1.appendChild(spann);
                            var btn2 = document.createElement("button");
                            btn2.setAttribute("class", "btn btn-danger");
                            btn2.setAttribute("id", "borrar" + shops.value.product.name);
                            btn2.setAttribute("data-target", "#eliminarProducto");
                            btn2.setAttribute("data-toggle", "modal");
                            btn2.addEventListener("click", eliminarProducto(store, shops.value.product, shop.value));
                            var span2 = document.createElement("span");
                            span2.setAttribute("class", "glyphicon glyphicon-remove");
                            btn2.appendChild(span2);
                            div1panelf.appendChild(divButtons);
                            divButtons.appendChild(btn1);
                            divButtons.appendChild(btn2);

                        }


                        shops = tienda.next();


                        // console.log("Producto: " + shop.value.product.name + ", stock: " + shop.value.stock);
                        // shop = tienda.next();
                    }
                }
                shop = tiendas.next();
            }

        }
    }


    function menuCategoryShopPopulate(store) {

        var myNavbar = document.getElementById("myNavbar");

        var divBoton = document.createElement("div");
        divBoton.setAttribute("class", "btn-group pull right");

        myNavbar.appendChild(divBoton);

        var boton = document.createElement("button");
        boton.setAttribute("id", "categorias");
        boton.setAttribute("type", "button");
        boton.setAttribute("id", "categorias");
        boton.setAttribute("class", "btn btn-danger");
        boton.setAttribute("data-toggle", "dropdown");
        divBoton.appendChild(boton);

        var span = document.createElement("span");
        var text = document.createTextNode("Categorias");
        span.appendChild(text);
        boton.appendChild(span);

        var dropDown = document.createElement("div");
        dropDown.setAttribute("class", "dropdown-menu");

        divBoton.appendChild(dropDown);

        var categories = store.categorias;
        var category = categories.next();

        var ul = document.createElement("ul");
        dropDown.appendChild(ul);

        while (category.done !== true) {
            var li = document.createElement("li");
            ul.appendChild(li);
            var a = document.createElement("a");
            a.setAttribute("class", "dropdown-item");
            a.setAttribute("href", "#");
            a.setAttribute("id", category.value.title);

            var textNode = document.createTextNode(category.value.title);
            a.appendChild(textNode);

            li.appendChild(a);

            category = categories.next();
        }

    }


    function productsCategoryShopPopulate(store, tienda, categoria) {
        return function () {
            var productosCat = showProductCategoryShop(store, tienda, categoria);
            console.log(productosCat);


            if (document.getElementById("title")) {
                document.getElementById("title").remove();
            }

            if (!document.getElementById("categorias")) {
                menuCategoryShopPopulate(store);
            }


            var principal = document.getElementById("principal");
            principal.remove();

            var divPrincipal = document.createElement("div");
            divPrincipal.setAttribute("class", "principal row");
            divPrincipal.setAttribute("id", "principal");
            main.appendChild(divPrincipal);


            for (var i = 0; i < productosCat.length; i++) {


                var div1 = document.createElement("div");
                div1.setAttribute("class", "div-Centro col-md-3");
                divPrincipal.appendChild(div1);
                var div1panel = document.createElement("div");
                div1panel.setAttribute("class", "panel-body");
                div1.appendChild(div1panel);
                var imagen1 = document.createElement("img");
                imagen1.setAttribute("src", productosCat[i].product.images);
                imagen1.setAttribute("class", "img-responsive");
                div1panel.appendChild(imagen1);
                var div1panelf = document.createElement("div");
                div1panelf.setAttribute("class", "panel-footer");
                div1.appendChild(div1panelf);
                var enlace1 = document.createElement("a");
                enlace1.setAttribute("href", "#");

                enlace1.setAttribute("id", productosCat[i].product.name);

                var textoEnlace1 = document.createTextNode(productosCat[i].product.name + "(" + productosCat[i].stock + ")");
                //  enlace1.setAttribute("name", shop.value.product.name);
                enlace1.appendChild(textoEnlace1);
                div1panelf.appendChild(enlace1);

                //document.getElementById(productosCat[i].product.name).addEventListener("click", productShopPopulate(store, productosCat[i].product.name, tienda));
                document.getElementById(productosCat[i].product.name).addEventListener("click", abrirDescripcion(store, productosCat[i].product.name, tienda));


                var categories = store.categorias;
                var category = categories.next();
                while (category.done !== true) {

                    document.getElementById(category.value.title).addEventListener("click", productsCategoryShopPopulate(store, tienda, category.value.title));
                    category = categories.next();
                }


            }


        }
    }


    function showProductCategoryShop(store, tienda, categoria) {


        var categories = store.categorias;
        var category = categories.next();


        while (category.done !== true) {
            if (category.value.title == categoria) {
                var cat = category.value;
            }
            category = categories.next();
        }


        var producto = store.getCategoryProducts(cat);

        var product = producto.next();

        var categoryProducts = [];

        while (product.done !== true) {
            categoryProducts.push(product.value);
            product = producto.next();
        }


        var tiendas = store.tiendas;
        var shop = tiendas.next();
        while (shop.done !== true) {

            if (shop.value.name == tienda) {
                var tiendaF = shop.value;
            }

            shop = tiendas.next();
        }


        var tiendaP = store.getShopProducts(tiendaF);
        var shop = tiendaP.next();

        var shopProduct = [];

        while (shop.done !== true) {
            shopProduct.push(shop.value);
            shop = tiendaP.next();
        }

        var finalArray = [];

        for (var i = 0; i < shopProduct.length; i++) {
            for (var j = 0; j < categoryProducts.length; j++) {
                if (categoryProducts[j].serial == shopProduct[i].product.serial) {
                    finalArray.push(shopProduct[i]);
                }
            }
        }

        return finalArray;


    }


    function productShopPopulate(store, product, shopParam) {
        // return function () {
        // console.log(product);

        var main = ventana.document.getElementById("main");
        var principal = ventana.document.getElementById("principal");
        //principal.remove();
        /*
                    if (document.getElementById("title")) {
                        document.getElementById("title").remove();
                    }
        */
        //Creamos el div principal dentro del main

        var divTitle = document.createElement("div");
        divTitle.setAttribute("id", "title");
        var titulo = document.createTextNode("DESCRIPCION PRODUCTO");
        var tit = document.createElement("h3");
        divTitle.appendChild(tit);
        tit.appendChild(titulo);
        main.appendChild(divTitle);

        var divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class", "producto row");
        divPrincipal.setAttribute("id", "principal");
        main.appendChild(divPrincipal);


        var tiendas = store.tiendas;
        var shop = tiendas.next();

        var count = 0;
        while (shop.done !== true) {

            if (shop.value.name == shopParam) {
                var tienda = store.getShopProducts(shop.value);
                shop = tienda.next();
                while (shop.done !== true) {

                    if (shop.value.product.name == product) {


                        var divTitulo = document.createElement("div");
                        divTitulo.setAttribute("class", "col-md-2");
                        divPrincipal.appendChild(divTitulo);

                        var h4 = document.createElement("h4");
                        var texth4 = document.createTextNode(shop.value.product.name);
                        h4.appendChild(texth4);

                        var img = document.createElement("img");
                        img.setAttribute("src", shop.value.product.images);
                        img.setAttribute("class", "img-responsive");

                        divTitulo.appendChild(h4);
                        divTitulo.appendChild(img);


                        var divDescripcion = document.createElement("div");
                        divDescripcion.setAttribute("class", "descripcion col-md-10");
                        divPrincipal.appendChild(divDescripcion);

                        var p = document.createElement("p");
                        var textP = document.createTextNode(shop.value.product.description);
                        p.appendChild(textP);

                        var stock = document.createElement("p");
                        stock.setAttribute("id", "stock");
                        stock.setAttribute("class", "pull-right");
                        var textStock = document.createTextNode("Stock: " + shop.value.stock);
                        console.log(shop.value.stock);
                        stock.appendChild(textStock);

                        divDescripcion.appendChild(p);
                        divDescripcion.appendChild(stock);


                    }
                    console.log(shop.value.product.description);

                    shop = tienda.next();
                }
            }
            shop = tiendas.next();
        }
        //}
    }

    function globalProductPopulate(store) {

        return function () {

            if (document.getElementById("agregar")) {
                document.getElementById("agregar").remove();
            }

            if (document.getElementById("title")) {
                document.getElementById("title").remove();
            }

            var tiendas = store.tiendas;
            var shop = tiendas.next();

            var productosGlobales = [];

            while (shop.done !== true) {
                //Category: title
                // console.log("Tienda: " + shop.value.name);


                var x = store.getShopProducts(shop.value);
                var tiendaProducts = x.next();
                while (tiendaProducts.done !== true) {
                    //console.log("Producto: " + tiendaProducts.value.product.name + ", stock: " + tiendaProducts.value.stock);

                    a = tiendaProducts.value;
                    var repe = false;
                    for (var i = 0; i < productosGlobales.length; i++) {

                        if (productosGlobales[i].product.name == a.product.name) {
                            productosGlobales[i].stock = productosGlobales[i].stock + a.stock;
                            repe = true;
                        }

                    }
                    if (repe == false) {
                        productosGlobales.push(a);
                    }


                    tiendaProducts = x.next();
                }


                shop = tiendas.next();
            }

            // console.log(productosGlobales);


            var principal = document.getElementById("principal");
            principal.remove();

            var divPrincipal = document.createElement("div");
            divPrincipal.setAttribute("class", "principal row");
            divPrincipal.setAttribute("id", "principal");
            main.appendChild(divPrincipal);


            for (var i = 0; i < productosGlobales.length; i++) {

                //console.log("Producto: " + productosGlobales[i].producto.product.name + ", stock: " + productosGlobales[i].producto.stock + ", tienda: " + productosGlobales[i].tienda.name);

                var div1 = document.createElement("div");
                div1.setAttribute("class", "div-Centro col-md-3");
                divPrincipal.appendChild(div1);
                var div1panel = document.createElement("div");
                div1panel.setAttribute("class", "panel-body");
                div1.appendChild(div1panel);
                var imagen1 = document.createElement("img");
                imagen1.setAttribute("src", productosGlobales[i].product.images);
                imagen1.setAttribute("class", "img-responsive");
                div1panel.appendChild(imagen1);

                var h5 = document.createElement("h5");
                var texto = document.createTextNode("Tienda: ");
                h5.appendChild(texto);
                div1panel.appendChild(h5);


                var tiendas = store.tiendas;
                var shop = tiendas.next();

                var divTiendas = document.createElement("div");
                divTiendas.setAttribute("class", "tiendas");
                div1panel.appendChild(divTiendas);
                while (shop.done !== true) {
                    //Category: title
                    // console.log("Tienda: " + shop.value.name);


                    var x = store.getShopProducts(shop.value);
                    var tiendaProducts = x.next();
                    while (tiendaProducts.done !== true) {


                        if (tiendaProducts.value.product.name == productosGlobales[i].product.name) {
                            var a = document.createElement("a");
                            a.setAttribute("href", "#");
                            a.setAttribute("class", "enlaceTiendas");
                            a.setAttribute("id", productosGlobales[i].product.name + shop.value.name);
                            var txt = document.createTextNode(shop.value.name);
                            a.appendChild(txt);
                            divTiendas.appendChild(a);


                            document.getElementById(productosGlobales[i].product.name + shop.value.name).addEventListener("click", abrirDescripcion(store, productosGlobales[i].product.name, shop.value.name));

                        }


                        tiendaProducts = x.next();

                    }


                    shop = tiendas.next();
                }


                var div1panelf = document.createElement("div");
                div1panelf.setAttribute("class", "panel-footer");
                div1.appendChild(div1panelf);
                var prod = document.createElement("p");
                prod.setAttribute("href", "#");

                prod.setAttribute("id", productosGlobales[i].product.name);

                var textoProd = document.createTextNode(productosGlobales[i].product.name + "(" + productosGlobales[i].stock + ")");
                //  enlace1.setAttribute("name", shop.value.product.name);
                prod.appendChild(textoProd);
                div1panelf.appendChild(prod);

                //document.getElementById(productosGlobales[i].product.name).addEventListener("click", productShopPopulate(store, productosGlobales[i].product.name, nameShop));

            }


        }
    }

    function abrirDescripcion(store, product, shopParam) {
        return function () {
            //var ventana;
            //Abrir ventana

            //Abre una ventana nueva con una con nombre y características.
            ventana = window.open("descripcion.html", "", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            varias.push(ventana);

            ventana.onload = abrirVentana;

            function abrirVentana() {
                productShopPopulate(store, product, shopParam)
            }


        }


    }

    function CerrarVentana() {
        return function () {

            for (var i = 0; i < varias.length; i++) {
                varias[i].close();
            }

        }
    }


    function botonCategorias(store) {

        var ul = document.getElementById("menu");
        var li = document.createElement("li");
        var a = document.createElement("a");
        var text = document.createTextNode("Categorias");
        a.appendChild(text);
        a.setAttribute("id", "btnCategorias");
        a.setAttribute("href", "#");
        li.appendChild(a);
        ul.appendChild(li);

        document.getElementById("btnCategorias").addEventListener("click", mostrarCategorias(store));

    }


    function mostrarCategorias(store) {

        return function () {

            if (document.getElementById("cerrarVentana")) {
                document.getElementById("cerrarVentana").remove();
            }
            if (document.getElementById("categorias")) {
                document.getElementById("categorias").remove();
            }

            if (document.getElementById("agregar")) {
                document.getElementById("agregar").remove();
            }

            var main = document.getElementById("main");

            var principal = document.getElementById("principal");
            principal.remove();

            var divPrincipal = document.createElement("div");
            divPrincipal.setAttribute("class", "principal row");
            divPrincipal.setAttribute("id", "principal");
            main.appendChild(divPrincipal);


            var categories = store.categorias;
            var category = categories.next();


            while (category.done !== true) {
                //Category: title

                var div = document.createElement("div");
                div.setAttribute("class", "div-Centro col-md-3");
                var panelb = document.createElement("div");
                panelb.setAttribute("class", "panel-body");
                var img = document.createElement("img");
                img.setAttribute("src", "images/categoria.jpg");
                img.setAttribute("class", "img-responsive");
                panelb.appendChild(img);
                var panelf = document.createElement("div");
                panelf.setAttribute("class", "panel-footer");
                panelf.setAttribute("id", "panel" + category.value.title);
                var a = document.createElement("a");
                a.setAttribute("href", "#");
                a.setAttribute("id", "ponerInput" + category.value.title);
                a.addEventListener("click", productCategory(store, category.value));
                var txt = document.createTextNode(category.value.title);
                a.appendChild(txt);
                panelf.appendChild(a);
                if (category.value.title != "Anonymous category") {
                    if (checkCookie("prueba", "prueba")) {
                        var divButtons = document.createElement("div");
                        divButtons.setAttribute("id", "divBttn" + category.value.title);
                        var btn1 = document.createElement("button");
                        btn1.setAttribute("class", "btn btn-success");
                        btn1.setAttribute("id", "editar" + category.value.title);
                        //btn1.setAttribute("data-target", "#modalModificarCat");
                        // btn1.setAttribute("data-toggle", "modal");
                        //document.getElementById("mdfCat").addEventListener("click",modificarCategoria(store,category.value));
                        // document.getElementById("mdfCat").setAttribute("id","mdfCat"+category.value.title);


                        btn1.addEventListener("click", modify(category.value.title, category.value));

                        var span = document.createElement("span");
                        span.setAttribute("class", "glyphicon glyphicon-pencil");
                        btn1.appendChild(span);
                        var btn2 = document.createElement("button");
                        btn2.setAttribute("class", "btn btn-danger");
                        btn2.setAttribute("id", category.value.title);
                        btn2.setAttribute("data-target", "#eliminarCat");
                        btn2.setAttribute("data-toggle", "modal");
                        btn2.addEventListener("click", eliminarCategoria(store, category.value.title));
                        var span2 = document.createElement("span");
                        span2.setAttribute("class", "glyphicon glyphicon-remove");
                        btn2.appendChild(span2);
                        panelf.appendChild(divButtons);
                        divButtons.appendChild(btn1);
                        divButtons.appendChild(btn2);

                    }

                }
                div.appendChild(panelb);
                div.appendChild(panelf);
                divPrincipal.appendChild(div);
                category = categories.next();
            }

            if (checkCookie("prueba", "prueba")) {
                var divAgregar = document.createElement("div");
                var agregarNueva = document.createElement("button");
                agregarNueva.setAttribute("class", "btn btn-warning");
                var spanAdd = document.createElement("span");
                spanAdd.setAttribute("class", "glyphicon glyphicon-plus");
                var texto = document.createTextNode("Agregar nueva");
                spanAdd.appendChild(texto);
                agregarNueva.setAttribute("id", "agregar");
                agregarNueva.setAttribute("data-target", "#modalAgregarCat");
                agregarNueva.setAttribute("data-toggle", "modal");
                agregarNueva.appendChild(spanAdd);
                divAgregar.appendChild(agregarNueva);
                main.appendChild(divAgregar);

                document.getElementById("addCat").addEventListener("click", agregarCategoria(store));
            }
            /*

                    <button class="btn btn-default" id="acceso" onclick="agregarCategoria()">Agregar</button>
                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">Acceso</button>
              */

        }

    }

    function productCategory(store, categoria) {
        return function () {

            if (document.getElementById("cerrarVentana")) {
                document.getElementById("cerrarVentana").remove();
            }
            if (document.getElementById("agregar")) {
                document.getElementById("agregar").remove();
            }

            document.getElementById("principal").remove();

            var divPrincipal = document.createElement("div");
            divPrincipal.setAttribute("class", "principal row");
            divPrincipal.setAttribute("id", "principal");
            document.getElementById("main").appendChild(divPrincipal);


            var productos = store.getCategoryProducts(categoria);
            var product = productos.next();
            while (product.done !== true) {
                //console.log("Producto: " + product.value.name + " (" + product.value.serial + ")");


                var div1 = document.createElement("div");
                div1.setAttribute("class", "div-Centro col-md-3");
                divPrincipal.appendChild(div1);
                var div1panel = document.createElement("div");
                div1panel.setAttribute("class", "panel-body");
                div1.appendChild(div1panel);
                var imagen1 = document.createElement("img");
                imagen1.setAttribute("src", product.value.images);
                imagen1.setAttribute("class", "img-responsive");
                div1panel.appendChild(imagen1);
                var div1panelf = document.createElement("div");
                div1panelf.setAttribute("class", "panel-footer");
                div1.appendChild(div1panelf);
                var enlace1 = document.createElement("p");
                var textoEnlace1 = document.createTextNode(product.value.name);
                //  enlace1.setAttribute("name", shop.value.product.name);
                enlace1.appendChild(textoEnlace1);
                div1panelf.appendChild(enlace1);


                product = productos.next();
            }

        }
    }


    function modify(categoria, category) {
        return function () {
            document.getElementById("ponerInput" + categoria).style.display = "none";
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", "form-control");
            input.setAttribute("id", "textoCategoria" + categoria);
            input.setAttribute("value", categoria);
            document.getElementById("panel" + categoria).appendChild(input);
            document.getElementById("editar" + categoria).style.display = "none";


            var btn1 = document.createElement("button");
            btn1.setAttribute("class", "btn btn-success");
            var span = document.createElement("span");
            span.setAttribute("class", "glyphicon glyphicon-ok");
            btn1.setAttribute("id", "aceptarmodificar" + categoria);
            btn1.appendChild(span);
            document.getElementById("divBttn" + categoria).appendChild(btn1);

            btn1.setAttribute("data-target", "#modifyCategory");
            btn1.setAttribute("data-toggle", "modal");

            document.getElementById("cerrarMdfCat").addEventListener("click", mostrarCategorias(store));

            btn1.addEventListener("click", modificarCategoria(store, categoria, category));

        }
    }

    function agregarCategoria(store) {
        return function () {
            var categoria = document.getElementById("categoriaName").value;
            var categoriaNueva = new Category(categoria);
            store.addCategory(categoriaNueva);
            $("#modalAgregarCat").modal('hide');
            document.getElementById("agregarCat").addEventListener("click", mostrarCategorias(store));

            const categoriaAdd = [
                {title: categoriaNueva.title, productos: []}
            ];

// Open the indexedDB.
            var db;
            var request = indexedDB.open(dbName);

            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var transaction = db.transaction(["Categorias"], "readwrite");
                alert(transaction);
                // Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
                // In case you want to support such an implementation, you can write:
                // var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);


                // Do something when all the data is added to the database.
                transaction.oncomplete = function (event) {
                    alert("All done!");
                };

                transaction.onerror = function (event) {
                    // Don't forget to handle errors!
                    alert("Error en transaction: " + event.target.error);
                };

                var objectStore = transaction.objectStore("Categorias");

                for (var i in categoriaAdd) {
                    var request2 = objectStore.add(categoriaAdd[i]);
                    request2.onsuccess = function (event) {
                        alert(event.target.result);
                        // event.target.result == customerData[i].ssn;
                    };
                }


            };


        }

    }

    function eliminarCategoria(store, categoria) {
        return function () {
            var categoriaBorrar = new Category(categoria);
            store.removeCategory(categoriaBorrar);
            $("#modalAgregarCat").modal('hide');
            document.getElementById("borrarCat").addEventListener("click", mostrarCategorias(store));


            var db;
            var request = indexedDB.open(dbName);

            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var request = db.transaction(["Categorias"], "readwrite")
                    .objectStore("Categorias")
                    .delete(categoriaBorrar.title);

                request.onsuccess = function (event) {
                    alert("Objeto borrado");
                    // It's gone!
                };

                request.onerror = function (event) {
                    alert("Problemas al borrar: " + event.target.error);
                    // It's gone!
                };


            };


        }
    }


    function modificarCategoria(store, categoria, category) {

        return function () {


            //  var category = new Category(categoria);

            console.log(category);

            var nuevoNombre = document.getElementById("textoCategoria" + categoria).value;

            category.title = nuevoNombre;


            var db;
            var request = indexedDB.open(dbName);


            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var objectStore = db.transaction(["Categorias"], "readwrite").objectStore("Categorias");
                var request = objectStore.get(categoria);
                request.onerror = function (event) {
                    // Handle errors!
                };
                request.onsuccess = function (event) {
                    // Get the old value that we want to update
                    var data = request.result;

                    // update the value(s) in the object that you want to change
                    data.title = nuevoNombre;

                    // Put this updated object back into the database.
                    var requestUpdate = objectStore.put(data);
                    requestUpdate.onerror = function (event) {
                        // Do something with the error
                        alert("Error")
                    };
                    requestUpdate.onsuccess = function (event) {
                        // Success - the data is updated!
                        alert("Modificado!")
                    };
                };


            };


        }
        // $("#modalModificarCat").modal('hide');


        //  document.getElementById("cerrarMdfCat").addEventListener("click", mostrarCategorias(store));


    }


    function agregarTienda(store) {
        return function () {

            var cif = document.getElementById("cif").value;
            var name = document.getElementById("shopName").value;
            var imagen = document.getElementById("imagenTienda").value;
            var tienda = new Shop(cif, name);
            tienda.images = imagen;
            store.addShop(tienda);
            $("#modalAgregarTienda").modal('hide');
            initPopulate(store);


            const tiendaAdd = [
                {cif: tienda.cif, name: tienda.name, description: null, image: tienda.images, productos: []}
            ];

// Open the indexedDB.
            var db;
            var request = indexedDB.open(dbName);

            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var transaction = db.transaction(["Tiendas"], "readwrite");
                alert(transaction);
                // Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
                // In case you want to support such an implementation, you can write:
                // var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);


                // Do something when all the data is added to the database.
                transaction.oncomplete = function (event) {
                    alert("All done!");
                };

                transaction.onerror = function (event) {
                    // Don't forget to handle errors!
                    alert("Error en transaction: " + event.target.error);
                };

                var objectStore = transaction.objectStore("Tiendas");

                for (var i in tiendaAdd) {
                    var request2 = objectStore.add(tiendaAdd[i]);
                    request2.onsuccess = function (event) {
                        alert(event.target.result);
                        // event.target.result == customerData[i].ssn;
                    };
                }


            };


        }
    }


    function eliminarTienda(store, tienda) {
        return function () {


            var tien = store.tiendas;
            var shops = tien.next();
            while (shops.done !== true) {

                if (shops.value.cif == "1111") {
                    var defaultShop = shops.value;
                }
                shops = tien.next();
            }


            var defaultShop = new Shop("1111", "Anonymous shop");

            var productos = [];


            var tiendas = store.getShopProducts(tienda);
            var shop = tiendas.next();
            while (shop.done !== true) {

                store.addProductInShop(shop.value.product, defaultShop, shop.value.stock);

                shop = tiendas.next();
            }


            store.removeShop(tienda);
            document.getElementById("borrarTienda").addEventListener("click", initPopulate(store));


            var db;
            var request = indexedDB.open(dbName);

            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };


            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                //
                var objectStore = db.transaction("Tiendas").objectStore("Tiendas");

                objectStore.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        //alert("Name for Cif " + cursor.key + " is " + cursor.value.name);


                        if (cursor.value.cif == tienda.cif) {
                            for (var i in cursor.value.productos) {
                                productos.push({
                                    producto: {
                                        serial: cursor.value.productos[i].producto.serial,
                                        name: cursor.value.productos[i].producto.name,
                                        description: cursor.value.productos[i].producto.description,
                                        image: cursor.value.productos[i].producto.image,
                                        price: cursor.value.productos[i].producto.price,
                                        tipo: cursor.value.productos[i].producto.tipo
                                    },
                                    stock: cursor.value.productos[i].producto.stock
                                });
                            }
                        }

                        cursor.continue();
                    }
                    else {
                        alert("No more entries!");
                    }
                };

                console.log(productos);

                var objectStore2 = db.transaction(["Tiendas"], "readwrite").objectStore("Tiendas");
                var request2 = objectStore2.get("1111");
                request2.onerror = function (event) {
                    // Handle errors!
                };
                request2.onsuccess = function (event) {
                    // Get the old value that we want to update
                    var data2 = request2.result;

                    // update the value(s) in the object that you want to change
                    for (var i in productos) {
                        data2.productos.push(productos[i]);
                    }
                    // Put this updated object back into the database.
                    var requestUpdate = objectStore2.put(data2);
                    requestUpdate.onerror = function (event) {
                        // Do something with the error
                        alert("Error")
                    };
                    requestUpdate.onsuccess = function (event) {
                        // Success - the data is updated!
                        alert("Modificado!")
                    };
                };


                //


                var request = db.transaction(["Tiendas"], "readwrite")
                    .objectStore("Tiendas")
                    .delete(tienda.cif);

                request.onsuccess = function (event) {
                    alert("Objeto borrado");
                    // It's gone!
                };

                request.onerror = function (event) {
                    alert("Problemas al borrar: " + event.target.error);
                    // It's gone!
                };


            };


        }
    }


    function tipoProducto() {
        return function () {
            if (document.getElementById("tipo").value == "dvd") {
                document.getElementById('tipodvd').style.display = "block";
                document.getElementById('tipotv').style.display = "none";
            }
            else if (document.getElementById("tipo").value == "smartphone" || document.getElementById("tipo").value == "tv") {
                document.getElementById('tipotv').style.display = "block";
                document.getElementById('tipodvd').style.display = "none";
            }
        }
    }


    function agregarProducto(store, tienda) {
        return function () {

            var serial = document.getElementById("serial").value;
            var name = document.getElementById("productName").value;
            var precio = document.getElementById("precio").value;
            var imagen = document.getElementById("imagenProducto").value;
            var descripcion = document.getElementById("desc").value;

            var categoria = new Category(document.getElementById("categories").value);


            if (document.getElementById("tipo").value == "dvd") {

                var titulo = document.getElementById("titulo").value;
                var autor = document.getElementById("autor").value;

                var producto = new DVD(titulo, autor, serial, name, precio);
            }

            if (document.getElementById("tipo").value == "smartphone") {

                var modelo = document.getElementById("modelo").value;
                var producto = new Smartphone(modelo, serial, name, precio);

            }

            if (document.getElementById("tipo").value == "tv") {

                var modelo = document.getElementById("modelo").value;
                var producto = new TV(modelo, serial, name, precio);

            }

            producto.images = imagen;
            producto.description = descripcion;

            var stock = document.getElementById("stockp").value;

            store.addProductInShop(producto, tienda, stock);
            store.addProduct(producto, categoria);


            $("#modalAgregarProducto").modal('hide');
            document.getElementById("cerrarProdAdd").addEventListener("click", shopPopulate(store, tienda.name));


            var db;
            var request = indexedDB.open(dbName);


            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var objectStore = db.transaction(["Tiendas"], "readwrite").objectStore("Tiendas");
                var request = objectStore.get(tienda.cif);
                request.onerror = function (event) {
                    // Handle errors!
                };
                request.onsuccess = function (event) {
                    // Get the old value that we want to update
                    var data = request.result;

                    // update the value(s) in the object that you want to change
                    data.productos.push({
                        producto: {
                            serial: producto.serial,
                            name: producto.name,
                            description: producto.description,
                            price: producto.price,
                            tipo: document.getElementById("tipo").value,
                            image: producto.images
                        }, stock: stock
                    });

                    // Put this updated object back into the database.
                    var requestUpdate = objectStore.put(data);
                    requestUpdate.onerror = function (event) {
                        // Do something with the error
                        alert("Error")
                    };
                    requestUpdate.onsuccess = function (event) {
                        // Success - the data is updated!
                        alert("Modificado!")
                    };
                };


                var objectStore2 = db.transaction(["Categorias"], "readwrite").objectStore("Categorias");
                var request2 = objectStore2.get(categoria.title);
                request2.onerror = function (event) {
                    // Handle errors!
                };
                request2.onsuccess = function (event) {
                    // Get the old value that we want to update
                    var data = request2.result;

                    // update the value(s) in the object that you want to change
                    data.productos.push({
                        serial: producto.serial,
                        name: producto.name,
                        description: producto.description,
                        price: producto.price,
                        tipo: document.getElementById("tipo").value,
                        image: producto.images
                    });

                    // Put this updated object back into the database.
                    var requestUpdate = objectStore2.put(data);
                    requestUpdate.onerror = function (event) {
                        // Do something with the error
                        alert("Error")
                    };
                    requestUpdate.onsuccess = function (event) {
                        // Success - the data is updated!
                        alert("Modificado!")
                    };
                };


            };


        }
    }


    function eliminarProducto(store, producto, tienda) {
        return function () {
            var i = store.removeProductInShop(producto, tienda);
            document.getElementById("cerrarProd").addEventListener("click", shopPopulate(store, tienda.name));


            var db;
            var request = indexedDB.open(dbName);


            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var objectStore = db.transaction(["Tiendas"], "readwrite").objectStore("Tiendas");
                var request = objectStore.get(tienda.cif);
                request.onerror = function (event) {
                    // Handle errors!
                };
                request.onsuccess = function (event) {
                    // Get the old value that we want to update
                    var data = request.result;

                    var index = buscarIndiceProducto(data.productos, producto);


                    // update the value(s) in the object that you want to change
                    data.productos.splice(index, 1);

                    // Put this updated object back into the database.
                    var requestUpdate = objectStore.put(data);
                    requestUpdate.onerror = function (event) {
                        // Do something with the error
                        alert("Error")
                    };
                    requestUpdate.onsuccess = function (event) {
                        // Success - the data is updated!
                        alert("Producto eliminado!")
                    };
                };


                /*
                            console.log(producto);
                            console.log(tienda);
                            */
            }
        }
    }

    function buscarIndiceProducto(array, producto) {
        var indice;
        for (var i in array) {
            if (array[i].producto.serial == producto.serial) {
                indice = i;
            }
        }
        return indice;
    }


    function rellenarForm(tienda) {
        return function () {

            document.getElementById("resetear").reset();

            if (document.getElementById("ponerBoton").getElementsByTagName("button")[0]) {
                document.getElementById("ponerBoton").getElementsByTagName("button")[0].remove();
            }

            document.getElementById("cifMdf").setAttribute("value", tienda.cif);
            document.getElementById("cifMdf").disabled = true;
            document.getElementById("shopNameMdf").setAttribute("value", tienda.name);
            document.getElementById("descripcion").setAttribute("value", tienda.description);
            document.getElementById("imagenTiendaMdf").setAttribute("value", tienda.images);
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-default");
            button.setAttribute("id", "shopMdf" + tienda.name);
            button.setAttribute("data-target", "#tiendaModificada");
            button.setAttribute("data-toggle", "modal");
            button.appendChild(document.createTextNode("Modificar"));
            document.getElementById("ponerBoton").appendChild(button);
            button.addEventListener("click", modificarTienda(tienda));

        }
    }

    function modificarTienda(tienda) {
        return function () {

            tienda.name = document.getElementById("shopNameMdf").value;
            tienda.description = document.getElementById("descripcion").value;
            tienda.images[0] = document.getElementById("imagenTiendaMdf").value;
            $("#modalModificarTienda").modal('hide');
            document.getElementById("cerrarMdfShop").addEventListener("click", homeEvent(store));


            var db;
            var request = indexedDB.open(dbName);


            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };

                var objectStore = db.transaction(["Tiendas"], "readwrite").objectStore("Tiendas");
                var request = objectStore.get(tienda.cif);
                request.onerror = function (event) {
                    // Handle errors!
                };
                request.onsuccess = function (event) {
                    // Get the old value that we want to update
                    var data = request.result;

                    // update the value(s) in the object that you want to change
                    data.name = tienda.name;
                    data.image = tienda.images;
                    data.description = tienda.description;

                    // Put this updated object back into the database.
                    var requestUpdate = objectStore.put(data);
                    requestUpdate.onerror = function (event) {
                        // Do something with the error
                        alert("Error")
                    };
                    requestUpdate.onsuccess = function (event) {
                        // Success - the data is updated!
                        alert("Modificado!")
                    };
                };


            };


        }
    }

    function rellenarFormStock(tienda) {
        return function () {

            document.getElementById("reset").reset();

            if (document.getElementById("ponerBtn").getElementsByTagName("button")[0]) {
                document.getElementById("ponerBtn").getElementsByTagName("button")[0].remove();


            }

            document.getElementById("productsName").setAttribute("value", tienda.value.product.name);
            document.getElementById("productsName").disabled = true;
            document.getElementById("pstock").setAttribute("value", tienda.value.stock);

            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-default");
            button.setAttribute("id", "stockMdf" + tienda.value.product.name);
            button.setAttribute("data-target", "#stockMod");
            button.setAttribute("data-toggle", "modal");
            button.appendChild(document.createTextNode("Modificar stock"));
            document.getElementById("ponerBtn").appendChild(button);
            button.addEventListener("click", modificarStock(tienda.value));


        }
    }

    function modificarStock(tienda) {
        return function () {

            tienda.stock = document.getElementById("pstock").value;

            console.log(tienda);

            $("#modificarStock").modal('hide');
            document.getElementById("cerrarStockMod").addEventListener("click", homeEvent(store));
        }
    }


    function abrirBaseDatos() {

        var db;
        var request = indexedDB.open(dbName, 1);


        const categoryData = [];
        var arrayProductos = [];

        var categories = store.categorias;
        var category = categories.next();
        while (category.done !== true) {
            //Category: title

            var productos = store.getCategoryProducts(category.value);

            var product = productos.next();
            while (product.done !== true) {

                arrayProductos.push({
                    serial: product.value.serial,
                    name: product.value.name,
                    description: product.value.description,
                    price: product.value.price,
                    image: product.value.images
                });

                product = productos.next();
            }


            categoryData.push({title: category.value.title, productos: arrayProductos});


            category = categories.next();
        }

        const shopData = [];
        var productos = [];

        var tiendas = store.tiendas;
        var shop = tiendas.next();
        while (shop.done !== true) {
            //Category: title

            var tn = store.getShopProducts(shop.value);
            var sp = tn.next();
            while (sp.done !== true) {


                //  console.log("Producto: " + sp.value.product.name + ", stock: " + sp.value.stock);

                productos.push({
                    producto: {
                        serial: sp.value.product.serial,
                        name: sp.value.product.name,
                        description: sp.value.product.description,
                        price: sp.value.product.price,
                        image: sp.value.product.images
                    }, stock: sp.value.stock
                });

                sp = tn.next();
            }

            shopData.push({
                cif: shop.value.cif,
                name: shop.value.name,
                image: shop.value.images,
                description: shop.value.description,
                productos: productos
            });

            productos = [];

            shop = tiendas.next();
        }


        request.onerror = function (event) {
            alert("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            alert("request.onsuccess");
            db = request.result;
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                alert("Database error: " + event.target.errorCode);
            };


            var objectStore = db.transaction("Tiendas").objectStore("Tiendas");

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    //alert("Name for Cif " + cursor.key + " is " + cursor.value.name);

                    var shop = new Shop(cursor.value.cif, cursor.value.name);
                    shop.images = cursor.value.image;


                    if (store.ShopPosition(shop) == -1) {
                        store.addShop(shop);
                    }


                    cursor.continue();
                }
                else {
                    alert("No more entries!");
                }
            };


            var objectStore = db.transaction("Categorias").objectStore("Categorias");

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    //alert("Name for Cif " + cursor.key + " is " + cursor.value.name);

                    var category = new Category(cursor.value.title);

                    if (store.CategoryPosition(category) == -1) {
                        store.addCategory(category);
                    }


                    cursor.continue();
                }
                else {
                    alert("No more entries!");
                }
            };

            var objectStore = db.transaction("Tiendas").objectStore("Tiendas");

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    //alert("Name for Cif " + cursor.key + " is " + cursor.value.name);

                    var sp = new Shop(cursor.value.cif, cursor.value.name);

                    for (var i in cursor.value.productos) {

                        // var producto = new Product(cursor.value.productos[i].serial,cursor.value.productos[i].name,cursor.value.productos[i].price)

                        if (cursor.value.productos[i].producto.tipo == "dvd") {
                            var producto = new DVD(cursor.value.productos[i].producto.title, cursor.value.productos[i].producto.autor, cursor.value.productos[i].producto.serial, cursor.value.productos[i].producto.name, cursor.value.productos[i].producto.price);
                        }
                        if (cursor.value.productos[i].producto.tipo == "smartphone") {
                            var producto = new Smartphone(cursor.value.productos[i].producto.modelo, cursor.value.productos[i].producto.serial, cursor.value.productos[i].producto.name, cursor.value.productos[i].producto.price);
                        }
                        if (cursor.value.productos[i].producto.tipo == "tv") {
                            var producto = new TV(cursor.value.productos[i].producto.modelo, cursor.value.productos[i].producto.serial, cursor.value.productos[i].producto.name, cursor.value.productos[i].producto.price);
                        }


                        producto.images = cursor.value.productos[i].producto.image;

                        //console.log(cursor.value.productos[i].stock);


                        //store.addProductInShop(producto, sp, cursor.value.productos[i].stock);
                    }


                    cursor.continue();
                }
                else {
                    alert("No more entries!");
                }
            };

            var objectStore = db.transaction("Categorias").objectStore("Categorias");

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    //alert("Name for Cif " + cursor.key + " is " + cursor.value.name);

                    var category = new Category(cursor.value.title);

                    for (var i in cursor.value.productos) {

                        // var producto = new Product(cursor.value.productos[i].serial,cursor.value.productos[i].name,cursor.value.productos[i].price)

                        if (cursor.value.productos[i].tipo == "dvd") {
                            var producto = new DVD(cursor.value.productos[i].title, cursor.value.productos[i].autor, cursor.value.productos[i].serial, cursor.value.productos[i].name, cursor.value.productos[i].price);
                        }
                        if (cursor.value.productos[i].tipo == "smartphone") {
                            var producto = new Smartphone(cursor.value.productos[i].modelo, cursor.value.productos[i].serial, cursor.value.productos[i].name, cursor.value.productos[i].price);
                        }

                        if (cursor.value.productos[i].tipo == "tv") {
                            var producto = new TV(cursor.value.productos[i].modelo, cursor.value.productos[i].serial, cursor.value.productos[i].name, cursor.value.productos[i].price);
                        }


                        producto.images = cursor.value.productos[i].image;

                        //console.log(cursor.value.productos[i].stock);


                        // store.addProduct(producto, category);

                    }


                    cursor.continue();
                }
                else {
                    alert("No more entries!");
                }
            };


        };

        // This event is only implemented in recent browsers
        request.onupgradeneeded = function (event) {
            alert(event.target.result);
            db = event.target.result;


            alert("request.onupgradeneeded");
            var db = event.target.result;

            // Create an objectStore to hold information about our customers. We're
            // going to use "ssn" as our key path because it's guaranteed to be
            // unique.

            //Para las categorias
            var objectStore = db.createObjectStore("Categorias", {keyPath: "title"});

            // Create an index to search customers by email. We want to ensure that
            // no two customers have the same email, so use a unique index.
            objectStore.createIndex("title", "title", {unique: true});

            // Use transaction oncomplete to make sure the objectStore creation is
            // finished before adding data into it.
            // Store values in the newly created objectStore.

            var objectStore2 = db.createObjectStore("Tiendas", {keyPath: "cif"});
            objectStore2.createIndex("cif", "cif", {unique: true});

            objectStore.transaction.oncomplete = function () {

                var categoryObjectStore = db.transaction("Categorias", "readwrite").objectStore("Categorias");
                for (var i in categoryData) {
                    categoryObjectStore.add(categoryData[i]);
                }
                var shopObjectStore = db.transaction("Tiendas", "readwrite").objectStore("Tiendas");
                for (var i in shopData) {
                    shopObjectStore.add(shopData[i]);
                }

                console.log(shopObjectStore);
                console.log("eee");
            };

        }
    }


    function JSon() {


        var db;
        var request = indexedDB.open(dbName, 1);

        var categoris = [];
        var tiendas = [];

        request.onerror = function (event) {
            alert("Why didn't you allow my web app to use IndexedDB?!");
        };

        request.onsuccess = function (event) {
            db = event.target.result;
            db.onerror = function (event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                alert("Database error: " + event.target.error);
            };


            var objectStore = db.transaction("Categorias").objectStore("Categorias");

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    alert("Name for" + cursor.key + " is " + cursor.value.title);


                    var productos = [];

                    for (var i in cursor.value.productos) {

                        productos.push({
                            producto: {
                                serial: cursor.value.productos[i].serial,
                                name: cursor.value.productos[i].name,
                                description: cursor.value.productos[i].description,
                                price: cursor.value.productos[i].price,
                                image: cursor.value.productos[i].image,
                                tipo: cursor.value.productos[i].tipo
                            }
                        })

                    }

                    categoris.push({category: {title: cursor.value.title, productos: productos}});

                    cursor.continue();
                }
                else {
                    alert("No more entries!");
                }
            };


            var objectStore = db.transaction("Tiendas").objectStore("Tiendas");

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    alert("Name for" + cursor.key + " is " + cursor.value.cif);

                    var productos = [];

                    for (var i in cursor.value.productos) {


                        productos.push({
                            producto: {
                                serial: cursor.value.productos[i].producto.serial,
                                name: cursor.value.productos[i].producto.name,
                                description: cursor.value.productos[i].producto.description,
                                price: cursor.value.productos[i].producto.price,
                                image: cursor.value.productos[i].producto.image,
                                tipo: cursor.value.productos[i].producto.tipo
                            }, stock: cursor.value.productos[i].stock
                        })
                    }


                    tiendas.push({
                        shop: {
                            cif: cursor.value.cif,
                            name: cursor.value.name,
                            description: cursor.value.description,
                            image: cursor.value.image,
                            productos: productos
                        }
                    });


                    cursor.continue();
                }


                else {
                    alert("No more entries!");

                    var Json = {"categorias": categoris, "tiendas": tiendas};

                    var myJSON = JSON.stringify(Json);

                    console.log(myJSON);

                    var xhttp = new XMLHttpRequest();
                    xhttp.open("POST", "json.php", true);
                    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhttp.send("Json=" + myJSON);

                }

            }
        };
    };


    function cargarJson() {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                // console.log(myArr);


                var categorias = myArr.categorias;
                var tiendas = myArr.tiendas;

                console.log(categorias);

                for (var i in categorias) {
                    if (categorias[i].category.title != "Anonymous category") {
                        var cat = new Category(categorias[i].category.title);

                        store.addCategory(cat);


                        for (var j in categorias[i].category.productos) {
                            if (categorias[i].category.productos[j].producto.tipo == "dvd") {
                                var producto = new DVD(categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.serial, categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.price);
                                producto.images = categorias[i].category.productos[j].producto.image;
                                store.addProduct(producto, cat);
                            }

                            if (categorias[i].category.productos[j].producto.tipo == "smartphone") {
                                var producto = new Smartphone(categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.serial, categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.price);
                                producto.images = categorias[i].category.productos[j].producto.image;
                                store.addProduct(producto, cat);
                            }

                            if (categorias[i].category.productos[j].producto.tipo == "tv") {
                                var producto = new TV(categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.serial, categorias[i].category.productos[j].producto.name, categorias[i].category.productos[j].producto.price);
                                producto.images = categorias[i].category.productos[j].producto.image;
                                store.addProduct(producto, cat);
                            }


                        }

                    }


                }

                for (var i in tiendas) {

                    if (tiendas[i].shop.cif != "1111") {
                        var shop = new Shop(tiendas[i].shop.cif, tiendas[i].shop.name);

                        shop.images = tiendas[i].shop.image[0];

                        store.addShop(shop);


                        for (var j in tiendas[i].shop.productos) {
                            if (tiendas[i].shop.productos[j].producto.tipo == "dvd") {
                                var producto = new DVD(tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.serial, tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.price);
                                producto.images = tiendas[i].shop.productos[j].producto.image;
                                producto.description = tiendas[i].shop.productos[j].producto.description;
                                store.addProductInShop(producto, shop, tiendas[i].shop.productos[j].stock);
                            }

                            if (tiendas[i].shop.productos[j].producto.tipo == "smartphone") {
                                var producto = new Smartphone(tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.serial, tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.price);
                                producto.images = tiendas[i].shop.productos[j].producto.image;
                                producto.description = tiendas[i].shop.productos[j].producto.description;
                                store.addProductInShop(producto, shop, tiendas[i].shop.productos[j].stock);
                            }

                            if (tiendas[i].shop.productos[j].producto.tipo == "tv") {
                                var producto = new TV(tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.serial, tiendas[i].shop.productos[j].producto.name, tiendas[i].shop.productos[j].producto.price);
                                producto.images = tiendas[i].shop.productos[j].producto.image;
                                producto.description = tiendas[i].shop.productos[j].producto.description;
                                store.addProductInShop(producto, shop, tiendas[i].shop.productos[j].stock);
                            }


                        }


                    }

                }


                console.log(tiendas);

            }
        };
        xmlhttp.open("GET", "backup.json", true);
        xmlhttp.send();

    }


    function crearJSON() {

        return function () {


            var db;
            var request = indexedDB.open(dbName, 1);

            var categoris = [];
            var tiendas = [];

            request.onerror = function (event) {
                alert("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                db.onerror = function (event) {
                    // Generic error handler for all errors targeted at this database's
                    // requests!
                    alert("Database error: " + event.target.error);
                };


                var objectStore = db.transaction("Categorias").objectStore("Categorias");

                objectStore.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        alert("Name for" + cursor.key + " is " + cursor.value.title);


                        var productos = [];

                        for (var i in cursor.value.productos) {

                            productos.push({
                                producto: {
                                    serial: cursor.value.productos[i].serial,
                                    name: cursor.value.productos[i].name,
                                    description: cursor.value.productos[i].description,
                                    price: cursor.value.productos[i].price,
                                    image: cursor.value.productos[i].image,
                                    tipo: cursor.value.productos[i].tipo
                                }
                            })

                        }

                        categoris.push({category: {title: cursor.value.title, productos: productos}});

                        cursor.continue();
                    }
                    else {
                        alert("No more entries!");
                    }
                };


                var objectStore = db.transaction("Tiendas").objectStore("Tiendas");

                objectStore.openCursor().onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        alert("Name for" + cursor.key + " is " + cursor.value.cif);

                        var productos = [];

                        for (var i in cursor.value.productos) {


                            productos.push({
                                producto: {
                                    serial: cursor.value.productos[i].producto.serial,
                                    name: cursor.value.productos[i].producto.name,
                                    description: cursor.value.productos[i].producto.description,
                                    price: cursor.value.productos[i].producto.price,
                                    image: cursor.value.productos[i].producto.image,
                                    tipo: cursor.value.productos[i].producto.tipo
                                }, stock: cursor.value.productos[i].stock
                            })
                        }


                        tiendas.push({
                            shop: {
                                cif: cursor.value.cif,
                                name: cursor.value.name,
                                description: cursor.value.description,
                                image: cursor.value.image,
                                productos: productos
                            }
                        });


                        cursor.continue();
                    }


                    else {
                        alert("No more entries!");

                        var Json = {"categorias": categoris, "tiendas": tiendas};

                        var myJSON = JSON.stringify(Json);

                        console.log("hey");

                        var xhttp = new XMLHttpRequest();
                        xhttp.open("POST", "crearJsonUser.php", true);
                        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhttp.send("Json=" + myJSON + "&User=prueba"); //En este caso como solo tenemos el usuario prueba no hacen falta poner mas

                    }

                }
            };
        };
    }


}

window.onload = init;
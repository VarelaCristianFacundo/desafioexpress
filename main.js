const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.txt");

const main = async () => {
    const id1 = await contenedor.save({
        title: "remera",
        price: 1000
    });
    const id2 = await contenedor.save({
        title: "medias",
        price: 500
    });
    const id3 = await contenedor.save({
        title: "pantalon",
        price: 5000
    });

    console.log(id1, id2, id3);

    // contenedor.deleteAll();
    const object2 = await contenedor.getById(2);
    
    console.log(object2); 

    await contenedor.deleteById(2);

    const allCurrentObjects = await contenedor.getAll();
    console.log(allCurrentObjects);


};

main();
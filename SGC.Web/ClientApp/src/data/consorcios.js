
function createData(id, nombre, direccion, tipo) {
    return {
        id,
        nombre,
        direccion,
        tipo,
    };
}

export const consorciosMoqup = [
    createData(1, 'Sant James', 'Marcos Paz 697', 'Edificio'),
    createData(2, 'Genetrix', 'Marcos Paz 837', 'Edificio'),
    createData(3, 'One Boulevard', 'Av. Salta 560', 'Edificio'),
    createData(4, 'One', 'Virgen de la Merced 628', 'Edificio'),
    createData(5, 'Pinar 1', 'Av Constitucion 2200', 'Barrio Cerrado'),
    createData(6, 'Jockey Club', 'Cont. Bascary s/n, Av Perón', 'Barrio Cerrado'),
    createData(7, 'Las Yungas', 'Camino del Sirga y Mendoza', 'Barrio Cerrado'),
];
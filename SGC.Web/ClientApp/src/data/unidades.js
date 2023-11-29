
function createData(id, codigo, porcentaje, grupo) {
    return {
        id,
        codigo,
        porcentaje,
        grupo,
    };
}

export const unidadesMoqup = [
    createData(1, '1A', 2, 1),
    createData(2, '1B', 2, 1),
    createData(3, '1C', 5, 1),
    createData(4, '1D', 5, 1),
    createData(5, '2A', 2, 1),
    createData(6, '2B', 2, 1),
    createData(7, '2C', 5, 1),
];
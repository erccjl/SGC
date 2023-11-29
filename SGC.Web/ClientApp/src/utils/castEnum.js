export const getConsorcioTipoNombre = (value) => {
    switch (value) {
        case 1: return 'Edificio';
        case 2: return 'Barrio Privado';
        default: return 'Desconocido';
    }
}

export const getUnidadGrupoNombre = (value) => {
    switch (value) {
        case 1: return 'Piso';
        case 2: return 'Manzana';
        default: return 'Desconocido';
    }
}

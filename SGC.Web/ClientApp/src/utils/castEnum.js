export const getConsorcioTipoNombre = (value) => {
    switch (value) {
        case 1: return 'Edificio';
        case 2: return 'Barrio Privado';
        default: return 'Desconocido';
    }
}

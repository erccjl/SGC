import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const consorcioValidationSchema = () => {
    return yupResolver(Yup.object().shape({
        nombre: Yup.string()
            .required('El campo es obligatorio'),
        descripcion: Yup.string(),
        direccion: Yup.string()
            .required('El campo es obligatorio'),
        tipo: Yup.number()
            .required('El campo es obligatorio')
    }));
}

export const unidadValidationSchema = () => {
    return yupResolver(Yup.object().shape({
        codigo: Yup.string()
            .required('El campo es obligatorio'),
        porcentaje: Yup.number()
            .transform((value) => Number.isNaN(value) ? null : value)
            .typeError('El campo debe ser un número')
            .required('El campo es obligatorio')
            .min(0, 'Valor minimo 0')
            .max(100, 'Valor máximo 100'),
    }));
}

export const personaValidationSchema = () => {
    return yupResolver(Yup.object().shape({
        email: Yup.string()
            .email('Formato invalido'),
        celular: Yup.string(),
        telefono: Yup.string(),
        tipoPersona: Yup.boolean()
            .required('El campo es obligatorio'),

        //Persona Jurídica
        razonSocial: Yup.string()
            .when('tipoPersona', (tipoPersona, schema) => {
                if (!tipoPersona[0])
                    return schema.required('El campo es obligatorio');
                return schema;
            }),
        cuit: Yup.string()
            .when('tipoPersona', (tipoPersona, schema) => {
                if (!tipoPersona[0])
                    return schema.required('El campo es obligatorio');
                return schema;
            }),

        //Persona Humana
        nombre: Yup.string()
            .when('tipoPersona', (tipoPersona, schema) => {
                if (tipoPersona[0])
                    return schema.required('El campo es obligatorio');
                return schema;
            }),
        apellido: Yup.string()
            .when('tipoPersona', (tipoPersona, schema) => {
                if (tipoPersona[0])
                    return schema.required('El campo es obligatorio');
                return schema;
            }),
        documento: Yup.string()
            .when('tipoPersona', (tipoPersona, schema) => {
                if (tipoPersona[0])
                    return schema.required('El campo es obligatorio');
                return schema;
            }),
        fechaNacimiento: Yup.date()
            .when('tipoPersona', (tipoPersona, schema) => {
                if (tipoPersona[0])
                    return schema.required('El campo es obligatorio')
                return schema
            }),
    }));
}
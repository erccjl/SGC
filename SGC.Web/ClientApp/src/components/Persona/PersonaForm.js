import { useTheme } from '@emotion/react';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const persona = {
    email: '',
    celular: '',
    telefono: '',
    tipoPersona: 'true',
    razonSocial: '',
    cuit: '',
    nombre: '',
    apellido: '',
    documento: '',
    fechaNacimiento: null,
}

export const PersonaForm = ({ handleSave, handleCancel }) => {
    const theme = useTheme();

    const validationSchema = Yup.object().shape({
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
    });

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: persona
    });

    const PersonaHumana = () => {
        return (<>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    key={'nombre'}
                    variant="outlined"
                    fullWidth
                    id='nombre'
                    name='nombre'
                    label='Nombre'
                    error={!!errors.nombre}
                    {...register('nombre')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.nombre?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    key={'apellido'}
                    variant="outlined"
                    fullWidth
                    id='apellido'
                    name='apellido'
                    label='Apellido'
                    error={!!errors.apellido}
                    {...register('apellido')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.apellido?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    key={'documento'}
                    variant="outlined"
                    fullWidth
                    id='documento'
                    name='documento'
                    label='Documento'
                    error={!!errors.documento}
                    {...register('documento')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.documento?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Controller
                    control={control}
                    name='fechaNacimiento'
                    render={({ field: { ref, onBlur, name, ...field } }) => (
                        <DatePicker
                            {...field}
                            label='Fecha Nacimiento'
                            onChange={(date) => field.onChange(date)}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    error: !!errors.fechaNacimiento,
                                    margin: 'dense'
                                }
                            }}
                        />
                    )}
                />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.fechaNacimiento?.message}
                </Typography>
            </Grid>
        </>);
    }

    const PersonaJuridica = () => {
        return (<>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    key={'razonSocial'}
                    variant="outlined"
                    fullWidth
                    id='razonSocial'
                    name='razonSocial'
                    label='Razón Social'
                    error={!!errors.razonSocial}
                    {...register('razonSocial')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.razonSocial?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    key={'cuit'}
                    variant="outlined"
                    fullWidth
                    id='cuit'
                    name='cuit'
                    label='CUIT'
                    error={!!errors.cuit}
                    {...register('cuit')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.cuit?.message}
                </Typography>
            </Grid>
        </>);
    }

    const onSubmit = data => {
        handleSave(data);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h6" margin="dense">
                    Nueva Persona
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <FormControl>
                    <FormLabel>Tipo Persona</FormLabel>
                    <Controller
                        control={control}
                        name='tipoPersona'
                        render={({ field }) => (
                            <RadioGroup row {...field}>
                                <FormControlLabel value={true} control={<Radio />} label='Humana' />
                                <FormControlLabel value={false} control={<Radio />} label='Jurídica' />
                            </RadioGroup>
                        )}
                    />
                </FormControl>
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.tipoPersona?.message}
                </Typography>
            </Grid>

            {
                watch('tipoPersona') === 'true'
                    ? PersonaHumana()
                    : PersonaJuridica()
            }

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    id='email'
                    name='email'
                    label='Email'
                    error={!!errors.email}
                    {...register('email')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.email?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    id='celular'
                    name='celular'
                    label='Celular'
                    error={!!errors.celular}
                    {...register('celular')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.celular?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    id='telefono'
                    name='telefono'
                    label='Teléfono'
                    error={!!errors.telefono}
                    {...register('telefono')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.telefono?.message}
                </Typography>
            </Grid>

            <Grid item sm={12} xs={12} md={12} lg={12}>
                <Grid container spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item>
                        <Button variant="contained"
                            color='error'
                            onClick={x => handleCancel()}
                            startIcon={<CancelIcon />}>
                            Cancelar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"
                            color="primary"
                            onClick={handleSubmit(onSubmit)}
                            startIcon={<SaveIcon />}>
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
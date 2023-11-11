import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ConsorcioForm = () => {
    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El campo es obligatorio'),
        descripcion: Yup.string()
            .required('El campo es obligatorio')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
        direccion: Yup.string()
            .required('El campo es obligatorio'),
        tipo: Yup.number()
            .required('El campo es obligatorio')
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (<>
        <Typography variant="h6" align="center" margin="dense">
            Formulario de Consorcios
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    required
                    id='nombre'
                    name='nombre'
                    label='Nombre'
                    error={errors.nombre ? true : false}
                    {...register('nombre')}
                    margin='dense' />
                <Typography variant='inherit' color='textSecundary'>
                    {errors.nombre?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    required
                    id='descripcion'
                    name='descripcion'
                    label='Descripción'
                    error={errors.descripcion ? true : false}
                    {...register('descripcion')}
                    margin='dense' />
                <Typography variant='inherit' color='red'>
                    {errors.descripcion?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    required
                    id='direccion'
                    name='direccion'
                    label='Dirección'
                    error={errors.direccion ? true : false}
                    {...register('direccion')}
                    margin='dense' />
                <Typography variant='inherit' color='textSecundary'>
                    {errors.direccion?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <FormControl>
                    <FormLabel>Tipo</FormLabel>
                    <Controller
                        control={control}
                        name='tipo'
                        render={({ field }) => (
                            <RadioGroup row {...field}>
                                <FormControlLabel value={0} control={<Radio />} label='Edificio' />
                                <FormControlLabel value={1} control={<Radio />} label='Barrio Cerrado' />
                            </RadioGroup>
                        )}
                    />
                </FormControl>
                <Typography variant='inherit' color='textSecundary'>
                    {errors.tipo?.message}
                </Typography>
            </Grid>

            <Grid item sm={12} xs={12} md={12} lg={12}>
                <Button variant="outlined"
                    color='primary'
                    onClick={handleSubmit(onSubmit)}>
                    Registrar
                </Button>
            </Grid>
        </Grid>
    </>);
}

export default ConsorcioForm;
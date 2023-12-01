import { Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTheme } from '@emotion/react';
import { TextArea } from '../TextArea';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

const ConsorcioForm = ({ consorcio, handleSave, handleCancel }) => {
    const theme = useTheme();

    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El campo es obligatorio'),
        descripcion: Yup.string(),
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
        resolver: yupResolver(validationSchema),
        defaultValues: consorcio
    });

    const onSubmit = data => {
        handleSave(data)
    }

    return (<>
        <Typography variant="h6" margin="dense">
            Nuevo Consorcio
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    required
                    id='nombre'
                    name='nombre'
                    label='Nombre'
                    error={errors.nombre ? true : false}
                    {...register('nombre')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.nombre?.message}
                </Typography>
            </Grid>
            <Divider />

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    id='descripcion'
                    name='descripcion'
                    label='Descripción'
                    error={errors.descripcion ? true : false}
                    {...register('descripcion')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.descripcion?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    required
                    id='direccion'
                    name='direccion'
                    label='Dirección'
                    error={errors.direccion ? true : false}
                    {...register('direccion')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
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
                                <FormControlLabel value={1} control={<Radio />} label='Edificio' />
                                <FormControlLabel value={2} control={<Radio />} label='Barrio Cerrado' />
                            </RadioGroup>
                        )}
                    />
                </FormControl>
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.tipo?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormLabel>Encabezado</FormLabel>
                <TextArea control={control} fieldName='encabezado' />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormLabel>Contenido</FormLabel>
                <TextArea control={control} fieldName='contenido' />
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
    </>);
}

export default ConsorcioForm;
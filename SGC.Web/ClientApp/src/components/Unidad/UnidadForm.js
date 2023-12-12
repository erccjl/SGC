import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import { unidadValidationSchema } from '../../validations/validations';

export const UnidadForm = (props) => {
    const { unidad, handleSave, handleCancel } = props;
    const theme = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: unidadValidationSchema(),
        defaultValues: unidad
    });

    const onSubmit = data => {
        handleSave(data)
    }

    return (<>
        <Typography variant="h6" margin="dense">
            Unidad
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    required
                    id='codigo'
                    name='codigo'
                    label='Código'
                    error={errors.codigo ? true : false}
                    {...register('codigo')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.codigo?.message}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
                <TextField
                    variant="outlined"
                    fullWidth
                    required
                    id='porcentaje'
                    name='porcentaje'
                    label='Porcentaje'
                    error={errors.porcentaje ? true : false}
                    {...register('porcentaje')}
                    margin='dense' />
                <Typography variant='inherit' color={theme.palette.error.main}>
                    {errors.porcentaje?.message}
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
    </>
    );
}

UnidadForm.propTypes = {
    unidad: PropTypes.object.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};

import { IconButton, Paper, TableCell, TableRow, Tooltip } from '@mui/material';
import { getUnidadGrupoNombre } from '../../utils/castEnum';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { CustomTable } from '../Table/CustomTable';
import { styled } from '@mui/material/styles';

const headCells = [
    {
        id: 'codigo',
        numeric: false,
        disablePadding: false,
        label: 'Código',
    },
    {
        id: 'porcenje',
        numeric: false,
        disablePadding: false,
        label: 'Porcentaje',
    },
    {
        id: 'grupo',
        numeric: false,
        disablePadding: false,
        label: 'Grupo',
    },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const UnidadTable = (props) => {
    const { unidades, handleEdit, handleRemove } = props;

    const getRow = (row) => {
        return (
            <StyledTableRow
                tabIndex={-1}
                key={row.id}
            >
                <TableCell padding="normal"> {row.codigo}</TableCell>
                <TableCell>{row.porcentaje}</TableCell>
                <TableCell>{getUnidadGrupoNombre(row.grupo)}</TableCell>
                <TableCell>
                    <Tooltip title='Editar' placement="top">
                        <IconButton onClick={e => handleEdit(row.id)}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Eliminar' placement="top">
                        <IconButton onClick={e => handleRemove(row.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </StyledTableRow>
        );
    }

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <CustomTable items={unidades} getRow={getRow} headCells={headCells} />
        </Paper>
    );
}

UnidadTable.propTypes = {
    unidades: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};

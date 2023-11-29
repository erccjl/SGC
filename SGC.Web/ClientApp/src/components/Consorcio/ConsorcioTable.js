import Paper from '@mui/material/Paper';
import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPoint from '@mui/icons-material/ControlPoint';
import { getConsorcioTipoNombre } from '../../utils/castEnum';
import { CustomTable } from '../Table/CustomTable';
import { styled } from '@mui/material/styles';

const headCells = [
    {
        id: 'nombre',
        numeric: false,
        disablePadding: false,
        label: 'Nombre',
    },
    {
        id: 'direccion',
        numeric: false,
        disablePadding: false,
        label: 'Dirección',
    },
    {
        id: 'tipo',
        numeric: false,
        disablePadding: false,
        label: 'Tipo',
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

export default function ConsorcioTable({ consorcios, handleEdit, handleRemove, handleAddUnits }) {

    const getRow = (row) => {
        return (
            <StyledTableRow
                tabIndex={-1}
                key={row.id}
            >
                <TableCell padding="normal"> {row.nombre}</TableCell>
                <TableCell>{row.direccion}</TableCell>
                <TableCell>{getConsorcioTipoNombre(row.tipo)}</TableCell>
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
                    <Tooltip title='Agregar Unidades' placement="top">
                        <IconButton onClick={e => handleAddUnits(row.id)}>
                            <ControlPoint />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </StyledTableRow>
        );
    }

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <CustomTable items={consorcios} getRow={getRow} headCells={headCells} />
        </Paper>
    );
}
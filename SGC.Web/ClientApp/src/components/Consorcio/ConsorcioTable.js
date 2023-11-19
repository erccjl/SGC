import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip } from '@mui/material';
import { useState, useMemo } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPoint from '@mui/icons-material/ControlPoint';
import { getComparator, stableSort } from '../../utils/orderList';
import { getConsorcioTipoNombre } from '../../utils/castEnum';

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

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell>
                    Acciones
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default function ConsorcioTable({ consorcios, handleEdit, handleRemove, handleAddUnits }) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('nombre');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = useMemo(
        () =>
            stableSort(consorcios, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [consorcios, order, orderBy, page, rowsPerPage],
    );

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table
                    sx={{ minWidth: 700 }}
                    aria-labelledby="tableTitle"
                    size='medium'
                >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {visibleRows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={row.id}
                                    sx={{ cursor: 'pointer' }}
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
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={consorcios.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
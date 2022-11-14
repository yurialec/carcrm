import React from 'react';
import { changeNotify } from '../../store/actions/notify.action';
import { Snackbar, SnackbarContent } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { green, red } from '@mui/material/colors';
import notifyReducer from '../../store/reducers/notify.reducer';

const useStyles = makeStyles({
    success: {
        background: green[500]
    },
    error: {
        background: red[600]
    }
})

export default function Notify() {
    const dispatch = useDispatch();
    const notify = useSelector(state => notifyReducer);
    const classes = useStyles();
    return (
        <Snackbar
            anchorOrigin={{
                horizontal: notify.horizontal,
                vertical: notify.vertical
            }}
            open={notify.open}
            autoHideDuration={notify.time}
            onClose={() => dispatch(changeNotify({ open: false }))}
        >
            <SnackbarContent
                className={classes[notify.class] + 'd-flex justify-content-center'}
                message={<span className='d-flex align-items-center'>{notify.msg}</span>}
            />
        </Snackbar>
    )
}

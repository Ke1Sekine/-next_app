import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
// import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

function gen(value, index) {
    return (
        <Chip key={index} color="primary" label={value} />
    );
}

export default function Chips({items}) {
    const classes = useStyles();
    const chips = items.map((item ,index) =>{
        return gen(item.value, index)
    });
    return (
        // <div>
        <div className={classes.root}>
            {chips}
        </div>
    );
}
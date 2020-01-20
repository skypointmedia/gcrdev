import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: 100,
        },
        formControl: {
            margin: theme.spacing(0),
            minWidth: 100,
        },
        Select: {
            width: 100,
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.findingContainer}>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField label="Finding" multiline />

                <TextField label="location" multiline />

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Status</InputLabel>
                    <Select native defaultValue="" input={<Input id="grouped-native-select" />}>
                        <option value={1}>Resolving</option>
                        <option value={2}>Stable</option>
                        <option value={3}>Worsening</option>
                    </Select>
                </FormControl>

            </form>
        </div>
    );
}
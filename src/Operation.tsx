import React from 'react';
import { Button, Grid } from '@mui/material';
import {styled} from '@mui/material';

interface OperationProps {
    operation: string;
    selectOp: (operation:string) => void;
    opSelected: string;
}

const StyleButton = styled(Button)<{selected: boolean}>((props)=> ({
    backgroundColor: "rgb(254,241,73,.1)",
    borderColor: props.selected ? "#fff" : "rgba(255,241,73,0.5)",
}));

export const GridOpButton: React.FC<OperationProps> = ({
    operation,
    selectOp,
    opSelected,
}) => {
    return(
        <Grid item xs={3}>
            <StyleButton 
            fullWidth variant="outlined" 
            onClick={() => selectOp(operation)}
            selected={opSelected===operation}>
                {operation}
            </StyleButton>   
        </Grid>
    )
}
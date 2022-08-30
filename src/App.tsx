import React from 'react';
import theme from './theme';
import {Button, Container, Grid, Paper, styled} from '@mui/material';
import {useState} from 'react';
import {GridOpButton} from './Operation'
import {GridButton} from './Button'

const OutputContainer = styled('div')(({ theme})=> ({ 
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden"
}));

const CalculatorBase = styled(Paper)(({ theme})=> ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: 15
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");

  const selectOperation = (operation:string) => {
    setOperation(operation)
  }

  const setDigit = (digit:string) => {
    setCurrentValue(digit)
  }

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOpButton
              operation={"AC"}
              selectOp={selectOperation}
              opSelected={operation} />
            <GridOpButton
              operation={"C"}
              selectOp={selectOperation}
              opSelected={operation} />
            <GridOpButton
              operation={"%"}
              selectOp={selectOperation}
              opSelected={operation} />
            <GridOpButton
              operation={"/"}
              selectOp={selectOperation}
              opSelected={operation} />
          </Grid>

          <Grid item container columnSpacing={1}>
            <GridButton digit={"7"}enterDigit={setDigit}/>
            <GridButton digit={"8"}enterDigit={setDigit}/>
            <GridButton digit={"9"}enterDigit={setDigit}/>
            <GridOpButton
              operation={"*"}
              selectOp={selectOperation}
              opSelected={operation} />
          </Grid>

          <Grid item container columnSpacing={1}>
            <GridButton digit={"4"}enterDigit={setDigit}/>
            <GridButton digit={"5"}enterDigit={setDigit}/>
            <GridButton digit={"6"}enterDigit={setDigit}/>
            <GridOpButton
              operation={"-"}
              selectOp={selectOperation}
              opSelected={operation} />
          </Grid>

          <Grid item container columnSpacing={1}>
            <GridButton digit={"1"}enterDigit={setDigit}/>
            <GridButton digit={"2"}enterDigit={setDigit}/>
            <GridButton digit={"3"}enterDigit={setDigit}/>
            <GridOpButton
              operation={"+"}
              selectOp={selectOperation}
              opSelected={operation} />
          </Grid>

          <Grid item container columnSpacing={1}>
            <GridButton digit={"0"}enterDigit={setDigit} xs={6}/>
            <GridButton digit={"."}enterDigit={setDigit}/>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained">=</Button></Grid>
          </Grid>

        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;

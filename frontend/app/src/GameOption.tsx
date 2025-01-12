import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
})

export default function RowRadioButtonsGroup({ handleClick }: any) {
  const [value, setValue] = React.useState('Easy')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <Button onClick={() => handleClick()} variant="outlined">
          Game Start
        </Button>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="Nomal" control={<Radio />} label="Nomal" />
          <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  )
}

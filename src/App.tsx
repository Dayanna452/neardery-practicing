import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { mantineTheme } from './styles/theme';


function App() {

  return (
    <MantineProvider theme={mantineTheme}>
      <h1 color="var(--mantine-color-primary-7)">theme</h1>
    </MantineProvider>
  )
}

export default App

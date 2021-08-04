import Header from '@components/organisms/Header'
import { MediaContextProvider } from '@components/utility/Media'
import theme, { GlobalStyle } from '@styles/theme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MediaContextProvider>
        <GlobalStyle />
        <Header />
        <h1>Hello World</h1>
      </MediaContextProvider>
    </ThemeProvider>
  )
}

export default App

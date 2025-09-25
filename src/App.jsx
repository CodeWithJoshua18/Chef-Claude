import Header from './components/Header'
import Main from './components/Main'
import './styles/global.css'
import { Analytics } from "@vercel/analytics/next"

function App() {
  

  return (
    <>
      <Header />
      <Main />
      <Analytics />
    </>
  )
}

export default App

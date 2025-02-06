import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FrontPage from './pages/frontpage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrontPage></FrontPage>
  </StrictMode>,
)

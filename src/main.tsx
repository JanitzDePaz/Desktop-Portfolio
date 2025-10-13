import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
    <div className="w-screen h-[92vh] bg-[url('./assets/variety/fedora-wallpaper.png')] bg-center bg-cover bg-no-repeat"></div>
    <Nav />
    </>
    
  </StrictMode>,
)
 
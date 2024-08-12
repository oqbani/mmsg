import React, { useEffect } from 'react'
import Slider from '../Accueil/Slider'
import Services from '../Accueil/Services'
import Infos from '../Accueil/Infos'
import Blog from '../Accueil/Blog'
import Rdv from '../Accueil/Rdv'

const Accueil:React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=''>
      <Slider />
      <Rdv />
      <Services />
      <Infos />
      <Blog />
    </div>
  )
}

export default Accueil

import { useRef } from 'react'

import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Section from './components/Section/Section'

function App({menu, socialLinks, courses}) {
  const headerRef = useRef(null)
  const headerScroll = () => {
    headerRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const sectionRef = useRef(null)
  const sectionScroll = () => {
    sectionRef.current.scrollIntoView({behavior: 'smooth'}); 
  }

  return (
    <div>
      <Nav headerScroll={headerScroll} sectionScroll={sectionScroll}  menu={menu}/>
      <Header ref={headerRef} socialLinks={socialLinks}/>
      <Section ref={sectionRef} courses={courses}/>
    </div>
  )
}

export default App

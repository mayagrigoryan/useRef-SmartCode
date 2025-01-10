import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const menu = ['Դասընթացներ', 'Առավելություններ', 'Թրեյներներ', 'Մեր մասին'];
const socialLinks = [
  { url: '/', iconClass: 'bi-facebook' },
  { url: '/', iconClass: 'bi-linkedin' },
  { url: '/', iconClass: 'bi-instagram' },
  { url: '/', iconClass: 'bi-tiktok' }
];
const courses = [
  {
    name: 'WEB Front-End',
    type: 'Դասընթաց',
    link: '/',
    image: 'https://smartcode.am/public/image/courses/front-end.svg',
    duration: '9 ամիս',
    price: '58,000'
  },
  {
    name: 'Python (ML / AI)',
    type: 'Դասընթաց',
    link: '/',
    image: 'https://smartcode.am/public/image/courses/python-ml.svg',
    duration: '7 ամիս',
    price: '68,000'
  },
  {
    name: 'Java',
    type: 'Դասընթաց',
    link: '/',
    image: 'https://smartcode.am/public/image/courses/java.svg',
    duration: '6 ամիս',
    price: '68,000'
  },
  {
    name: 'JavaScript',
    type: 'Դասընթաց',
    link: '/',
    image: 'https://smartcode.am/public/image/courses/javaScript.svg',
    duration: '3.5 ամիս',
    price: '58,000'
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App menu={menu} socialLinks={socialLinks} courses={courses}/>
  </StrictMode>,
)

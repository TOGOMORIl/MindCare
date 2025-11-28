import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import DoctorList from './components/DoctorList'
import BookingForm from './components/BookingForm'
import StaffLogin from './components/StaffLogin'
import LanguageSwitcher from './components/LanguageSwitcher'
import BottomNav from './components/BottomNav'
import './index.css'

export default function App() {
  const [lang, setLang] = useState('ar')
  const [isStaff, setIsStaff] = useState(false)
  const [page, setPage] = useState('home')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const goTo = (p) => {
    if (p === 'booking') setPage('doctors')
    else if (p === 'home' || p === 'about' || p === 'services' || p === 'team' || p === 'reviews' || p === 'contact') {
      setPage('home')
      setTimeout(() => document.getElementById(p)?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={lang === 'he' ? 'hebrew' : ''}>
      <StaffLogin onLogin={() => setIsStaff(true)} />
      <LanguageSwitcher current={lang} onChange={setLang} />

      {isStaff ? (
        <StaffDashboard lang={lang} onLogout={() => setIsStaff(false)} />
      ) : page === 'doctors' ? (
        <DoctorList lang={lang} onSelect={(doc) => { setSelectedDoctor(doc); setPage('form') }} onBack={() => setPage('home')} />
      ) : page === 'form' ? (
        <BookingForm lang={lang} doctor={selectedDoctor} onBack={() => setPage('doctors')} />
      ) : (
        <>
          <div id="home"><Hero lang={lang} /></div>
          <div id="about"><About lang={lang} /></div>
          <div id="services"><Services lang={lang} /></div>
          <div id="team"><Team lang={lang} /></div>
          <div id="reviews"><Testimonials lang={lang} /></div>
          <div id="contact"><Contact lang={lang} /></div>
          <BottomNav lang={lang} onNav={goTo} />
        </>
      )}
    </div>
  )
}
import homeIcon from '../icons/Home.png'
import aboutIcon from '../icons/Who we are.png'
import servicesIcon from '../icons/TEAM.png'
import teamIcon from '../icons/TEAM.png'
import reviewIcon from '../icons/review.png'
import bookingIcon from '../icons/booking.png'
import contactIcon from '../icons/contact us.png'

export default function BottomNav({ lang, onNav }) {
  const items = [
    { icon: homeIcon,     label: lang === 'ar' ? 'الرئيسية' : 'בית',         target: 'home' },
    { icon: aboutIcon,    label: lang === 'ar' ? 'من نحن'     : 'אודות',       target: 'about' },
    { icon: servicesIcon, label: lang === 'ar' ? 'الخدمات'   : 'שירותים',     target: 'services' },
    { icon: teamIcon,     label: lang === 'ar' ? 'الفريق'     : 'הצוות',       target: 'team' },
    { icon: reviewIcon,   label: lang === 'ar' ? 'آراء الأهالي' : 'מה אומרים ההורים', target: 'reviews' },
    { icon: bookingIcon,  label: lang === 'ar' ? 'حجز موعد'   : 'זימון תור',    target: 'booking' },
    { icon: contactIcon,  label: lang === 'ar' ? 'تواصلوا معنا' : 'צרו איתנו קשר', target: 'contact' },
  ]

  const handleClick = (target) => {
    if (target === 'booking') onNav('booking')
    else {
      onNav('home')
      setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      background: 'white',
      padding: '12px 0',
      boxShadow: '0 -8px 30px rgba(0,0,0,0.15)',
      zIndex: 999,
      display: 'flex',
      direction: 'rtl'
    }}>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => handleClick(item.target)}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <img src={item.icon} alt="" style={{ width: '28px', height: '28px' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#444' }}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  )
}
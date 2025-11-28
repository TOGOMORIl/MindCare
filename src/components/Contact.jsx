import Phone from '../icons/Phone.png'
import whatsapp from '../icons/whatsapp.png'
import waze from '../icons/waze.png'

export default function Contact({ lang }) {
  return (
    <section id="contact" style={{
      padding: '160px 20px',
      background: 'linear-gradient(135deg, #5B4EFF, #4638CC)',
      color: 'white',
      direction: 'rtl'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '40px', fontWeight: 'bold' }}>
          {lang === 'ar' ? 'تواصلوا معنا الآن' : 'צרו איתנו קשר'}
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', margin: '60px 0' }}>
          <a href="tel:9200555888" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <img src={Phone} alt="Phone" style={{ width: '70px', height: '70px' }} />
              <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>9200 555 888</span>
            </div>
          </a>

          <a href="https://wa.me/+966500000000" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <img src={whatsapp} alt="WhatsApp" style={{ width: '70px', height: '70px' }} />
              <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>واتساب</span>
            </div>
          </a>

          <a href="https://waze.com/ul/hsv9w..." target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <img src={waze} alt="Waze" style={{ width: '70px', height: '70px' }} />
              <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Waze</span>
            </div>
          </a>
        </div>

        <p style={{ fontSize: '1.8rem', marginTop: '40px' }}>
          info@mindcarepro.com
        </p>
      </div>
    </section>
  )
}
export default function HomePage() {
  return (
    <div style={{ padding: '80px 20px 120px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', fontWeight: '900' }}>MindCare Pro</h1>
      <p style={{ fontSize: '38px', margin: '30px 0' }}>منصة متطورة لإدارة عيادتك الخاصة</p>
      <p style={{ fontSize: '34px', opacity: 0.9 }}>זימון תורים • ניהול לקוחות • וידאו צ'אט • تطبيق للمرضى</p>
      <button style={{
        marginTop: '50px', padding: '25px 80px', fontSize: '40px',
        background: '#ff6b6b', border: 'none', borderRadius: '50px',
        boxShadow: '0 20px 40px rgba(255,107,107,0.5)', cursor: 'pointer'
      }}>
        ابدأ الآن
      </button>
    </div>
  )
}
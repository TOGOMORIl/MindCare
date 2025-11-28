const services = [
  { icon: "Brain", title: { ar: "طب نفس الأطفال والمراهقين", he: "פסיכיאטריית ילדים ונוער" }},
  { icon: "Puzzle Piece", title: { ar: "علاج التوحد واضطرابات الطيف", he: "טיפול באוטיזם והספקטרום" }},
  { icon: "Lightning Bolt", title: { ar: "ADHD - فرط الحركة وتشتت الانتباه", he: "ADHD" }},
  { icon: "Speech Bubble", title: { ar: "علاج النطق واللغة", he: "קלינאות תקשורת" }},
  { icon: "Hands", title: { ar: "العلاج الوظيفي والتكامل الحسي", he: "ריפוי בעיסוק" }},
  { icon: "Book", title: { ar: "صعوبات التعلم والديسكيا", he: "לקויות למידה" }},
  { icon: "Heart", title: { ar: "علاج القلق والاكتئاب", he: "טיפול בחרדה ודיכאון" }},
  { icon: "Home", title: { ar: "زيارات منزلية وتدخل مبكر", he: "ביקורי בית והתערבות מוקדמת" }}
]

export default function Services({ lang }) {
  return (
    <section style={{ padding: '140px 0', background: '#f0f8ff' }}>
      <div className="container">
        <h2 style={{ fontSize: '3.2rem', textAlign: 'center', color: '#5B4EFF', marginBottom: '80px' }}>
          {lang === 'ar' ? 'خدماتنا الشاملة' : 'השירותים שלנו'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: 'white', padding: '40px', borderRadius: '24px',
              textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              transition: '0.4s'
            }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-20px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '4.5rem', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>
                {lang === 'ar' ? s.title.ar : s.title.he}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                {lang === 'ar' ? 'تقييم شامل + خطة علاج فردية + متابعة أسبوعية مع تقارير دورية'
                  : 'אבחון מקיף + תוכנית טיפול אישית + מעקב שבועי ודוחות'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
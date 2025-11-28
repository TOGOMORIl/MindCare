export default function Team({ lang }) {
  const title = lang === 'ar' ? 'فريقنا الطبي' : 'הצוות הרפואי שלנו'

  const members = lang === 'ar' ? [
    { name: "د. سارة أحمد", title: "استشاري طب نفس أطفال" },
    { name: "د. محمد خالد", title: "أخصائي توحد BCBA" },
    { name: "لينا سمير", title: "معالجة نطق ولغة" },
    { name: "ريم علي", title: "معالجة وظيفية وحسية" }
  ] : [
    { name: "ד\"ר שרה אחמד", title: "פסיכיאטרית ילדים" },
    { name: "ד\"ר מוחמד חאלד", title: "מומחה אוטיזם BCBA" },
    { name: "לינה סמיר", title: "קלינאית תקשורת" },
    { name: "רים עלי", title: "מרפאה בעיסוק" }
  ]

  return (
    <section id="team" style={{ padding: '140px 0', background: '#fff', direction: 'rtl' }}>
      <div className="container">
        <h2 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          color: '#5B4EFF', 
          marginBottom: '80px',
          direction: 'rtl'
        }}>
          {title}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '50px',
          direction: 'rtl'
        }}>
          {members.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '180px',
                height: '180px',
                background: '#e0f2ff',
                borderRadius: '50%',
                margin: '0 auto 20px',
                backgroundImage: 'ur[](https://via.placeholder.com/180)',
                backgroundSize: 'cover'
              }}></div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{m.name}</h3>
              <p style={{ color: '#555', fontSize: '1.1rem' }}>{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default function DoctorList({ lang, onSelect, onBack }) {
  const doctors = lang === 'ar' ? [
    "د. سارة أحمد - طب نفس أطفال",
    "د. محمد خالد - علاج توحد",
    "لينا سمير - علاج نطق",
    "ريم علي - علاج وظيفي"
  ] : [
    "ד\"ר שרה אחמד - פסיכיאטרית",
    "ד\"ר מוחמד חאלד - אוטיזם",
    "לינה סמיר - קלינאית תקשורת",
    "רים עלי - ריפוי בעיסוק"
  ]

  return (
    <div style={{ padding: '100px 20px', minHeight: '100vh', background: '#fff' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.8rem', textAlign: 'center', color: '#5B4EFF', marginBottom: '50px' }}>
          {lang === 'ar' ? 'اختر المعالج' : 'בחרו מטפל'}
        </h1>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          {doctors.map((doc, i) => (
            <button key={i} onClick={() => onSelect(doc)} style={{
              width: '100%', padding: '20px', margin: '12px 0',
              background: '#f0f8ff', border: 'none', borderRadius: '16px',
              fontSize: '1.4rem', cursor: 'pointer'
            }}>
              {doc}
            </button>
          ))}
          <button onClick={onBack} style={{ width: '100%', padding: '16px', background: '#ddd', borderRadius: '16px', marginTop: '30px' }}>
            {lang === 'ar' ? 'رجوع' : 'חזרה'}
          </button>
        </div>
      </div>
    </div>
  )
}
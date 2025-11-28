export default function BookingModal({ lang, onClose }) {
  const doctors = lang === 'ar' ? [
    "د. سارة أحمد - طب نفس أطفال",
    "د. محمد خالد - علاج توحد",
    "لينا سمير - علاج نطق",
    "ريم علي - علاج وظيفي"
  ] : [
    "ד\"ר שרה אחמד - פסיכיאטריית ילדים",
    "ד\"ר מוחמד חאלד - טיפול באוטיזם",
    "לינה סמיר - קלינאית תקשורת",
    "רים עלי - ריפוי בעיסוק"
  ]

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#5B4EFF' }}>
          {lang === 'ar' ? 'اختر المعالج' : 'בחרו מטפל'}
        </h2>
        {doctors.map((doc, i) => (
          <button key={i} style={{
            display: 'block', width: '100%', padding: '16px',
            margin: '10px 0', background: '#e0f8ff', border: 'none',
            borderRadius: '16px', fontSize: '1.2rem', cursor: 'pointer'
          }} onClick={() => {
            alert(`تم حجز موعد مع ${doc}`)
            onClose()
          }}>
            {doc}
          </button>
        ))}
        <button onClick={onClose} style={{
          marginTop: '20px', padding: '12px 30px',
          background: '#ff4757', color: 'white', border: 'none', borderRadius: '50px'
        }}>
          {lang === 'ar' ? 'إلغاء' : 'ביטול'}
        </button>
      </div>
    </div>
  )
}
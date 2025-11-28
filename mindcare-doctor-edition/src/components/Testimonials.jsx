export default function Testimonials({ lang }) {
  const title = lang === 'ar' ? 'آراء الأهالي' : 'מה אומרים ההורים שלנו'

  const reviews = lang === 'ar' ? [
    { name: "أم آدم (4 سنوات)", text: "ابني بدأ يتكلم جمل كاملة بعد 3 أشهر فقط! شكرًا من القلب" },
    { name: "والدة ليان (6 سنوات)", text: "الفريق محترف جدًا والنتائج فاقت توقعاتنا" },
    { name: "أبو يوسف (5 سنوات)", text: "أفضل مركز زرناه.. تحسن كبير في التواصل والسلوك" },
    { name: "أم سارة (7 سنوات)", text: "المتابعة يومية والاهتمام بشكل لا يُصدق" }
  ] : [
    { name: "אמא של אדם (4)", text: "הבן שלי התחיל לדבר משפטים שלמים אחרי 3 חודשים בלבד! תודה ענקית" },
    { name: "אמא של ליאן (6)", text: "הצוות מקצועי ברמה גבוהה מאוד והתוצאות עלו על כל הציפיות" },
    { name: "אבא של יוסף (5)", text: "המרכז הכי טוב שביקרנו בו.. שיפור משמעותי בתקשורת והתנהגות" },
    { name: "אמא של שרה (7)", text: "מעקב יומי ויחס שלא ייאמן" }
  ]

  return (
    <section id="reviews" style={{ padding: '140px 0', background: '#f8fdff', direction: 'rtl' }}>
      <div className="container">
        <h2 style={{ fontSize: '3.2rem', textAlign: 'center', color: '#5B4EFF', marginBottom: '80px' }}>
          {title}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '40px',
          direction: 'rtl'
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '40px',
              borderRadius: '28px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '1.5rem', lineHeight: '2.2', marginBottom: '25px', fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <p style={{ fontWeight: 'bold', color: '#00d4ff', fontSize: '1.3rem' }}>
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default function Hero({ lang }) {
  return (
    <section style={{
      height: '100vh',
      background: 'linear-gradient(rgba(91,78,255,0.88), rgba(0,212,255,0.8)), url("https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg") center/cover',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '4.8rem', marginBottom: '20px' }}>MindCare Pro</h1>
        <p style={{ fontSize: '1.9rem', maxWidth: '1000px', margin: 'auto', lineHeight: '1.8' }}>
          {lang === 'ar' 
            ? 'المركز الأول في المنطقة لرعاية الصحة النفسية والتنموية للأطفال والمراهقين بأحدث البروتوكولات العالمية'
            : 'המרכז המוביל באזור לבריאות נפשית והתפתחותית של ילדים ומתבגרים בפרוטוקולים מתקדמים ביותר'
          }
        </p>
        <a href="tel:+966500000000" className="btn btn-primary" style={{ marginTop: '50px', fontSize: '1.5rem' }}>
          {lang === 'ar' ? 'احجز موعد الآن' : 'קבעו תור עכשיו'}
        </a>
      </div>
    </section>
  )
}
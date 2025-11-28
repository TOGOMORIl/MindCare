export default function About({ lang }) {
  return (
    <section style={{ padding: '120px 0', background: '#fff' }}>
      <div className="container">
        <h2 style={{ fontSize: '3.2rem', textAlign: 'center', color: '#5B4EFF', marginBottom: '50px' }}>
          {lang === 'ar' ? 'من نحن؟' : 'מי אנחנו?'}
        </h2>
        <p style={{ fontSize: '1.4rem', lineHeight: '2.2', textAlign: 'center', maxWidth: '1100px', margin: 'auto' }}>
          {lang === 'ar'
            ? 'مركز MindCare Pro هو أكبر مركز متخصص في تقديم خدمات الصحة النفسية والتنموية للأطفال منذ الولادة وحتى 18 سنة. نعمل بفريق متعدد التخصصات يضم أطباء نفسيين، أخصائيي توحد BCBA، معالجي نطق، معالجي وظيفي، ممرضات متخصصات، وأخصائيي نفسيين إكلينيكيين. نستخدم أحدث الأساليب العالمية (ABA, CBT, Floortime, DIR, Hanen, PROMPT, TEACCH).'
            : 'מרכז MindCare Pro הוא המרכז הגדול והמקצועי ביותר לבריאות נפשית והתפתחותית של ילדים מגיל לידה עד 18. צוות רב-תחומי הכולל פסיכיאטרים, מומחי אוטיזם BCBA, קלינאיות תקשורת, מרפאים בעיסוק, אחיות מומחיות ופסיכולוגים קליניים.'
          }
        </p>
      </div>
    </section>
  )
}
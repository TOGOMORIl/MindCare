export default function LanguageSwitcher({ current, onChange }) {
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'rgba(255,255,255,0.95)',
      padding: '10px 16px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      zIndex: 9999,
      backdropFilter: 'blur(10px)',
      display: 'flex',
      gap: '12px',
      border: '1px solid #eee'
    }}>
      <button onClick={() => onChange('ar')} style={{
        padding: '8px 18px', borderRadius: '30px', border: 'none',
        background: current === 'ar' ? '#5B4EFF' : 'transparent',
        color: current === 'ar' ? 'white' : '#333',
        fontWeight: 'bold', cursor: 'pointer'
      }}>عربي</button>
      <button onClick={() => onChange('he')} style={{
        padding: '8px 18px', borderRadius: '30px', border: 'none',
        background: current === 'he' ? '#5B4EFF' : 'transparent',
        color: current === 'he' ? 'white' : '#333',
        fontWeight: 'bold', cursor: 'pointer'
      }}>עברית</button>
    </div>
  )
}
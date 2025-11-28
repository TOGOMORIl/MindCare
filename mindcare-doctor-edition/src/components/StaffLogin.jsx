export default function StaffLogin({ onLogin }) {
  return (
    <div style={{
      position: 'fixed',
      top: '30px',
      left: '30px',
      background: '#5B4EFF',
      color: 'white',
      padding: '14px 28px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 10px 30px rgba(91,78,255,0.4)',
      zIndex: 9999
    }} onClick={onLogin}>
      الموظفين / צוות
    </div>
  );
}
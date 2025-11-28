import { useState } from 'react'

export default function BookingForm({ lang, doctor, onBack }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [verified, setVerified] = useState(false)

  const dates = lang === 'ar' 
    ? ["الأحد 30 نوفمبر 9:00", "الإثنين 1 ديسمبر 10:30", "الأربعاء 3 ديسمبر 14:00"]
    : ["יום ראשון 30 נובמבר 9:00", "יום שני 1 דצמבר 10:30", "יום רביעי 3 דצמבר 14:00"]

  return (
    <div style={{ padding: '80px 20px', minHeight: '100vh', background: '#fff' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#5B4EFF' }}>
          {lang === 'ar' ? 'حجز مع:' : 'תור עם:'} {doctor}
        </h1>

        <div style={{ maxWidth: '500px', margin: '40px auto', background: '#f8fdff', padding: '40px', borderRadius: '24px' }}>
          <input type="text" placeholder={lang === 'ar' ? 'الاسم الكامل' : 'שם מלא'} value={name} onChange={e => setName(e.target.value)}
            style={{ width: '100%', padding: '16px', margin: '12px 0', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1.1rem' }} />

          <input type="tel" placeholder={lang === 'ar' ? 'رقم الجوال' : 'טלפון נייד'} value={phone} onChange={e => setPhone(e.target.value)}
            style={{ width: '100%', padding: '16px', margin: '12px 0', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1.1rem' }} />

          {!verified ? (
            <button onClick={() => setVerified(true)} style={{ width: '100%', padding: '18px', background: '#5B4EFF', color: 'white', border: 'none', borderRadius: '50px', fontSize: '1.3rem' }}>
              {lang === 'ar' ? 'إرسال رمز التحقق' : 'שליחת קוד אימות'}
            </button>
          ) : (
            <>
              <input type="text" placeholder={lang === 'ar' ? 'رمز التحقق' : 'קוד אימות'} value={code} onChange={e => setCode(e.target.value)}
                style={{ width: '100%', padding: '16px', margin: '12px 0', borderRadius: '12px', border: '1px solid #ccc' }} />

              <select style={{ width: '100%', padding: '16px', margin: '12px 0', borderRadius: '12px', border: '1px solid #ccc', fontSize: '1.1rem' }}>
                <option>{lang === 'ar' ? 'اختر التاريخ والوقت' : 'בחרו תאריך ושעה'}</option>
                {dates.map((d, i) => <option key={i}>{d}</option>)}
              </select>

              <button style={{ width: '100%', padding: '18px', background: '#25d366', color: 'white', border: 'none', borderRadius: '50px', fontSize: '1.3rem' }}>
                {lang === 'ar' ? 'تأكيد الحجز' : 'אישור התור'}
              </button>
            </>
          )}

          <button onClick={onBack} style={{ width: '100%', padding: '14px', background: '#eee', marginTop: '20px', borderRadius: '50px' }}>
            {lang === 'ar' ? 'رجوع' : 'חזרה'}
          </button>
        </div>
      </div>
    </div>
  )
}
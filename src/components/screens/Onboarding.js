import { useState } from 'react';
import Header from '../Header';
import { ShieldAlert, Fingerprint } from 'lucide-react';

export default function Onboarding({ onLogin }) {
  const [method, setMethod] = useState('otp'); // 'otp' or 'google'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = () => {
    if (phone.length >= 10) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 800);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 4) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLogin();
      }, 800);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)' }}>
      <main style={{ padding: '40px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <div style={{ marginBottom: '48px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--accent-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '24px', letterSpacing: '-1px' }}>Eq</span>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>
            Wealth Intelligence Account
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.5' }}>
            Institutional-grade equity analysis for the retail investor. Securely authenticate to continue.
          </p>
        </div>

        {method === 'otp' ? (
          <div className="animate-slide-up" style={{ width: '100%' }}>
            {step === 1 ? (
              <>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    marginBottom: '24px',
                    outline: 'none',
                    letterSpacing: '1px'
                  }}
                />
                <button
                  onClick={handleSendOtp}
                  disabled={loading || phone.length < 10}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: phone.length >= 10 ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                    color: phone.length >= 10 ? '#fff' : 'var(--text-tertiary)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: phone.length >= 10 ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '24px'
                  }}
                >
                  {loading ? 'Sending Security Code...' : 'Request Code'}
                </button>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                   <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Security Code
                  </label>
                  <button onClick={() => setStep(1)} style={{ background:'none', border:'none', color:'var(--accent-primary)', fontSize:'13px', cursor:'pointer' }}>Edit Number</button>
                </div>
                <input
                  type="text"
                  placeholder="4-digit code"
                  maxLength={4}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-primary)',
                    fontSize: '20px',
                    letterSpacing: '8px',
                    textAlign: 'center',
                    marginBottom: '24px',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length < 4}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: otp.length === 4 ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                    color: otp.length === 4 ? '#fff' : 'var(--text-tertiary)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: otp.length === 4 ? 'pointer' : 'not-allowed',
                    marginBottom: '24px'
                  }}
                >
                  {loading ? 'Authenticating...' : 'Verify & Continue'}
                </button>
              </>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-color)' }}></div>
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: '500' }}>OR</span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-color)' }}></div>
            </div>

            <button
              onClick={handleGoogleLogin}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '18px', height: '18px' }} />
              Continue with Google
            </button>
          </div>
        ) : null}
      </main>

      <footer style={{ padding: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--text-tertiary)', fontSize: '12px' }}>
          <ShieldAlert size={14} />
          <span>Encrypted under 256-bit bank-grade security protocols</span>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot field (should be empty)
    if (honeypot) {
      return;
    }

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate API call for now - in production this would be a real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success. In production, this would be:
      // const response = await fetch('/api/join', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div 
        className="text-center py-4" 
        role="status" 
        aria-live="polite"
      >
        <p className="text-primary font-medium text-lg">
          Thanks for joining the waitlist! We'll notify you once our products are ready for purchse!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full input-field"
            disabled={status === 'loading'}
            aria-describedby={errorMessage ? 'email-error' : undefined}
          />
          
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] whitespace-nowrap"
          aria-label="Join waitlist"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      
      {errorMessage && (
        <p 
          id="email-error" 
          className="text-destructive text-sm mt-2" 
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
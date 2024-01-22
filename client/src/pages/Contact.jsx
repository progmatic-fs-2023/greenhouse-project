import React, { useState } from 'react';
import { API_URL } from '../constants';

function ContactPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const subjects = ['General Inquiry', 'Product Support', 'Billing Issue', 'Feedback', 'Other'];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/contact/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject: selectedSubject,
          message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setName('');
        setEmail('');
        setSelectedSubject('');
        setMessage('');
      } else {
        throw new Error('Failed to send the message.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }

    setSending(false);
  };

  return (
    <div className='contact_main_container'>
      <div className='contact_container'>
      <h2>Contact Us</h2>
      {sending && <p>Sending...</p>}
      {sent && <p>Message sent!</p>}
      {error && <p className="error">Error: {error}</p>}
      {!sent && !error && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Your Name:
              <br />
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Your Email:
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="subject">
              Subject:
              <br />
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Your Message:
              <br />
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              />
            </label>
          </div>
          <button type="submit" disabled={sending}>
            Send Message
          </button>
        </form>
      )}
    </div>
    </div>
  );
}

export default ContactPage;

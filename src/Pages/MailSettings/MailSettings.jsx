import React, { useState } from 'react';
import './MailSettings.css';

const MailSettings = () => {
  const [smtpServer, setSmtpServer] = useState('smtp.example.com');
  const [smtpPort, setSmtpPort] = useState('587');
  const [smtpSecurity, setSmtpSecurity] = useState('TLS');

  const [imapServer, setImapServer] = useState('imap.example.com');
  const [imapPort, setImapPort] = useState('993');
  const [imapSecurity, setImapSecurity] = useState('SSL');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      smtpServer,
      smtpPort,
      smtpSecurity,
      imapServer,
      imapPort,
      imapSecurity,
      username,
      password,
    };
    console.log('Submitted Mail Config:', config);
  };

  return (
    
    <form className="mail-container" onSubmit={handleSubmit}>
      <section className="mail-block">
        <h2>SMTP Server (Outgoing Mail)</h2>
        <div className="mail-row">
          <div className="mail-field">
            <label>SMTP Server</label>
            <input type="text" value={smtpServer} onChange={e => setSmtpServer(e.target.value)} />
            <small>Server for sending emails</small>
          </div>
          <div className="mail-field small">
            <label>Port</label>
            <input type="text" value={smtpPort} onChange={e => setSmtpPort(e.target.value)} />
          </div>
          <div className="mail-field small">
            <label>Security</label>
            <select value={smtpSecurity} onChange={e => setSmtpSecurity(e.target.value)}>
              <option value="TLS">TLS</option>
              <option value="SSL">SSL</option>
            </select>
          </div>
        </div>
      </section>

      <section className="mail-block">
        <h2>IMAP Server (Incoming Mail)</h2>
        <div className="mail-row">
          <div className="mail-field">
            <label>IMAP Server</label>
            <input type="text" value={imapServer} onChange={e => setImapServer(e.target.value)} />
            <small>Server for receiving emails</small>
          </div>
          <div className="mail-field small">
            <label>Port</label>
            <input type="text" value={imapPort} onChange={e => setImapPort(e.target.value)} />
          </div>
          <div className="mail-field small">
            <label>Security</label>
            <select value={imapSecurity} onChange={e => setImapSecurity(e.target.value)}>
              <option value="SSL">SSL</option>
              <option value="TLS">TLS</option>
            </select>
          </div>
        </div>
      </section>

      <section className="mail-block">
        <h2>Authentication</h2>
        <div className="mail-row">
          <div className="mail-field">
            <label>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Usually your email address" />
            <small>Often the same as your email address</small>
          </div>
          <div className="mail-field">
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
            <small>Use app-specific password when available</small>
          </div>
        </div>
      </section>

      <div className="submit-row">
        <button type="submit">Save Settings</button>
      </div>
    </form>
  );
};

export default MailSettings;

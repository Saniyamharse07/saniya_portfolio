
const Contact = () => {
  return (
    <div className="info-box" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Contact</h1>
      <p>Email: <b>saniyamharse07@gmail.com</b></p>
      <p>Phone: <b>+91 9130289240</b></p>
      <p>
        <a href="https://www.linkedin.com/in/saniyamharase/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="https://github.com/saniyamharse07" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>

      <form action="#" method="post" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

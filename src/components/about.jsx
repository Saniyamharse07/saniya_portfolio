

const About = () => {
  return (
    <div className="info-box" style={{ textAlign: 'center', padding: '20px' }}>
      <style>{`
  .profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid cyan;
    box-shadow: 0px 0px 25px cyan;
    transition: transform 0.4s ease;
    object-fit:cover ;
  }
  .profile-pic:hover {
    transform: scale(1.1);
  }
`}</style>

      <img
        src="/Saniya.jpg"
        alt="Saniya Mharase"
       className='profile-pic'
      />
      <p>
        Hello! I’m <b>Saniya Mharase</b>, Third-Year B.Tech Computer Science & Engineering student at{' '}
        <b>PCET’s Pimpri Chinchwad University</b>, Pune.  
        Skilled in <b>C++, Java, Python</b> and experienced with IoT, AR, and web development projects.  
        I enjoy problem-solving, teamwork, and exploring futuristic technology.
      </p>
    </div>
  );
};

export default About;

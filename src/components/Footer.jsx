const Footer = function () {
  return (
    <footer className='text-center bg-dark text-white' data-bs-theme='dark'>
      <p>EPICODE - {new Date().getUTCFullYear()}</p>
    </footer>
  );
};

export default Footer;

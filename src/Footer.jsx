import React from 'react';
import './Footer.css';

import { MdWebAsset, MdEmail, MdCall } from 'react-icons/md';

function Footer() {
  return (
    <div>
      <div className="watermark">
        <img src="/watermark.png" alt="watermark"/>
      </div>
      <footer className="footer">
        <div className="text">
          <p>En caso de dudas, comunícate con nuestra Mesa de Ayuda</p>
        </div>
        <div className="mesa-de-ayuda">
          <div className="link">
            <div className="icono">
              <MdWebAsset className='i' />
            </div>
            <a href="http://www.pagina-ejemplo.cl" target="_blank" rel="noopener noreferrer">www.pagina-ejemplo.cl</a>
          </div>
          <div className="link">
            <div className="icono">
              <MdEmail className='i' />
            </div>
            <a href="mailto:email@utem.cl">email@utem.cl</a>
          </div>
          <div className="link">
            <div className="icono">
              <MdCall className='i' />
            </div>
            <p>+ 56 2 2234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

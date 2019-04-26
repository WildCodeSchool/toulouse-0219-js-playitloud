import React from 'react';

const FooterPagePro = () => {
  return (
    <div className="footer">
      <div className="mb-1 flex-center icones">
        <ion-icon name="logo-pinterest" size="large" style={{ color: 'white' }} />
        <ion-icon name="logo-googleplus" size="large" style={{ color: 'white' }} />
        <ion-icon name="logo-linkedin" size="large" style={{ color: 'white' }} />
        <ion-icon name="logo-instagram" size="large" style={{ color: 'white' }} />
        <ion-icon name="logo-twitter" size="large" style={{ color: 'white' }} />
        <ion-icon name="logo-facebook" size="large" style={{ color: 'white' }} />
      </div>
      <div className="footer-copyright text-center py-1">
        &copy; 2019 Copyright :
        {' '}
        Play it Loud
      </div>
    </div>
  );
};

export default FooterPagePro;

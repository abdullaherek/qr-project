import React from 'react'
import QRCode from 'react-qr-code';



const HomePage = () => {
  return (
    <div>

        HomePage
        <QRCode id="QRCode" title="Custom Title" level='H' size={190} value={`www.google.com`} />

    </div>
  )
}

export default HomePage
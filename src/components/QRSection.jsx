import { QRCodeCanvas } from 'qrcode.react'
import { QrCode } from 'lucide-react'

function QRSection({ cardUrl }) {
  return (
    <section className="qr-section" id="qr" aria-labelledby="qr-title">
      <div className="qr-copy">
        <span className="qr-icon" aria-hidden="true">
          <QrCode size={19} />
        </span>
        <div>
          <p className="section-kicker">QR</p>
          <h2 id="qr-title">Escanea y guarda nuestra tarjeta digital</h2>
        </div>
      </div>

      <div className="qr-card" aria-label="Código QR de Judit White">
        <QRCodeCanvas
          value={cardUrl}
          size={190}
          bgColor="#FAF7F2"
          fgColor="#111111"
          level="H"
          includeMargin
        />
      </div>
    </section>
  )
}

export default QRSection

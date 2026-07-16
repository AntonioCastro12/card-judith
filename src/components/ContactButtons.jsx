import {
  Camera,
  MapPin,
  MessageCircle,
  Send,
  Share2,
  ShoppingBag,
  ThumbsUp,
} from 'lucide-react'

const featuredLinks = [
  {
    label: 'Ver catálogo',
    detail: 'Explora prendas disponibles',
    href: '#categorias',
    icon: ShoppingBag,
    style: 'dark',
  },
  {
    label: 'WhatsApp',
    detail: 'Atención y pedidos',
    href: 'https://wa.me/?text=Hola%20Judit%20White%2C%20quiero%20ver%20su%20cat%C3%A1logo.',
    icon: MessageCircle,
    style: 'gold',
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    detail: 'Novedades',
    href: 'https://www.facebook.com/search/top?q=Judit%20White',
    icon: ThumbsUp,
  },
  {
    label: 'Instagram',
    detail: 'Outfits',
    href: 'https://www.instagram.com/',
    icon: Camera,
  },
  {
    label: 'Ubicación',
    detail: 'Cómo llegar',
    href: 'https://www.google.com/maps/search/Judit%20White',
    icon: MapPin,
  },
]

function ContactButtons({ cardUrl }) {
  const shareCard = async () => {
    const shareData = {
      title: 'Judit White',
      text: 'Tarjeta digital de Judit White',
      url: cardUrl,
    }

    if (navigator.share) {
      await navigator.share(shareData)
      return
    }

    await navigator.clipboard.writeText(cardUrl)
  }

  return (
    <section className="section-block contact-block" id="contacto" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="section-kicker">Contacto directo</p>
        <h2 id="contact-title">Elige cómo visitarnos</h2>
      </div>

      <div className="contact-panel">
        <div className="featured-actions">
          {featuredLinks.map(({ label, detail, href, icon: Icon, style }) => (
            <a
              className={`featured-action ${style}`}
              href={href}
              key={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="action-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="action-copy">
                <strong>{label}</strong>
                <small>{detail}</small>
              </span>
              <span className="action-arrow">
                <Send size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <div className="quick-actions">
          {socialLinks.map(({ label, detail, href, icon: Icon }) => (
            <a
              className="quick-action"
              href={href}
              key={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={20} aria-hidden="true" />
              <strong>{label}</strong>
              <small>{detail}</small>
            </a>
          ))}

          <button className="quick-action share-action" type="button" onClick={shareCard}>
            <Share2 size={20} aria-hidden="true" />
            <strong>Compartir</strong>
            <small>Enviar tarjeta</small>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactButtons

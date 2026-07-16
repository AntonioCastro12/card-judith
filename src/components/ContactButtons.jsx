import {
  Camera,
  MapPin,
  MessageCircle,
  Send,
  Share2,
  ShoppingBag,
  ThumbsUp,
} from 'lucide-react'

const contactLinks = [
  {
    label: 'Ver catálogo',
    href: '#categorias',
    icon: ShoppingBag,
    style: 'dark',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/?text=Hola%20Judit%20White%2C%20quiero%20ver%20su%20cat%C3%A1logo.',
    icon: MessageCircle,
    style: 'gold',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/search/top?q=Judit%20White',
    icon: ThumbsUp,
    style: 'light',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: Camera,
    style: 'light',
  },
  {
    label: 'Ubicación',
    href: 'https://www.google.com/maps/search/Judit%20White',
    icon: MapPin,
    style: 'light',
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
        <p className="section-kicker">Contacto</p>
        <h2 id="contact-title">Conecta con Judit White</h2>
      </div>

      <div className="button-stack">
        {contactLinks.map(({ label, href, icon: Icon, style }) => (
          <a
            className={`contact-button ${style}`}
            href={href}
            key={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon size={20} aria-hidden="true" />
            <span>{label}</span>
            <Send size={16} aria-hidden="true" />
          </a>
        ))}

        <button className="contact-button blush" type="button" onClick={shareCard}>
          <Share2 size={20} aria-hidden="true" />
          <span>Compartir tarjeta</span>
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default ContactButtons

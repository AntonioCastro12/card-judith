import { Sparkles } from 'lucide-react'

function Header() {
  const links = [
    ['Inicio', '#inicio'],
    ['Colección', '#coleccion'],
    ['Categorías', '#categorias'],
    ['Contacto', '#contacto'],
    ['QR', '#qr'],
  ]

  return (
    <header className="header">
      <a className="brand-mark" href="#inicio" aria-label="Judit White inicio">
        <span className="brand-icon" aria-hidden="true">
          <img src="/judit-white-logo-full.png" alt="" />
        </span>
        <span className="brand-title">
          <strong>Boutique digital</strong>
          <small>Judith White</small>
        </span>
      </a>

      <nav className="nav-pills" aria-label="Secciones">
        {links.map(([label, href]) => (
          <a key={label} href={href}>
            {label === 'Colección' && <Sparkles size={13} aria-hidden="true" />}
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header

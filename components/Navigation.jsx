import Link from 'next/link'
function Navigation() {
  return (
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" href="/">Next API and Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          <Link className="nav-link" href="/about"> (🇬🇧) About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/services"> (🇪🇸) Sobre Mí</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navigation
import { useState } from 'react'

const links = [['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="nav container" aria-label="Primary navigation">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">OJ</span><span>Omer Javed</span></a>
    <button className="menu-button" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
    <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cv" href="/assets/documents/Omer_Javed_CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div>
  </nav></header>
}

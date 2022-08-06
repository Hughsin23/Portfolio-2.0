import './navbar.scss'
import { Icon } from '@iconify-icon/react'

export default function Navbar({openMenu, setOpenMenu}) {

    return (
        <div className={'navbar ' + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="mailto:hughsin23@gmail.com" target="_blank" className='icon'><Icon icon="clarity:email-line" width="36" height="36" /></a>
                    <a href="https://github.com/Hughsin23" target="_blank" className='icon'><Icon icon="akar-icons:github-fill" width="36" height="36" /></a>
                    <a href="https://www.linkedin.com/in/hsinclair23" target="_blank" className='icon'><Icon icon="akar-icons:linkedin-box-fill" width="36" height="36" /></a>
                    <a href="./resume.pdf" target="_blank" className='icon'><Icon icon="carbon:document" width="36" height="36" /></a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={ ()=> setOpenMenu(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

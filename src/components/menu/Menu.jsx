import './menu.scss'

export default function Menu({openMenu, setOpenMenu}) {

    const handleClick = () =>{
        setOpenMenu(false)
    }

    return (
        <div className={'menu ' + (openMenu && 'active')}>
            <ul>
                <li onClick={handleClick}>
                    <a href="#about">Home</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={handleClick}>
                    <a href="./resume.pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </div>
    )
}

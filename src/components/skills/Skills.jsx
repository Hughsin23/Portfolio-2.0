import './skills.scss'
import { Icon } from '@iconify-icon/react'

export default function Skills() {
  return (
    <main className='skills' id='skills'>
      <h1>Skills:</h1>
      <section className='top'>
        <div className="icon">
          <Icon icon="tabler:brand-javascript" color="white" width="70" height="70" />
        </div>
        <div className="icon">
          <Icon icon="akar-icons:css-fill" color="white" width="70" height="70" />
        </div>
        <div className="icon">
          <Icon icon="teenyicons:ruby-outline" color="white" width="70" height="70" />
        </div>
        <div className="icon">
          <Icon icon="simple-icons:rubyonrails" color="white" width="70" height="70" />
        </div>
      </section>
      <section className="bottom">
        <div className="icon">
          <Icon icon="akar-icons:react-fill" color="white" width="70" height="70" />
        </div>
        <div className="icon">
          <Icon icon="akar-icons:node-fill" color="white" width="70" height="70" />
        </div>
        <div className="icon">
          <Icon icon="akar-icons:postgresql-fill" color="white" width="70" height="70" />
        </div>
        <div className="icon">
          <Icon icon="bxl:mongodb" color="white" width="70" height="70" />
        </div>
      </section>
    </main>
  )
}

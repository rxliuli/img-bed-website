import * as React from 'react'
import css from './ImageHeader.module.css'

const ImageHeader: React.FC = () => (
  <header className={css.header}>
    <h2>rxliuli 的图床</h2>
    <a className={css.link} href={'https://github.com/rxliuli/img-bed'}>
      GitHub
    </a>
  </header>
)

export default ImageHeader

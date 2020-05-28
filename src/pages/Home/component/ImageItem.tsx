import * as React from 'react'
import { ImageEntity } from '../entity/ImageEntity'
import css from './ImageItem.module.css'

type PropsType = {
  value: ImageEntity
  onClick: () => void
}

/**
 * 单个图片元素
 * @param props
 * @constructor
 */
const ImageItem: React.FC<PropsType> = props => {
  return (
    <div className={css.imgItem}>
      <img
        className={css.img}
        src={props.value.url}
        alt={props.value.url}
        onClick={props.onClick}
      />
      <footer className={css.footer}>
        {props.value.time.toLocaleDateString()}
      </footer>
    </div>
  )
}

export default ImageItem

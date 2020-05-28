import * as React from 'react'
import { ImageEntity } from '../entity/ImageEntity'
import css from './ImageModalContent.module.css'

type PropsType = {
  value: ImageEntity
}

/**
 * 弹窗
 * @param props
 * @constructor
 */
const ImageModalContent: React.FC<PropsType> = props => {
  return (
    <div className={css.box}>
      <img className={css.img} src={props.value.url} alt={props.value.url} />
    </div>
  )
}

export default ImageModalContent

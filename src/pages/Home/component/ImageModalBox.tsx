import * as React from 'react'
import { MouseEvent, useEffect, useState } from 'react'
import css from './ImageModalBox.module.css'
import classNames from 'classnames'
import iconClose from '../assets/close.svg'

type PropsType = {
  visible: boolean
  onCancel: () => void
}
function hasScrollbar() {
  return (
    document.body.scrollHeight >
    (window.innerHeight || document.documentElement.clientHeight)
  )
}

function getScrollbarWidth() {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText =
    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}

const ImageModalBox: React.FC<PropsType> = props => {
  const [visible, setVisible] = useState(props.visible)
  useEffect(() => {
    if (!hasScrollbar()) {
      return
    }
    if (props.visible) {
      document.body.style.marginRight = getScrollbarWidth() + 'px'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.marginRight = 'initial'
    }
    //必须放到下一次渲染才能保证页面不跳动
    setVisible(props.visible)
  }, [props.visible])

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      props.onCancel()
    }
  }

  return (
    <div
      className={classNames(css.imageModalBox, {
        [css.hide]: !visible,
      })}
      onClick={handleClick}
    >
      {visible && props.children}
      <img
        src={iconClose}
        alt={'close button'}
        className={css.closeButton}
        onClick={props.onCancel}
      />
    </div>
  )
}

export default ImageModalBox

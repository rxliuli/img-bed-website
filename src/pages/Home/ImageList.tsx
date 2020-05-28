import * as React from 'react'
import { useMemo, useState } from 'react'
import css from './ImageList.module.css'
import { ImageEntity } from './entity/ImageEntity'
import ImageItem from './component/ImageItem'
import ImageModalContent from './component/ImageModalContent'
import ImageModalBox from './component/ImageModalBox'
import ImageHeader from './component/ImageHeader'
import { imageApi } from './api/ImageApi'

const ImageList: React.FC = () => {
  const imageList = useMemo(() => imageApi.list(), [])

  const [currentImage, setCurrentImage] = useState<ImageEntity>()
  const [visible, setVisible] = useState(false)
  function showModal(value: ImageEntity) {
    setVisible(true)
    setCurrentImage(value)
  }

  return (
    <div>
      <ImageHeader />
      <section className={css.imgList}>
        {imageList.map((value, index) => (
          <ImageItem
            key={index}
            value={value}
            onClick={() => showModal(value)}
          />
        ))}
      </section>
      <footer>
        <ImageModalBox visible={visible} onCancel={() => setVisible(false)}>
          <ImageModalContent value={currentImage!} />
        </ImageModalBox>
      </footer>
    </div>
  )
}

export default ImageList

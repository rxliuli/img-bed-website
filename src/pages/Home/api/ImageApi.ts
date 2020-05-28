import urlList from '../../../config/DataList.json'
import { dateParse } from 'rx-util'
import { ImageEntity } from '../entity/ImageEntity'

class ImageApi {
  list() {
    return urlList.map(
      url =>
        ({
          url,
          time: dateParse(/\/(\w+)\.png$/.exec(url)![1], 'YYYYMMDDhhmmss'),
        } as ImageEntity),
    )
  }
}

export const imageApi = new ImageApi()

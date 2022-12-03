import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import xyRequest from '@/service/index'
interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  useEffect(() => {
    xyRequest.get({ url: '/banner' }).then((res) => console.log(res))
  }, [])
  return <div>Recommend</div>
}
export default memo(Recommend)

import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Artlist: FC<IProps> = () => {
  return <div>Artlist</div>
}
export default memo(Artlist)

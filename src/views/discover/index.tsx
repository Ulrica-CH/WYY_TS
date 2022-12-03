import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="sunNav">
        <Link to="/discover/recommend">recommend</Link>
        <Link to="/discover/artlist">artlist</Link>
      </div>
      {/* 二级路由的懒加载处理，不加点击切换整个都会闪烁 */}
      <Suspense fallback="loading">
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}
export default memo(Discover)

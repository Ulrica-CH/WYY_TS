import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/recommend'))
const Album = lazy(() => import('@/views/discover/album'))
const Artlist = lazy(() => import('@/views/discover/artlist'))
const Songs = lazy(() => import('@/views/discover/songs'))
const Ranking = lazy(() => import('@/views/discover/ranking'))
const Djradio = lazy(() => import('@/views/discover/djradio'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

// element: <Discover /> tsx文件才有这种写法不能用ts
const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/discover" /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artlist',
        element: <Artlist />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      }
    ]
  },
  { path: '/mine', element: <Mine /> },
  { path: '/focus', element: <Focus /> },
  { path: '/download', element: <Download /> }
]
export default routes

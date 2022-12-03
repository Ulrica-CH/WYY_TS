import { memo, Suspense } from 'react'

import { Link, useRoutes } from 'react-router-dom'

import routes from './router'

export default memo(() => {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">Discover</Link>
        <Link to="/mine">Mine</Link>
      </div>
      <Suspense fallback="loading">{useRoutes(routes)}</Suspense>
    </div>
  )
})

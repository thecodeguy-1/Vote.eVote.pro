import { lazy } from 'react'

const PageLayoutRoutes = [
  {
    path: '/page-layout/collapse-menu',
    component: lazy(() => import('../../views/ui-elements/page-layouts/CollapsedMenu')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/page-layout/layout-boxed',
    component: lazy(() => import('../../views/ui-elements/page-layouts/BoxedLayout')),
    meta: {
      contentWidth: 'boxed'
    }
  },
  {
    path: '/page-layout/without-menu',
    component: lazy(() => import('../../views/ui-elements/page-layouts/WithoutMenu')),
    meta: {
      menuHidden: true
    }
  },
  {
    path: '/page-layout/home',
    component: lazy(() => import('../../views/apps/home')),
    meta: {
      menuHidden: true
    }
  },
  {
    path: '/FrontEnd/ballot',
    component: lazy(() => import('../../views/FrontEnd/ballot')),
    meta: {
      menuHidden: true
    }
  },
  {
    path: '/FrontEnd/instructions',
    component: lazy(() => import('../../views/FrontEnd/instructions')),
    layout: 'BlankLayout'
  },
  {
    path: '/FrontEnd/login',
    component: lazy(() => import('../../views/FrontEnd/login')),
    layout: 'BlankLayout'
  },
  {
    path: '/FrontEnd/otp',
    component: lazy(() => import('../../views/FrontEnd/UserOtp')),
    layout: 'BlankLayout'
  },
  {
    path: '/FrontEnd/results',
    component: lazy(() => import('../../views/FrontEnd/Results')),
    layout: 'BlankLayout'
  },
  {
    path: '/page-layout/layout-empty',
    component: lazy(() => import('../../views/ui-elements/page-layouts/LayoutEmpty'))
  },
  {
    path: '/page-layout/layout-blank',
    component: lazy(() => import('../../views/ui-elements/page-layouts/LayoutBlank')),
    layout: 'BlankLayout'
  }
]

export default PageLayoutRoutes

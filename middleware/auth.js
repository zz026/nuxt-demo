const whiteList = [
  '/',
  '/login',
  // '/home',
]

export default function ({ redirect, route, req, store }) {
  const routePath = route.path
  // console.log('store', req)
  const { token } = store.state
  // if (!whiteList.includes(routePath)) {
  //   !token && redirect('/login?path=' + encodeURIComponent(routePath))
  // }
}
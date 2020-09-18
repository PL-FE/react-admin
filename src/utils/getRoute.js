import routes from '@/router/index.js'

function getRoute(url) {
  let res = []
  routes.forEach((it) => {
    if (it.children && it.children.length) {
      it.children.forEach((c) => {
        if (c.path === url) {
          res = [it.name, c.name]
        }
      })
    }
  })

  return res
}

export default getRoute

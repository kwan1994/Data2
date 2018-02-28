import * as b from 'bobril';
import * as bs from 'bobrilstrap';
import * as routes from './routes'


b.routes(
    b.route(routes.mainPage, [
        b.route(routes.closurePage),
        b.routeDefault(routes.closurePage)
    ])
)
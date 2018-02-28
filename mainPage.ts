import * as b from 'bobril';
import * as toolBar from './components/toolbar/toolbar'
import * as toolBarButton from './components/toolbar/toolbarButton'
import {create as fixedPoints} from './Task2 - closures/page';
export interface IData {
    
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        console.log(me.data.activeRouteHandler())
        me.children = [ toolBar.create({childern: [
            toolBarButton.create({
                onClick: () => {
                    b.runTransition(b.createRedirectPush('fixedPoints'))
                },
                title:"Fixed Points"})]})
            ,me.data.activeRouteHandler()];
    }
});
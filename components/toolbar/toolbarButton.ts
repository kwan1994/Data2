import * as b from 'bobril';
import { IBobrilChildren } from 'bobril';
export interface IData {
    onClick: () => void,
    title: string;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(ctx.data.title,{margin:'0 auto'})
        ];
        b.style(me,style)
    },
    onClick(ctx:IContext,me:IBobrilChildren){
        if (ctx.data.onClick) ctx.data.onClick();
        return true;
    }

});

let style = b.styleDef({
    color: 'white',
    display: 'inline'
})
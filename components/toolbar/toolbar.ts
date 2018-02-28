import * as b from 'bobril';
export interface IData {
    childern: b.IBobrilChildren[]
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = ctx.data.childern;

        b.style(me,toolBarStyle);

    }
});

let toolBarStyle = b.styleDef({
    width: '100%',
    height: '30px',
    position: 'sticky',
    top: 0,
    background: 'black'
})
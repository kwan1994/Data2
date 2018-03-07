import * as b from 'bobril';
import { Database, Theory, getAllFunctionalDependencies } from '../Task2 - closures/Algorithms/functionalDependenciesFunctions';

export interface IData{

}

export interface IContext extends b.BobrilCtx<IData> {
    data: IData
    theory: Theory<string>
}

export let create = b.createComponent<IData>({
    init(ctx:IContext){
        let db:Database = {
            atributes: ["id","jmeno","prijmeni","narozen","vyska"],
            rows: [
                ["1","jan","spaleny","1981","vysoky"],
                ["2","jakub","spaleny","1970","vysoky"],
                ["3","jakub","mazany","1970","vysoky"],
                ["4","jan","spaleny","1980","vysoky"],
                ["5","karel","karel","1971","maly"]
            ]
        }
        ctx.theory = getAllFunctionalDependencies(db)
        
    },
    render(ctx:IContext,me:b.IBobrilNode){
        me.children = [ctx.theory.length.toString()]
    }
})
import * as b from 'bobril';
import { subsetsOfSet } from './Algorithms/setFunctions';
import { isFixedPoint, Theory } from './Algorithms/functionalDependenciesFunctions';
import { mergeToChildren } from 'bobrilstrap';
export interface IData {
    
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
    subsetsThatAreFixedPoints: Set<any>[]
    set: any[];
    theory: Theory<string>;
}

export const create = b.createComponent<IData>({

    
    init(ctx:IContext,me:b.IBobrilNode){
        ctx.subsetsThatAreFixedPoints = [];
        
        subsetsOfSet(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']).forEach(value => {if (isFixedPoint([...theory], new Set(value))) ctx.subsetsThatAreFixedPoints.push(value); });
        
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        
       let childern = [
           {
               tag:'p',
               childern:'Teorie:'
               
           },
           {
            tag:'p',
            childern:'Set:'
            
        },
           b.styledDiv(setToString(new Set(ctx.set)))
        ];

       ctx.subsetsThatAreFixedPoints.forEach(value => childern.push(b.styledDiv(setToString(value))))
       me.children = childern;
    }
});

function setToString(set: Set<{}>): string {
    let string = '';
    set.forEach(value  => string += value);
    return string;
}

let theory: Theory<string> = [{
    setA: new Set<string>(['a','b']), setB: new Set<string>(['c'])
},{
    setA: new Set<string>(['a','c']), setB: new Set<string>(['f','g'])
},
{
    setA: new Set<string>(['e']), setB: new Set<string>(['f','c'])
},
{
    setA: new Set<string>(['c', 'g']), setB: new Set<string>(['g', 'h'])
},
{
    setA: new Set<string>(['d']), setB: new Set<string>(['a','b'])
},
{
    setA: new Set<string>(['g']), setB: new Set<string>(['a', 'e'])
},
{
    setA: new Set<string>(['f']), setB: new Set<string>(['b'])
}];

let set = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
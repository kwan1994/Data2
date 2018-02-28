import { isSubset, union } from "./setFunctions";

export type Theory<T> = {setA:Set<T>,setB:Set<T>}[]

export function isFixedPoint<T>(theory:Theory<T>,set:Set<T>){ 
    
    return isEqual(set,closure(theory,set));
}


function closure<T>(theory: Theory<T>,set:Set<T>){
    let stable;
    do{
        stable = true;
        theory.forEach((value,index) => {
            if(value !== undefined){ 
                theory[index] = undefined;
                if(isSubset(value.setA,set)) {
                    stable = false;
                    set = union(value.setB,set);
                }
            }
        }
    )   
    }
    while(!stable)
    return set;
}

function isEqual<T>(setA:Set<T>,setB:Set<T>){
    
    if(setA.size !== setB.size) return false;

    return isSubset(setA,setB);
}
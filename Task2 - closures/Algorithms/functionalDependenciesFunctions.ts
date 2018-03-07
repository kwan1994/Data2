import { isSubset, union, subsetsOfSet } from "./setFunctions";

export type FunctionalDependency<T> = {
    setA:Set<T>,
    setB:Set<T>
}

export type tuple = string[]

export type Theory<T> = FunctionalDependency<T>[]

export type Database = {
    atributes: string[],
    rows: tuple[]
}


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

export function getAllFunctionalDependencies(db: Database): Theory<string>{
    let theoryOfAllDependencies = getTheoryOfAllDependencies(db);
    


    return theoryOfAllDependencies.filter(functionalDepency => isValidFunctiionalDependency(functionalDepency,db));
}

function getTheoryOfAllDependencies(db:Database){
    let subsets = subsetsOfSet<string>(db.atributes);
    let theory:Theory<string> = [];

    subsets.forEach(setA => {
        subsets.forEach(setB => theory.push({setA:new Set(setA),setB: new Set(setB)}))
    })
    return theory;
}

function isValidFunctiionalDependency(funDep:FunctionalDependency<string>,db:Database):boolean{
    for(let rowA of db.rows){
        let pontetionalRows = []
        for(let rowB of db.rows){
            if(!areRowsValidInFunctionalDependency(rowA,rowB,funDep,db)) return false
        }
    }
    return true
}

function areRowsValidInFunctionalDependency<T>(rowA:string[],rowB:string[],funDep:FunctionalDependency<string>,db:Database){
    return rowA==rowB || !isValidOnAtributes(rowA,rowB,funDep.setA,db.atributes) || isValidOnAtributes(rowA,rowB,funDep.setB,db.atributes);
}


function isValidOnAtributes<T>(rowA:T[],rowB:T[],funDepSet:Set<T>,atributes:T[]):boolean{
    return Array.from(funDepSet).every(attr => {
        let index = atributes.indexOf(attr);
        return rowA[index] === rowB[index]
    })
}
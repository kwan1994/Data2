export function isSubset<T>(setA: Set<T>,setB: Set<T>){

    for(let value of Array.from(setA)){
        if(!setB.has(value)) return false;
    }
    
    return true;
}

export function union<T>(setA:Set<T>,setB:Set<T>){
    let setC = new Set(setB);
    setA.forEach(value => setC.add(value))
    return setC;
}

export function subsetsOfSet(array) {
    return array.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );
  }
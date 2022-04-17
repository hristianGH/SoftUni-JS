function solve(worker){
    if (worker.dizzy) {
        worker.hydration+=worker.weight*0*1*worker.experiance;
        worker.dizzy=false;
    }
    return worker
}
console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ))
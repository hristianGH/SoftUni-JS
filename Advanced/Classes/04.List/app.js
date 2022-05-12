class List{

    constructor(){
        this.elements = [];

    }

    add(element){
        this.elements.push(element);
    }
    remove(index){
        if (this.elements.length>=index) {
            this.elements.splice(index,1);
            return 'done'
        }
        return 'not found'
    }
    get(index){
        if (index<=this.elements.length) {
            return this.elements[index]
        }
        return 'out of range'
    }
    size(){
        return this.elements.length;
    }
}
function solve() {
    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1)); 
    list.remove(1);
    console.log(list.get(1));	
    
}

solve()
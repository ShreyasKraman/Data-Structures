class Stack{

    constructor(){
        this.top = -1;
        this.stack = [];
    }

    push(val){
        this.top++;
        this.stack[this.top] = val;
    }

    pop(){

        if(this.top !== -1){
            let val = this.stack[this.top];
            delete this.stack[this.top];
            this.top--;
            return val;
        }

    }

    peek(){
        if(this.top !== -1){
            return this.stack[this.top];
        }
    }

    printItems(){
        if(this.top!== -1){
            this.stack.map(item => {
                console.log(item);
            });    
        }
    }

}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(9);
stack.pop();
stack.peek();
stack.printItems();
stack.peek();

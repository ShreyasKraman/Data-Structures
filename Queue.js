//A queue and singly linkedlist have similar working
class Queue{

    constructor(){
        this.first = -1;
        this.last = -1;
        this.queue = [];
    }

    enqueue(val){

        if(this.first == -1){
            this.last++;
            this.first++;
            this.queue[this.first] = val;
            return; 
        }

        this.last++;
        this.queue[this.last] = val;
    }

    dequeue(){

        if(this.first === this.last){
            let val = this.queue[this.last];
            delete this.queue[this.last];
            this.first = -1;
            this.last = -1;
            return val;
        }

        let val = this.queue[this.first];
        delete this.queue[this.first];
        this.first++;
        this.last--;
        return val;
    }

    peek(){

        if(this.first !== -1){
            return this.queue[this.first];
        }

    }

    printValues(){

        if(this.first !== -1){

            this.queue.map(item => {
                console.log(item);
            });

        }else{
            console.log("No Values in Queue");
        }

    }


}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(-1);
queue.enqueue(4);
queue.printValues();
queue.dequeue();
console.log(queue.peek());
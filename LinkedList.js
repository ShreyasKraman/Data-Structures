class ListNode{

    constructor(val){
        this.val = val;
        this.next = null; 
    }

}


class LinkedList{

    constructor(){
        this.head = null;
    }

    getRoot(){
        return this.head;
    }

    insert(val){
        
        let newNode = new ListNode(val);

        if(this.head === null)
            this.head = new ListNode(val);
        else{

            let curr = this.head;

            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = new ListNode(val);
        }
    }

    deleteFirst(){
        const node = this.head;
        if(node == null)
            return false;
        else{
            this.head = node.next;
            node.next = null;
            return true;
        }
    }

    deleteLast(){
        let curr = this.head;
        let prev = null;
        if(curr === null){
            return false;
        }else{
            while(curr.next!==null){
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
            return true;
        }
    }

    deleteVal(val){
        let curr = this.head;
        let prev = null;
        if(curr == null)
            return false;
        else{

            if(curr.val === val){
                this.head = curr.next;
                curr.next = null;
                return true;
            }

            while(curr.next!==null&&curr.val !== val){
                prev = curr;
                curr = curr.next;
            }
            if(curr.val === val){
                prev.next = curr.next;
                curr.next = null;
            }
        }
    }

    search(val){

        let node = this.head;
        if(node === null)
            return false;
        else{
            while(node.next!==null){
                if(node.val === val){
                    return true;
                }
                node = node.next;
            }
            return false;
        }
    }

    printValues(){
        let node = this.head;

        while(node!=null){
            console.log(node.val);
            node = node.next;
        }
    }

}

const linkedlist = new LinkedList();
const head = linkedlist.getRoot();
linkedlist.insert(1);
linkedlist.insert(2);
linkedlist.insert(3);
linkedlist.insert(4);
console.log("Original items");
linkedlist.printValues();
console.log("Delete first");
linkedlist.deleteFirst();
linkedlist.printValues();
console.log("Delete last");
linkedlist.deleteLast();
linkedlist.printValues();
console.log("Delete item "+3);
linkedlist.deleteVal(3);
linkedlist.printValues();
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree{

    constructor(){
        this.root = null;
    }

    getRootNode(){
        return this.root;
    }

    insert(val){

        var newNode = new Node(val);

        if(this.root === null)
            this.root = newNode
        else
            this.insertdata(this.root,newNode);
    }

    insertdata(root,newNode){

        if(newNode.val < root.val){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertdata(root.left,newNode);
            }
        }

        else{
            if(root.right == null){
                root.right = newNode;
            }else{
                this.insertdata(root.right,newNode);
            }
        }

    } 

    inorderTraversal(root){

        if(root !== null){
            this.inorderTraversal(root.left);
            console.log(root.val);
            this.inorderTraversal(root.right);
        }
    }

}


const BST = new BinaryTree();
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

let root = BST.getRootNode();
BST.inorderTraversal(root);



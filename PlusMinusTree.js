class Node{

    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

class Tree{

    constructor(){
        this.root = null;
    }

    getRootNode(){
        return this.root;
    }

    insert(val){
        const node = new Node(val);

        if(this.root === null)
            this.root = node;
        else
            this.insertData(this.root,val);
    }

    insertData(root,val){

        if(root.left === null){
            root.left = new Node(val);
            root.right = new Node(val * -1);
        }else{
            this.insertData(root.left,val);
            this.insertData(root.right,val);
        }
    }

    inorderTraversal(node){
        if(node !== null){

            // console.log(node.val);
            this.inorderTraversal(node.left);
            this.inorderTraversal(node.right);
        }
    }

    plusMinus(node,val){

        if(node === null)
            return false;
            // return "";
        else{

            let ans = false;

            let subsum = val + node.val;
            
            // ans += node.val >= 0 ? "+" : "-";

            if(subsum === 0 && node.left === null && node.right === null){
                return true;
                // return ans;
            }
            if(node.left !== null){
                ans = ans || this.plusMinus(node.left,subsum);
                // ans += this.plusMinus(node.left,subsum,ans);
            }
            if(node.right !== null){
                ans = ans || this.plusMinus(node.right,subsum);
                // ans += this.plusMinus(node.right,subsum,ans);
            }

            return ans;
        }
    }

}

const tree = new Tree();
tree.insert(3);
tree.insert(5);
tree.insert(1);
tree.insert(3);
tree.insert(2);
const root = tree.getRootNode();
tree.inorderTraversal(root);
const ans = tree.plusMinus(root,0);
if(ans)
    console.log(ans);
else
    console.log("Not possible");
    //       3
//         /    \
//        5     -5
//      /   \      /\
//     1    -1    1  -1
//    /\     /\
//   3 -3  3  -3
//  /\
// 2  -2
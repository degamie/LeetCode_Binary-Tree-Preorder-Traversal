var preorderTraversal = function(root) {
  //T(C(N)) and S(C(N))==O(1) as it requires constant Space in unit Time
    const output=[];//output initilize
    function preorder(node){//preorder funct declare
        if(!node){//printing Node
            return;
        }
      //Preorder BST Opertation
        output.push(node.val);//Inserting Node's val in Output
        preorder(node.left);//Left order SubTree
        preorder(node.right);//Right order SubTree
    }
    preorder(root);//Printing Root
    return output;//Printing Output
};

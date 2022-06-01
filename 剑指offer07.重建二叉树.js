var buildTree = function(preorder, inorder) {

        if(!preorder.length) return null
        let root=new TreeNode(preorder[0])
        if(preorder.length==1) return root
        let index=inorder.indexOf(preorder[0])
        root.left=buildTree(preorder.slice(1,1+index),inorder.slice(0,index))
        root.right=buildTree(preorder.slice(index+1),inorder.slice(index+1))
        return root

    };

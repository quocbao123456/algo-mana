/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
     const tree = {};

     function parsePath(path){
        const pathArr = path.split("/");
        pathArr.shift()

        let target = tree;    
        pathArr.forEach((curr, index) => {
            if(target.isLast) return;
            if(!target.hasOwnProperty(curr)) {
                target[curr] = { isLast: false };
            }

            target = target[curr];
            if(index === pathArr.length - 1) target.isLast = true;
        });
     }

    folder.forEach((path) => parsePath(path));

    // Traverse
    const result = [];
    function traverse(node, path){
        if(node.isLast) {
            result.push(path);
            return;
        }
        for (const key of Object.keys(node)) {
            traverse(node[key], path + `\\${key}`);
        }
    }

    traverse(tree, "");

    return result
};

removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])
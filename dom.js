window.dom = {
    find(node){
      return document.querySelectorAll(node);  
    },
    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'object'){
                for(let i in name ){
                    node.style[i] = name[i]
                }
            }else if(typeof name === 'string'){
                return node.style[name];
            }
        }
    },
    each(nodeList,fn){
        for(let i = 0;i<nodeList.length;i++){
            fn.call(null,nodeList[i]);
        }
    }
}
// function count(str){
//     const freq = new Map([["U", 0], ["D", 0], ["R", 0], ["L", 0]])

//     for (const char of str) {
//         freq.set(char, freq.get(char) + 1);
//     }


//     return (Math.min(freq.get("U"), freq.get("D")) + Math.min(freq.get("R"), freq.get("L")))*2
// }

// console.log(count("URDR"))
// console.log(count("RRR"))


function degrees(connections, name1, name2){
    const graph= new Map();

    for (const pair of connections) {
        const [node1, node2] = pair.split(":")
        if(graph.has(node1)){
            graph.get(node1).push(node2)
        }else{
            graph.set(node1, [node2])
        }

        if(graph.has(node2)){
            graph.get(node2).push(node1)
        }else{
            graph.set(node2, [node1])
        }
    }

    const queue = [name1];
    const visiteds = new Set([name1]);
    let distance = 1;

    while(queue.length){
        console.log("queue", queue, visiteds)
        const len = queue.length;

        for(let index = 0; index < len; index++){
            const curr = queue.shift();
            for(const nextNode of graph.get(curr)){
                if(!visiteds.has(nextNode)){
                    if(nextNode === name2) return distance;
                    queue.push(nextNode)
                    visiteds.add(queue)
                }
            }
        }
        distance++;
    }

    return -1
}

console.log(degrees(["fred:joe","joe:mary","mary:fred","mary:bill"], "fred", "bill"))

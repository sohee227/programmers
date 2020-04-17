function solution1(numbers, target) {
    var answer = 0;
    let sum = 0;

    /**
     * @param {Array} numbers // 더하고 뺄 숫자들
     * @param {Number} target  // 더하고 빼서 만들 수
     * @param {Number} node    // numbers 길이 만큼
     * 
     */
    const dfs = (numbers, target, node) => {
        console.log(numbers)
        //노드가 넘버스의 길이와 같으면
        if (node === numbers.length) {
            sum = 0;
            for (let num of numbers) {
                sum += num;
            }
            if (sum === target) {
                return answer++;
            }
            //노드가 넘버스의 길이와 다르면
        } else {
            numbers[node] *= 1
            dfs(numbers, target, node + 1)

            numbers[node] *= -1
            dfs(numbers, target, node + 1)
        }
    }

    dfs(numbers, target, 0); // dfs([1,1,1,1,1], 3, 0)

    return answer;
}

function solution(n, computers) {
    var answer = 0;

    const check = [];
    for (const computer of computers) {  // computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
        check.push(false);               // check = [false, false, false]
    }

    function DFS(index) {       // index=0 DFS(0) => index=1 DFS(1)
        check[index] = true;    // 방문체크 check[0] = true => check[1] = true

        for (let i = 0; i < computers.length; i++) {
            if (computers[index][i] === 1 && !check[i]) {
                DFS(i);
            }
        }
    }

    for (let i = 0; i < computers.length; i++) { // computers 의 행의 개수 : 3
        if (!check[i]) { // check[0] = false, check[1] = true, check[2] =false
            DFS(i);      // DFS(0), DFS(2)
            answer += 1; // answer = 2
        }
    }

    return answer;
}

function main() {
    solution1([1, 1, 1, 1], 3)
}

main();

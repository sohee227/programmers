function solution(participant, completion) {
    var answer = '';

    // 참여자 명단과 완주자 명단 정렬
    participant.sort();
    completion.sort();

    // 참여자 명단과 완주자 명단 순서대로 비교
    for (var i = 0; i < completion.length; i++) {
        // 참여자 값과 완주자 값이 다를 경우
        if (participant[i] != completion[i]) {
            // 참여자 값 반환
            answer = participant[i]
            return answer;
        }
    }

    // 차이값이 마지막에 있을 경우 참여자의 마지막 값을 반환
    answer = participant[completion.length]
    return answer;
}

function solution1(clothes) {
    let answer = 1;
    let map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        if (map.get(clothes[i][1]))
            map.set(clothes[i][1], map.get(clothes[i][1]) + 1)
        else map.set(clothes[i][1], 1)
    }
    for (let value of map.values()) {
        answer *= value + 1
    }
    return answer - 1;
}

function main() {
    solution1([1, 1, 1, 1], 3)
}

main();

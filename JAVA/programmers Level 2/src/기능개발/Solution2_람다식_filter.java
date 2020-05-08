package 기능개발;

/*
 * 작업 진도와 작업 속도는 100 미만이므로 크기가 100인 배열 answer를 생성한 후,
 * 작업이 배보되는 날짜의 위치에 배포되는 기능의 수를 +1한다.
 * 람다식으로 answer에서 0이 아닌 수만 뽑아서 배열로 만들면 각 배포마다 몇 개의 기능이 배포되는지 구할 수 있다.
 */

import java.util.Arrays;

class Solution2_람다식_filter {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = new int[100]; // 작업 진도와 작업 속도는 100 미만
        int day = 1;
        for(int i=0; i<progresses.length; i++) { // 작업이 배포되는 날짜를 구한다
            while(progresses[i] + (day*speeds[i]) < 100) {
                day++;
            }
            answer[day]++; // 각 배포마다 몇 개의 기능이 배포되는지 구한다
        }
        // dayOfend에서 i가 0이 아닌 값만 뽑아서 배열로 만든다
        return Arrays.stream(answer).filter(i -> i!=0).toArray();
    }
}
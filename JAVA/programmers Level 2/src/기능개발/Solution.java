package 기능개발;

/*
 * 각 작업이 완료되는데 걸리는 날짜를 먼저 구한 후,
 * 각 배포마다 몇 개의 기능이 배포되는지 구한다.
 */

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
    	int[] answer = {};
    	ArrayList<Integer> answerList = new ArrayList<>();
        int[] day = new int[progresses.length];
             
        // 각 작업이 완료되는데 걸리는 날짜 
        for(int i=0; i<progresses.length; i++) {
        	day[i] = -((progresses[i]-100) / speeds[i]); // 나머지를 반올림하기위해 음수를 나눈다
        }
        
        // 각 배포마다 몇 개의 기능이 배포되는지 구한다
        int d = day[0];
        int count = 1;
        for(int i=1; i<day.length; i++) {
        	if(day[i]-d <= 0) {
        		count += 1;
        	}
        	else {
        		answerList.add(count);
        		d = day[i];
        		count = 1;
        	}
        }
        answerList.add(count);
        
        // arrayList를 배열로 변경
        answer = new int[answerList.size()];
        for(int i=0; i<answerList.size(); i++) {
        	answer[i] = answerList.get(i);
        }
        return answer;
    }
}
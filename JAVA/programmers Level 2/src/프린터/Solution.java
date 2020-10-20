package 프린터;

import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        
        // priorities를 ArrayList로 변경
        ArrayList<Integer> prioritiesList = new ArrayList<>();
        for(int i=0; i<priorities.length; i++) {
        	prioritiesList.add(priorities[i]);
        }
                
        while(true) { // 찾는 값이 나올 때까지 반복
        	if(prioritiesList.get(0) != Collections.max(prioritiesList)) { // 첫 번째 요소가 최댓값이 아니면 출력하지 못함
        		prioritiesList.add(prioritiesList.get(0)); // 첫 번째 값을 마지막에 추가하고
        		prioritiesList.remove(0); // 첫 번째 값을 지운다
        		if(location==0) { // location의 위치가 0이면 맨 뒤로 바꿔줌
        			location = prioritiesList.size() - 1;
        		}
        		else location -= 1; // location의 위치가 0이 아니면 한칸 앞으로 당김
        	}
        	else { // 첫 번째 요소가 최댓값이면 
        		answer += 1; // 출력가능
        		if(location == 0) return answer; // 출력한 값이 찾는 값이면 반복문 종료
        		prioritiesList.remove(0); // 출력한 값이 찾는 값이 아니면 출력한 값을 지운고
        		location -= 1; // location의 위치를 한칸 앞으로 당김
        	}
        }
    }
}

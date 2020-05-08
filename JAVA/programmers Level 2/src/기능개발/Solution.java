package ��ɰ���;

/*
 * �� �۾��� �Ϸ�Ǵµ� �ɸ��� ��¥�� ���� ���� ��,
 * �� �������� �� ���� ����� �����Ǵ��� ���Ѵ�.
 */

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
    	int[] answer = {};
    	ArrayList<Integer> answerList = new ArrayList<>();
        int[] day = new int[progresses.length];
             
        // �� �۾��� �Ϸ�Ǵµ� �ɸ��� ��¥ 
        for(int i=0; i<progresses.length; i++) {
        	day[i] = -((progresses[i]-100) / speeds[i]); // �������� �ݿø��ϱ����� ������ ������
        }
        
        // �� �������� �� ���� ����� �����Ǵ��� ���Ѵ�
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
        
        // arrayList�� �迭�� ����
        answer = new int[answerList.size()];
        for(int i=0; i<answerList.size(); i++) {
        	answer[i] = answerList.get(i);
        }
        return answer;
    }
}
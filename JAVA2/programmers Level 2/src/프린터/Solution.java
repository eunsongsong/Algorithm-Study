package ������;

import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        
        // priorities�� ArrayList�� ����
        ArrayList<Integer> prioritiesList = new ArrayList<>();
        for(int i=0; i<priorities.length; i++) {
        	prioritiesList.add(priorities[i]);
        }
                
        while(true) { // ã�� ���� ���� ������ �ݺ�
        	if(prioritiesList.get(0) != Collections.max(prioritiesList)) { // ù ��° ��Ұ� �ִ��� �ƴϸ� ������� ����
        		prioritiesList.add(prioritiesList.get(0)); // ù ��° ���� �������� �߰��ϰ�
        		prioritiesList.remove(0); // ù ��° ���� �����
        		if(location==0) { // location�� ��ġ�� 0�̸� �� �ڷ� �ٲ���
        			location = prioritiesList.size() - 1;
        		}
        		else location -= 1; // location�� ��ġ�� 0�� �ƴϸ� ��ĭ ������ ���
        	}
        	else { // ù ��° ��Ұ� �ִ��̸� 
        		answer += 1; // ��°���
        		if(location == 0) return answer; // ����� ���� ã�� ���̸� �ݺ��� ����
        		prioritiesList.remove(0); // ����� ���� ã�� ���� �ƴϸ� ����� ���� �����
        		location -= 1; // location�� ��ġ�� ��ĭ ������ ���
        	}
        }
    }
}
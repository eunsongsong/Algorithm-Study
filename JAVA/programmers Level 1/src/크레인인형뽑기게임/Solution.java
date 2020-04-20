package ũ���������̱����;

import java.util.ArrayList;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        ArrayList<Integer> basket = new ArrayList<>(); // ������ ���� �ٱ���
        
        for(int m : moves) { // moves�� ���Ҹ� �� ���� �˻�
        	for(int i = 0 ; i < board.length; i++) {
        		if(board[i][m-1] != 0) { // ������ �ִ� ��ġ�� ã�´�
        			basket.add(board[i][m-1]); // ������ basket�� �־��ְ�
        			board[i][m-1] = 0; // ������ �ִ� ��ġ�� 0���� ����ش�
        			
        			// ���� ����� ������ �� �� �������� �ִ��� ã�´�
        			if(basket.size() > 1 && basket.get(basket.size()-1)==basket.get(basket.size()-2)) {
        				answer += 2;
        				basket.remove(basket.size()-1);
        				basket.remove(basket.size()-1);
        			}
        			break;
        		}
        	}
        }
        
        return answer;
    }
}
package _124�����Ǽ���;

class Solution {
	  public String solution(int n) {
	      String answer = "";
		      char [] num = {'4', '1', '2'};
	      
	      while(n!=0) {
	    	int r = n % 3;
	    	n /= 3;
	    	answer = num[r] + answer;
	    	if(r==0) { n -= 1; } 
	    	/*
	    	 * 3������ 0���� �����Ͽ� 0,1,2,10,11,12,20,....������
	    	 * 124 ������ ���ڴ� 1���� �����Ͽ� 
	    	 * 1,2,4,11,12,14,21,22,24,...�̹Ƿ�
	    	 * �������� 0�϶�, ���� 1��ŭ ���ش�
	    	 */
	      }
	      return answer;
	  }
	}
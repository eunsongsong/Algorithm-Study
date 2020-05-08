package _124나라의숫자;

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
	    	 * 3진법은 0부터 시작하여 0,1,2,10,11,12,20,....이지만
	    	 * 124 나라의 숫자는 1부터 시작하여 
	    	 * 1,2,4,11,12,14,21,22,24,...이므로
	    	 * 나머지가 0일때, 몫을 1만큼 빼준다
	    	 */
	      }
	      return answer;
	  }
	}
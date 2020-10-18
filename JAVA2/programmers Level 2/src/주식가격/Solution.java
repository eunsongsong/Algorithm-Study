package 주식가격;

class Solution {
    public int[] solution(int[] prices) {
    	int answer[] = new int[prices.length]; // prices 길이만큼 배열 생성
    	int i, j, count;
    	
        for(i=0; i<prices.length; i++) {
        	count = 0;
        	for(j=i+1; j<prices.length; j++) {
        		count += 1; // 주식가격이 떨어지지 않은 기간 +1
        		if(prices[j] < prices[i]) { break; } // 주식가격이 떨어지면 종료
        	}
        	answer[i] = count;
        }
        
        return answer;
    }
}
package �ֽİ���;

class Solution {
    public int[] solution(int[] prices) {
    	int answer[] = new int[prices.length]; // prices ���̸�ŭ �迭 ����
    	int i, j, count;
    	
        for(i=0; i<prices.length; i++) {
        	count = 0;
        	for(j=i+1; j<prices.length; j++) {
        		count += 1; // �ֽİ����� �������� ���� �Ⱓ +1
        		if(prices[j] < prices[i]) { break; } // �ֽİ����� �������� ����
        	}
        	answer[i] = count;
        }
        
        return answer;
    }
}
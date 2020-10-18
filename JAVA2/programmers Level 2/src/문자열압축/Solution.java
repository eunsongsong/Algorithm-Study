package ���ڿ�����;

class Solution {
    public int solution(String s) {
        int answer = 1000; // s�� ���̴� 1 �̻�, 1000 ����
        int temp;
        
        // i�� ������ ������ ���ڿ��� �ּ� ���̸� ���Ѵ�	
        for(int i=1; i<((s.length()+1)/2)+1; i++) { // �ִ� ���� ������ ������ s�� ����
        	temp = overlap(s, i);
        	if(answer > temp) {
        		answer = temp;
        	}
        }
        return answer;
    }
    
    // ���ڿ��� �����ϴ� �Լ�
    public int overlap(String s, int n) { // s���ڿ��� n�� ������ ����
    	String answer = "";
    	int count = 1, i = n;
    	
    	// ���ڿ��� ���� �պ��� ������ ���̸�ŭ �ڸ� �� �ִ�!!
    	while(i < s.length()-(s.length()%n)) { // n���� ������ �������� �ڸ������� �ݺ�
    		if(s.substring(i-n, i).equals(s.substring(i, i+n))) { // ���� ������ ���ڿ��� ������
    			count += 1; // ���� ������ ���ڿ� ���� +1
    		}
    		else { // ���� ������ ���ڿ��� ������ answer�� ������ ���ڿ��� �̾� ���δ�
    			if(count == 1) { 
    				answer += s.substring(i-n, i);
    			}
    			else {
    				answer += (String.valueOf(count) + s.substring(i-n, i));
    				count = 1;
    			}
    		}
    		i += n;
    	}
    	// ���� ������ ���ڿ��� ��� ã�� �� �ڿ� ���� ������ ���ڿ�
    	if(count == 1) {
			answer += s.substring(i-n, s.length());
		}
		else {
			answer += (String.valueOf(count) + s.substring(i-n, s.length()));
			count = 1;
		}
    	return answer.length();
    }
}
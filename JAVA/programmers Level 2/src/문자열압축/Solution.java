package 문자열압축;

class Solution {
    public int solution(String s) {
        int answer = 1000; // s의 길이는 1 이상, 1000 이하
        int temp;
        
        // i개 단위로 압축한 문자열의 최소 길이를 구한다	
        for(int i=1; i<((s.length()+1)/2)+1; i++) { // 최대 압축 가능한 단위는 s의 절반
        	temp = overlap(s, i);
        	if(answer > temp) {
        		answer = temp;
        	}
        }
        return answer;
    }
    
    // 문자열을 압축하는 함수
    public int overlap(String s, int n) { // s문자열을 n개 단위로 압축
    	String answer = "";
    	int count = 1, i = n;
    	
    	// 문자열을 제일 앞부터 정해진 길이만큼 자를 수 있다!!
    	while(i < s.length()-(s.length()%n)) { // n으로 나누어 떨어지는 자릿수까지 반복
    		if(s.substring(i-n, i).equals(s.substring(i, i+n))) { // 압축 가능한 문자열이 있으면
    			count += 1; // 압축 가능한 문자열 갯수 +1
    		}
    		else { // 압축 가능한 문자열이 없으면 answer에 압축한 문자열을 이어 붙인다
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
    	// 압축 가능한 문자열을 모두 찾은 후 뒤에 남음 나머지 문자열
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
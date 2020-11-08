package 자릿수더하기;
import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        String[] num = Integer.toString(n).split("");

        for(int i = 0;i<num.length;i++) {
        	answer += Integer.parseInt(num[i]);
        }
        
        return answer;
    }
}
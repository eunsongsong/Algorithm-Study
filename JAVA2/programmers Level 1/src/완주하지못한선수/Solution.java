package �����������Ѽ���;

import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
    	Arrays.sort(participant);
        Arrays.sort(completion);
        
        String[] arr = {"A", "B", "C"};
        ArrayList<String> arrList= new ArrayList<>(Arrays.asList(arr));
        arrList.subList(1, 3);
        System.out.println(arrList.subList(1, 3));
    	
        int i = 0;
        for(i=0; i<completion.length; i++) {
        	if(!(participant[i].equals(completion[i]))) {
        		return participant[i];
        	}
        }
        return participant[i]; // ������ ������ �������� ������ ���
    }
}
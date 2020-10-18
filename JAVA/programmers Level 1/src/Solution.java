import java.util.ArrayList;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        ArrayList<Integer> arr = new ArrayList<>();
        
        for (int i=0; i<numbers.length; i++) {
        	for(int j=i+1;j<numbers.length;j++) {
        		int sum = numbers[i]+numbers[j];
        		System.out.println(sum);
        	}
        }
        return answer;
    }
}
package 기능개발;

import java.util.Arrays;

public class Test {

	public static void main(String[] args) {
		Solution s = new Solution();
		Solution2_lambda_filter s2 = new Solution2_lambda_filter();
		
		int[] progresses = {93,30,55};
		int[] speeds = {1,30,5};

		int[] progresses2 = {93,30,20,55,10,4,1};
		int[] speeds2 = {1,30,7,5,4,8,4};
		
		System.out.println("Solution");
		System.out.println(Arrays.toString(s.solution(progresses, speeds))+" >> [2,1]");
		System.out.println(Arrays.toString(s.solution(progresses2, speeds2))+" >> [2,2,2,1]");
		System.out.println("\nSolution2");
		System.out.println(Arrays.toString(s2.solution(progresses, speeds))+" >> [2,1]");
		System.out.println(Arrays.toString(s2.solution(progresses2, speeds2))+" >> [2,2,2,1]");
	}

}

package 주식가격;

import java.util.Arrays;

public class Test {

	public static void main(String[] args) {
		Solution s = new Solution();
		int[] prices = {1, 2, 3, 2, 3};
		System.out.println(Arrays.toString(s.solution(prices))+" >> [4, 3, 1, 1, 0]"); 
	}

}

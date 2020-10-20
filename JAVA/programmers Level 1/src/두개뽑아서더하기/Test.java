package 두개뽑아서더하기;

import java.util.Arrays;

public class Test {
	public static void main(String[] args) {
		Solution s = new Solution();

		int n1[] = { 2, 1, 3, 4, 1 };
		int n2[] = { 5, 0, 2, 7 };

		System.out.println(Arrays.equals(s.solution(n1), new int[] { 2, 3, 4, 5, 6, 7 }));
		System.out.println(Arrays.equals(s.solution(n2), new int[] { 2, 5, 7, 9, 12 }));
	}

}

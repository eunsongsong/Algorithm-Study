package 문자열내마음대로정렬하기;

import java.util.Arrays;

public class Test {

	public static void main(String[] args) {
		Solution s = new Solution();
		
		String s1[] = {"sun", "bed", "car"};
		String a1[] = {"car", "bed", "sun"};
		
		String s2[] = {"abce", "abcd", "cdx"};
		String a2[] = {"abcd", "abce", "cdx"};
		
		System.out.println(Arrays.equals(s.solution(s1, 1), a1));
		System.out.println(Arrays.equals(s.solution(s2, 2), a2));
	}

}

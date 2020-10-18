package 문자열압축;

public class Test {

	public static void main(String[] args) {
		Solution s = new Solution();
		
		System.out.println(s.solution("aabbaccc")+" >> 7");
		System.out.println(s.solution("ababcdcdababcdcd")+" >> 9");
		System.out.println(s.solution("abcabcdede")+" >> 8");
		System.out.println(s.solution("abcabcabcabcdededededede")+" >> 14");
		System.out.println(s.solution("xababcdcdababcdcd")+" >> 17");		
	}

}

package 완주하지못한선수;

public class Test {

	public static void main(String[] args) {
		Solution s = new Solution();

		String p1[] = {"leo", "kiki", "eden"};
		String c1[] = {"eden", "kiki"};
		
		String p2[] = {"marina", "josipa", "nikola", "vinko", "filipa"};
		String c2[] = {"josipa", "filipa", "marina", "nikola"};
		
		String p3[] = {"mislav", "stanko", "mislav", "ana"};
		String c3[] = {"stanko", "ana", "mislav"};
		
		System.out.println(s.solution(p1, c1) + " >> leo");
		System.out.println(s.solution(p2, c2) + " >> vinko");
		System.out.println(s.solution(p3, c3) + " >> mislav");

	}
}

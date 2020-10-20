package 모의고사;

import java.util.ArrayList;

class Solution {
	public int solution(int n) {
		int answer = ten(sam(n));
		return answer;
	}

	// 3진법으로 바꾼 후 앞뒤로 뒤집기
	public ArrayList<Integer> sam(int n) {
		ArrayList<Integer> arr = new ArrayList<>();
		int r = 0; // 3으로 나눈 나머지
		while (n >= 3) {
			r = n % 3;
			n = (int) (n / 3);
			arr.add(0, r);
		}
		arr.add(0, n);
		return arr;
	}

	// 3진법을 10진법으로
	public int ten(ArrayList<Integer> temp) {
		int num = 0;
		for (int i = 0; i < temp.size(); i++) {
			num += temp.get(i) * Math.pow(3, i);
		}
		return num;
	}
}
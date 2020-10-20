package 두개뽑아서더하기;

import java.util.ArrayList;
import java.util.Arrays;

class Solution {
	public int[] solution(int[] numbers) {
		int[] answer = {};
		ArrayList<Integer> arrList = new ArrayList<>();

		for (int i = 0; i < numbers.length; i++) {
			for (int j = i + 1; j < numbers.length; j++) {
				int sum = numbers[i] + numbers[j];
				if (arrList.indexOf(sum) == -1) {
					arrList.add(sum);
				}
			}
		}

		answer = new int[arrList.size()];
		for (int i = 0; i < answer.length; i++) {
			answer[i] = arrList.get(i);
		}

		Arrays.sort(answer);
//		System.out.println(Arrays.toString(answer));
		return answer;
	}
}
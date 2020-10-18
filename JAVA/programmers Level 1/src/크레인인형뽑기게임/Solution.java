package 크레인인형뽑기게임;

import java.util.ArrayList;

class Solution {
	public int solution(int[][] board, int[] moves) {
		int answer = 0;
		ArrayList<Integer> basket = new ArrayList<>(); // 인형을 담을 바구니

		for (int m : moves) { // moves의 원소를 한 번씩 검사
			for (int i = 0; i < board.length; i++) {
				if (board[i][m - 1] != 0) { // 인형이 있는 위치를 찾는다
					basket.add(board[i][m - 1]); // 인형을 basket에 넣어주고
					board[i][m - 1] = 0; // 인형이 있던 위치를 0으로 비워준다

					// 같은 모양의 인형이 두 개 연속으로 있는지 찾는다
					if (basket.size() > 1 && basket.get(basket.size() - 1) == basket.get(basket.size() - 2)) {
						answer += 2;
						basket.remove(basket.size() - 1);
						basket.remove(basket.size() - 1);
					}
					break;
				}
			}
		}

		return answer;
	}
}

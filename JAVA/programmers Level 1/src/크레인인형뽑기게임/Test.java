package 크레인인형뽑기게임;

public class Test {

	public static void main(String[] args) {
		Solution sol = new Solution();
		
		int[][] board = {{0,0,0,0,0},{0,0,1,0,3},{0,2,5,0,1},{4,2,4,4,2},{3,5,1,3,1}}; 
		int[] moves = {1,5,3,5,1,2,1,4};
		
		System.out.println(sol.solution(board, moves) + " >> 4");
	}

}

package test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

class Main {

	private static int[] X = { -1, 0, 1, 0 }; // X축의 상하좌우 이동을 위한 배열
	private static int[] Y = { 0, 1, 0, -1 }; // Y축의 상하좌우 이동을 위한 배열 (x,y 짝만 맞추어주면 상하좌우든 하좌우상 이든 순서 상관x)
	private static int[][] map;
	private static int cnt = 1;

	private static void solution(int sizeOfMatrix, int[][] matrix) {
		// TODO: 이곳에 코드를 작성하세요.
//		System.out.println(sizeOfMatrix);
//		System.out.println(Arrays.deepToString(matrix));
//
//		// matrix를 탐색한 영역을 체크할 배열
//		int[][] check = new int[sizeOfMatrix][sizeOfMatrix];
//
//		for (int i = 0; i < sizeOfMatrix; i++) {
//			for (int j = 0; j < sizeOfMatrix; j++) {
//				check[i][j] = 0;
//			}
//		}
//		System.out.println(Arrays.deepToString(check));
//
//		ArrayList<Integer[]> answer = new ArrayList<Integer[]>();
//
////		answer.get(0)[0] = 1;
////		System.out.println(answer.get(0)[0]);
//
//		for (int i = 0; i < sizeOfMatrix; i++) {
//			for (int j = 0; j < sizeOfMatrix; j++) {
//				if(matrix[i][j] == 1) {
//					answer.add(new Integer[] { j });
//				}
//			}
//		}
		
//		입력
//		6
//		0 1 1 0 0 0 
//		0 1 1 0 1 1
//		0 0 0 0 1 1 
//		0 0 0 0 1 1
//		1 1 0 0 1 0 
//		1 1 1 0 0 0

		ArrayList<Integer> arr = new ArrayList<Integer>(); // 각 영역의 넓이를 저장할 ArrayList 생성
		Main b = new Main();

		boolean[][] check = new boolean[matrix.length][matrix[0].length]; // 방문한 곳을 체크하기 위한 배열 행렬 생성

		for (int i = 0; i < matrix.length; i++) {
			// System.out.println("다음 찾기 시작");
			// (0,0) 부터 탐색 시작 후 1을 만나면 넓이 구하기 시작
			for (int j = 0; j < matrix[i].length; j++) {
				if (matrix[i][j] == 1) {
					b.dfs(i, j, check, matrix);
					arr.add(cnt);
					cnt = 1;
				}
				// 아닌경우 continue
				else
					continue;
			}
		}
		// System.out.println("프로그램 종료");
		System.out.println("arr : " + arr);
	}

	public void dfs(int x, int y, boolean[][] check, int[][] matrix) {

		System.out.println(x + "," + y);
		check[x][y] = true;
		matrix[x][y] = 0;

		for (int i = 0; i < 4; i++) {
			int nextX = x + X[i];
			int nextY = y + Y[i];
			// 상,하,좌,우 이동 중 범위가 넘어서는 경우 continue
			if (nextX < 0 || nextY < 0 || nextX >= check.length || nextY >= check.length) {
				continue;
			}
			// 방문한곳은 continue
			if (check[nextX][nextY]) {
				continue;
			}
			// 0은 벽이라서 이동할 경로가 벽이면 continue
			if (matrix[nextX][nextY] == 0) {
				check[nextX][nextY] = true;
				continue;
			}

			dfs(nextX, nextY, check, matrix);
			cnt++;
		}
		// System.out.println("END");
		// System.out.println();
	}

	private static class InputData {
		int sizeOfMatrix;
		int[][] matrix;
	}

	private static InputData processStdin() {
		InputData inputData = new InputData();

		try (Scanner scanner = new Scanner(System.in)) {
			inputData.sizeOfMatrix = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));

			inputData.matrix = new int[inputData.sizeOfMatrix][inputData.sizeOfMatrix];
			for (int i = 0; i < inputData.sizeOfMatrix; i++) {
				String[] buf = scanner.nextLine().trim().replaceAll("\\s+", " ").split(" ");
				for (int j = 0; j < inputData.sizeOfMatrix; j++) {
					inputData.matrix[i][j] = Integer.parseInt(buf[j]);
				}
			}
		} catch (Exception e) {
			throw e;
		}

		return inputData;
	}

	public static void main(String[] args) throws Exception {
		InputData inputData = processStdin();

		solution(inputData.sizeOfMatrix, inputData.matrix);
	}
}
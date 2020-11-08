package one;

import java.util.Arrays;
import java.util.Scanner;

class Main {
	private static void solution(int numOfAllPlayers, int numOfQuickPlayers, char[] namesOfQuickPlayers, int numOfGames,
			int[] numOfMovesPerGame) {

		char tagger = 'A'; // 술래
		int taggerPosition = 0; // 술래의 위치
		int[] taggerNum = new int[numOfAllPlayers]; // A부터 차례로 술래를 한 횟수
		taggerNum[0] = 1; // A는 첫 번째 술래이므로

		char player = 66; // B
		char[] players = new char[numOfAllPlayers - 1]; // 술래를 제외한 게임에 참가한 플레이어를 담는 배열
		for (int i = 0; i < numOfAllPlayers - 1; i++) {
			players[i] = (char) player;
			player++;
		}
		System.out.println(Arrays.toString(players));

		
		for (int i = 0; i < numOfGames; i++) {
			taggerPosition = (taggerPosition + numOfMovesPerGame[i]) % (numOfAllPlayers - 1);
			if (taggerPosition < 0) {
				taggerPosition += numOfAllPlayers - 1;
			}

			System.out.println(taggerPosition);
			if (Arrays.binarySearch(namesOfQuickPlayers, players[taggerPosition]) > -1) { // 빠른선수이면 술래 안바뀜
				System.out.println(">>1");
				taggerNum[(int) tagger - 65]++;
			} else { // 빠른 선수가 아니면
				System.out.println(">>2");
				char temp = tagger;
				tagger = players[taggerPosition]; // 자리에 있던 사람이 술래
				players[taggerPosition] = temp; // 이전 술래가 자리에 앉음
				taggerNum[(int) tagger - 65]++;
			}
			System.out.println(">>3");
		}
		System.out.print(Arrays.toString(taggerNum));
		System.out.println(Arrays.toString(players));
		for (int i = 0; i < numOfAllPlayers - 1; i++) {
			System.out.print(players[i] + " ");
			System.out.println(taggerNum[(int) players[i] - 65]);
		}
		System.out.print(tagger + " ");
		System.out.println(taggerNum[(int) tagger - 65]);
	}

	private static class InputData {
		int numOfAllPlayers;
		int numOfQuickPlayers;
		char[] namesOfQuickPlayers;
		int numOfGames;
		int[] numOfMovesPerGame;
	}

	private static InputData processStdin() {
		InputData inputData = new InputData();

		try (Scanner scanner = new Scanner(System.in)) {
			inputData.numOfAllPlayers = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));

			inputData.numOfQuickPlayers = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));
			inputData.namesOfQuickPlayers = new char[inputData.numOfQuickPlayers];
			System.arraycopy(scanner.nextLine().trim().replaceAll("\\s+", "").toCharArray(), 0,
					inputData.namesOfQuickPlayers, 0, inputData.numOfQuickPlayers);

			inputData.numOfGames = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));
			inputData.numOfMovesPerGame = new int[inputData.numOfGames];
			String[] buf = scanner.nextLine().trim().replaceAll("\\s+", " ").split(" ");
			for (int i = 0; i < inputData.numOfGames; i++) {
				inputData.numOfMovesPerGame[i] = Integer.parseInt(buf[i]);
			}
		} catch (Exception e) {
			throw e;
		}

		return inputData;
	}

	public static void main(String[] args) throws Exception {
		InputData inputData = processStdin();

		solution(inputData.numOfAllPlayers, inputData.numOfQuickPlayers, inputData.namesOfQuickPlayers,
				inputData.numOfGames, inputData.numOfMovesPerGame);
	}
}
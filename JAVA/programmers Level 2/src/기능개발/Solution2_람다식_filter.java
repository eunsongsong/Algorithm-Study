package ��ɰ���;

/*
 * �۾� ������ �۾� �ӵ��� 100 �̸��̹Ƿ� ũ�Ⱑ 100�� �迭 answer�� ������ ��,
 * �۾��� �躸�Ǵ� ��¥�� ��ġ�� �����Ǵ� ����� ���� +1�Ѵ�.
 * ���ٽ����� answer���� 0�� �ƴ� ���� �̾Ƽ� �迭�� ����� �� �������� �� ���� ����� �����Ǵ��� ���� �� �ִ�.
 */

import java.util.Arrays;

class Solution2_���ٽ�_filter {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = new int[100]; // �۾� ������ �۾� �ӵ��� 100 �̸�
        int day = 1;
        for(int i=0; i<progresses.length; i++) { // �۾��� �����Ǵ� ��¥�� ���Ѵ�
            while(progresses[i] + (day*speeds[i]) < 100) {
                day++;
            }
            answer[day]++; // �� �������� �� ���� ����� �����Ǵ��� ���Ѵ�
        }
        // dayOfend���� i�� 0�� �ƴ� ���� �̾Ƽ� �迭�� �����
        return Arrays.stream(answer).filter(i -> i!=0).toArray();
    }
}
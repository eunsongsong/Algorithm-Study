### >> 문제: programmers L3 [있었는데요 없었습니다](https://programmers.co.kr/learn/courses/30/lessons/59043)

**관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다.  
보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 SQL문을 작성해주세요.  
이때 결과는 보호 시작일이 빠른 순으로 조회해야합니다.**   
*출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges*   

* ANIMAL_INS 테이블의 구조  
  ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각  
  동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.  

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

* ANIMAL_OUT 테이블의 구조  
ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 각각  
동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.  

|NAME|TYPE|NULLABLE|
|:---:|:---:|:---:|
|ANIMAL_ID|VARCHAR(N)|FALSE|
|ANIMAL_TYPE|VARCHAR(N)|FALSE|
|DATETIME|DATETIME|FALSE|
|NAME|VARCHAR(N)|TRUE|
|SEX_UPON_OUTCOME|VARCHAR(N)|FALSE|

### >> 풀이

```mysql
SELECT ANIMAL_ID, I.NAME
FROM ANIMAL_INS I JOIN ANIMAL_OUTS O USING(ANIMAL_ID)
WHERE I.DATETIME > O.DATETIME
ORDER BY I.DATETIME;
```

### >> 실행 결과

| ANIMAL_ID |   NAME   |
| :-------: | :------: |
|  A381217  | Cherokee |



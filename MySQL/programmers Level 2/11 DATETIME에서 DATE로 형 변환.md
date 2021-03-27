### >> 문제: programmers L2 [DATETIME에서 DATE로 형 변환](https://programmers.co.kr/learn/courses/30/lessons/59414)

**ANIMAL_INS 테이블에 등록된 모든 레코드에 대해,  
각 동물의 아이디와 이름, 들어온 날짜를 조회하는 SQL문을 작성해주세요.  
이때 결과는 아이디 순으로 조회해야 합니다.**   
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

### >> 풀이

```mysql
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d')
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```

### >> 실행 결과

| ANIMAL_ID |  NAME  | 날짜       |
| :-------: | :----: | ---------- |
|  A349996  | Sugar  | 2018-01-22 |
|  A350276  | Jewel  | 2017-08-13 |
|  A350375  |  Meo   | 2017-03-06 |
|  A352555  | Harley | 2014-08-08 |
|  A352713  |  Gia   | 2017-04-13 |


### >> 문제: programmers L3 [없어진 기록 찾기](https://programmers.co.kr/learn/courses/30/lessons/59042)

**천재지변으로 인해 일부 데이터가 유실되었습니다.  
입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을  
ID 순으로 조회하는 SQL문을 작성해주세요.**   
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
| SEX_UPON_OUTCOME | VARCHAR(N) |  FALSE   |

### >> 풀이

```mysql
SELECT O.ANIMAL_ID, O.NAME
# FROM ANIMAL_OUTS O LEFT OUTER JOIN ANIMAL_INS I ON O.ANIMAL_ID=I.ANIMAL_ID 
FROM ANIMAL_OUTS O LEFT OUTER JOIN ANIMAL_INS I USING(ANIMAL_ID)
WHERE I.DATETIME IS NULL;
```

### >> 실행 결과

| ANIMAL_ID | NAME  |
| :-------: | :---: |
|  A349733  | Allie |
|  A349990  | Spice |


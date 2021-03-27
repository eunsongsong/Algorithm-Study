### >> 문제: programmers L4 [보호소에서 중성화한 동물](https://programmers.co.kr/learn/courses/30/lessons/59045)

**보호소에서 중성화 수술을 거친 동물 정보를 알아보려 합니다.  
보호소에 들어올 당시에는 중성화되지 않았지만,  
보호소를 나갈 당시에는 중성화된 동물의 아이디와 생물 종, 이름을  
아이디 순으로 조회하는 SQL 문을 작성해주세요.**   
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

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_OUTCOME | VARCHAR(N) |  FALSE   |

### >> 풀이

###### LIKE

```mysql
SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS I JOIN ANIMAL_OUTS O USING(ANIMAL_ID)
WHERE SEX_UPON_INTAKE LIKE "Intact%" 
    AND (SEX_UPON_OUTCOME LIKE "Spayed%" OR SEX_UPON_OUTCOME LIKE "Neutered%")
ORDER BY I.ANIMAL_ID;
```

###### <>

```mysql
SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS I JOIN ANIMAL_OUTS O USING(ANIMAL_ID)
WHERE SEX_UPON_INTAKE <> SEX_UPON_OUTCOME
ORDER BY I.ANIMAL_ID;
```

### >> 실행 결과

| ANIMAL_ID | ANIMAL_TYPE | NAME      |
| :-------: | :---------: | --------- |
|  A382192  |     Dog     | Maxwell 2 |
|  A410330  |     Dog     | Chewy     |
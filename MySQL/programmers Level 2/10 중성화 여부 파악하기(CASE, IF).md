### >> 문제: programmers L2 [중성화 여부 파악하기](https://programmers.co.kr/learn/courses/30/lessons/59409)
**보호소의 동물이 중성화되었는지 아닌지 파악하려 합니다.  
중성화된 동물은 SEX_UPON_INTAKE 컬럼에  
'Neutered' 또는 'Spayed'라는 단어가 들어있습니다.  
동물의 아이디와 이름, 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요.  
이때 중성화가 되어있다면 'O', 아니라면 'X'라고 표시해주세요.**   
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

###### CASE

```mysql
SELECT ANIMAL_ID, NAME,
    CASE 
    WHEN SEX_UPON_INTAKE LIKE "%Neutered%" THEN "O"
    WHEN SEX_UPON_INTAKE LIKE "%Spayed%" THEN "O"
    ELSE "X" 
    END AS "중성화"
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```

###### IF

```mysql
SELECT ANIMAL_ID, NAME,
    IF(SEX_UPON_INTAKE LIKE "%Neutered%" 
       OR SEX_UPON_INTAKE LIKE "%Spayed%", "O", "X") AS "중성화"
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```

### >> 실행 결과
| ANIMAL_ID |   NAME    | 중성화 |
| :-------: | :-------: | ------ |
|  A355753  |  Elijah   | O      |
|  A373219  |   Ella    | O      |
|  A382192  | Maxwell 2 | X      |

# CASE문

```mysql
CASE
WHEN 조건 THEN 특정한 다른 값
WHEN 조건 THEN 특정한 다른 값
ELSE 조건이 아닌 경우
END
```

# IF문

```mysql
IF(조건, "참", "거짓")
```


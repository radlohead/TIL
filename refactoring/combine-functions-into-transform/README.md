### 여러 함수를 변환 함수로 묶기

1. 변환할 레코드를 입력받아서 값을 그대로 반환하는 변환 함수를 만든다.
    - 이 작업은 대체로 깊은 복사로 처리해야 한다. 변환 함수가 원본 레코드를 바꾸지 않는지 검사하는 테스트를 마련해두면 도움될 때가 많다.
2. 묶을 함수 중 함수 하나를 골라서 본문 코드를 변환 함수로 옮기고, 처리 결과를 레코드에 새 필드로 기록한다. 그런 다음 클라이언트 코드가 이 필드를 사용하도록 수정한다.
    - 로직이 복잡하면 함수 추출하기 부터 한다.
3. 테스트한다.
4. 나머지 관련 함수도 위 과정에 따라 처리한다.

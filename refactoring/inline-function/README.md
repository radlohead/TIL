### 함수 인라인화 하기 절차

-   다형성 메소드인지 확인한다.
    -   서브클래스에서 오버라이드하는 메소드는 인라인하면 안된다.
-   인라인할 함수를 호출하는 곳을 모두 찾는다.
-   각 호출문을 함수 본문으로 교체한다.
-   하나씩 교체할 때마다 테스트한다.
    -   인라인 작업을 한번에 처리할 필요는 없다. 인라인하기가 까다로운 부분이 있다면 일단 남겨두고 여유가 생길 때마다 틈틈이 처리한다.
-   함수 정의(원래 함수)를 삭제한다.

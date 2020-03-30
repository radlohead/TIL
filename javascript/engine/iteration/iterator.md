### 이터러블 프로토콜

-   이터러블 프로토콜이란?
    -   오브젝트가 반복할 수 있는 구조이어야 하며 Symbol.iterator를 갖고 있어야 함
-   아래의 빌트인 오브젝트는 디폴트로 이터러블 프로토콜을 갖고 있음
    -   즉 Symbol.iterator를 갖고 있음
    -   Array, Argument, String, TypedArray, Map, Set, DOM NodeList

### 이터러블 오브젝트

-   이터러블 오브젝트
    -   이터러블 프로토콜을 갖고 있는 오브젝트
    -   반복구조, Symbol.iterator()
    -   스펙에서는 @@iterator()로 표기
-   이터러블 오브젝트 구조
-   자체 오브젝트에는 없지만
    -   이터러블 오브젝트를 상속받아도 됩니다
    -   즉, prototype chain(**proto**)에 있으면 됩니다
    -   예를 들어, Array 오브젝트를 상속받으면 이터러블 오브젝트가 됩니다

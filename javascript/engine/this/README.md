### this와 인스턴스

-   인스턴스 목적?
    -   인스턴스마다 고유 값 유지
-   인스턴스에서 this의 목적?
    -   this로 인스턴스를 참조하여 this.name 형태로 프로퍼티에 접근
-   **proto** 프로퍼티 접근
    -   prototype에 연결된 프로퍼티가 인스턴스의 **proto**에 첨부되며 this.method() 형태로 **proto**에 첨부된 method() 호출

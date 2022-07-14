## REST ful API

---

- REST 란 REoersentational State Tronsfer의 약자이다. 여기에 ~ful 아러는 형용사형 어미륿  
붙여 ~한 API라는 표현이다 즉 REST의 기본 원칙을 성실히 지킨 서비스 디자인을`RESTful`하다고 표현할 수 있다.

- REST는 디자인 패턴이다. 아키텍처다 등 많은 이야기가 존재하는데, REST는 하나의 아키텍처로 볼 수 있다.  
  좀 더 명확한 표현으로는 REST는 `Resource Oriented Architecture`이다 API 설계 중심 자원(Resource)이  
  있고 HTTP Method를 통해 자원을 처리하도록 설계하는 것이다.

## REST 6 가지 원칙

---

- Uniform Interface
  - 하나의 URL로 한개의 데이터만 가져와야한다.
  - URL만 보고도 어떤 정보가 들어올지 예측 가능하게 설계하라.
- Stateless
  - 요청들은 각각 독립적으로 처리되어야한다.
  - 요청간의 의존성이 없어야한다.
- Caching
  - 요청을 통해 보내는(이미지 등) 자료들은 캐싱이 가능해야 한다.
  - 캐싱을 위한 버전을 관리해야한다.
- Client-Server
  - 브라우저의 역할 - 요청(Request)
  - 서버의 역할 - 응답(Response)
- Code on demand
  - 서버는 사용자에게 실제로 실행 가능한 코드를 전송해 줄수있다.
- Layered System
  - 요청을 처리하는곳, DB에 저장하는곳 이런 여러단계를 거쳐 요청을 처리해도 된다.

## RESTful 하게 API를 디자인 한다는것은 무엇을 의미하는가.

1. 리소스 와 형태를 명시적이고 직관적으로 분리한다.  
   - 리소스는 `URI`로 표현되는데 리소스가 가리키는 것은 `명사`로 표현되어야 한다.
   - 행위는 `HTTP Method`로 표현하고, GET(조화), POST(생성) ,PUT(전체수정),  
     PATCH(부분 수정),DELETE(삭제) 를 분명한 목적으로 사용한다.
2. Message는 Header 와 Body를 명확하게 분리해서 사용한다
   - Entity에 대한 내용은 body에 담는다.
   - 애플리케이션 서버가 행동할 판단의 근거가 되는 컨트롤 정보인 API 버전 정보를  
응답받고자 하는 MIME 타입 등은 header에 담는다.
   - heade 와 body는  http header 와 http body로 나눌 수 있고   
   http body에 들어가는 json 구조로 분리할 수도 있다.
3. API 버전을 관리한다
   - 환경은 항상 변하기 때문에 API의 Signature 가 변경될 수도 있음으ㅔ 유의하자.
   - 특정 API 를 변경할 때는 반드시 하위호환성을 보장해야 한다.
4. 서버와 클라이언트가 같은 방식을 사용해서 요청하도록 한다
   - 브라우저는 form-data 형식의 submit 으로 보내고 서버에서는 json 형태로 보내는  
     식의 분리보다는 json 으로 보내든, 둘다 form-data 형식으로 보내든 하나로 통일해야 한다.

## RESTful API 는 어떤 장정이 있을까?
1. Open API를 제공하기 쉽다
2. 멀티플랫폼 지원 및 연동이 용이하다.
3. 원하는 타입으로 데이터를 주고받을 수 있다.
4. 기존의 웹 인프라(HTTP)를 그대로 사용할 수 있다.

## RESTful API 는 어떤 단점이 있을까?
1. 사용할 수 있는 메소드가 4가지 밖에 없다.
2. 분산 환경에는 부적합하다.
3. HTTP 통신 모델에 대해서만 지원한다.
# HTML

--- 

- HTML 은 `Hyper Text Markup language`의 약자로 마크업 구성에 가장 많이 사용되는 언어이다.
- HTML의 표준은 과거와 딜리 현제는 살아있는 표준(Living Standard) 이며 웹 개발자, 벤더사, 이해 당사
  등에게 피드백을 받으며 지속 업데이트 되는 표준이다.

## HTML의 요소 구성
###  1. 일반요소(div, span, h1 ....)
```html
<h1>Hello World</h1>
```
1. Element : h1 태그 를 통들어서 Element 라고 한다.
2. StateTag : h1 테그를 시작하는 부분을 StateTag 라고 한다.
3. EndTag : h1 태그를 닫는 부분을 EndTag 라고 한다.
4. Content : h1 태그 안에 있는 Text를 Content 라고한다.

### 2. void 요소(input, link, meta .....)
```html
<input type="text" />
```
- void요소는 State태그와 EndTag태그가 하나의 태그로 이루어진 요소를 말한다.

## Tag의 Attributes (태그의 속성)
 - 태그의 형태나 동작을 제어하도록 사용자가 지정하는 값
 ```html
      <input type="text">
      <input type="password">
```
## HTML 문서 골격
#### 1. DOCTYPE
  - DOCTYPE은 문서의 HTML 버전을 지정하는 태그로 `<!DOCTYPE html>`로 작성한다면  
HTML5로 작성된 문서임을 나타낸다, 모던 브라우저 에서는 DOCTYPE을 명시 하지 않아도 자동으로  
HTML5로 인식한다 하지만 IE9 이전 버전의 브라우저 에서는 다른 형태의 문서로 인식하기 때문에  
  - 일관된 렌더링을 위해 DOCTYPE을 명시해야 한다.

#### 2. html 
  - html 태그는 문서의 루트 지점을 명시하는 태그이며, 이 태그를 작성할때 `lang`속성을   
  해당 서비스 국가에 맞게 넣는것이 중요하다. lang 속성을 지정해 문서의 언어가  
  스크린 리더 등의 장치에서 일관되게 판단되도록 해야하며 다국어를 지원하는 서비느라면  
  언어가 변경될때 lang 속성 또한 변경해야 한다.
```html
<!DOCTYPE>
<!-- 한국은 ko, 미국은 en 이다 -->
<html lang="ko">
</html>
```

#### 3. head
  - head 태그는 문서의 제목과 인코딩 형식 등을 지정하는 태그이다.
  - head 태그의 자주 사용되는 태그는
    1. title
```html
<!DOCTYPE>
<html lang="ko">
<head>
  <title> 문서의 제목 </title>
  <meta charset="UTF-8">
</head>
  <body>
    문서의 내용을 담는 태그
  </body>
</html>
```
# 11650 좌표 정렬하기

## array.sort 메서드 활용

```javascript
input.sort((a, b) => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  if (x1 === x2) return y1 - y2;
  else return x1 - x2;
});
```
x가 같을땐 y좌표 비교, x가 다를땐 x좌표 비교를 통해 정렬해준다!

# 10866 덱

큐처럼 클래스 구현, 하지만 front와 back 둘다 구현해주어야 한다

## 옵셔널 체이닝
```javascript
  pop_back() {
    if (this.s === 0) return -1;
    const b_v = this.b.v;
    this.b = this.b.prev;
    if (this.b.next) this.b.next = null;
    this.s -= 1;
    return b_v;
  }
```

이 코드를 그대로 실행할 경우 this.b.next가 없다고 오류가 뜬다, 덱의 사이즈가 1이었다면, this.b = this.b.prev로 인해 this.b ==null이 되고 , this.b.next는 null의 next속성을 조회하는것이기 때문에 오류가 발생한다.   
따라서 여기서는 
```javascript
if(this.b?.next) this.b.next =null;
```
을 통해서, b가 null이어도 오류없이 넘어갈 수 있게 처리해준다!!


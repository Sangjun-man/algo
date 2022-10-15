# 10845 큐

## Node,Queue 클래스로 구현
객체 하나를 다룰 때 클래스가 편하니까, Node와 Queue는 클래스로 구현했다   . 

   Node 
   * value  : 정수값
   * prev : 앞에 위치한 노드 가리킴
   * next : 뒤에 위치한 노드 가리킴


   Queue   
   * 메서드 - 문제에서 필요로 하는 메서드 그대로 구현
   * f : 맨 앞 노드
   * b : 맨 뒤 노드
   * s : 큐 안에 든 노드 갯수
> 클래스 사용 시 this 키워드를 잊지 말고 잘 써주어야 한다

## pop - front, push - back Node 연결 잘 해주기
size가 0일때 push pop, 1일때 pop을 주의해서 메서드를 작성해야한다

### push
  ```javascript
  push(x) {
    const xNode = new Node(x);
    if (!this.s) {
      this.f = xNode;
      this.b = xNode;
      this.s += 1;
      return;
    }
    this.b.next = xNode;
    xNode.prev = this.b;
    this.b = xNode;
    this.s += 1;
  }
  ```
* 인풋값이 정수로만 주어지므로 Node를 만들어서 큐에 넣는다
* size가 0일경우 front, back을 처음 Push해준 노드로 설정해야한다
* 현재 back 노드 다음노드로 xNode(push 받은 값으로 만든 노드)연결, + 큐 클래스의 back 노드를 xNode로 설정

### pop
```javascript
  pop() {
    if (!this.s) return -1;
    const fValue = this.f.value;
    if (this.s == 1) {
      this.f = null;
      this.b = null;
    } else {
      this.f = this.f.next;
      this.f.prev = null;
    }
    this.s -= 1;
    return fValue;
  }
```
* s가 0일때 pop해줄수 없으니 -1 리턴
* s가 1일때, queue를 초기화 해주어야 하니, this.f와 this.b를 null로 초기화한다


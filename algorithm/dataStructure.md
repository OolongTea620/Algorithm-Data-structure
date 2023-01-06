# 자료구조 (Data Structure)

## 단일 연결 리스트 (Single Linked List)
```
- head, tail, length 를 프로퍼티로 가짐   
- 배열과 달리 바로 접근할 인덱스는 없음
- node라고 하는 데이터의 연결로 이루어짐 
- node는 value와 pointer를 가짐
- pointer는 다음 노드 메모리 주소를 가리킴
- haed는 시작 노드 tail은 리스트의 마지막 노드를 가리킴
```

**빅 오**   

| 경우 |    복잡도    |
| :--- | :----------: |
| 삽입 |     O(1)     |
| 삭제 | O(1) or O(N) |
| 탐색 |     O(N)     |
| 접근 |     O(N)     |

## 양방향 연결 리스트 (Double Linked List)
단일 연결 리스트 노드에 추가로 **자신의 앞쪽 노드를 가리키는 포인터가 존재**하는 자료구조

사용
- 인터넷 사용 기록 정보 저장 시 (앞으로 가기, 뒤로가기 ...)
  
- 단일 연결 리스트에 비해서 메모리를 많이 사용한다.
**빅 오**   

| 경우 |     복잡도     |
| :--- | :------------: |
| 삽입 |      O(1)      |
| 삭제 |      O(1)      |
| 탐색 |      O(N)      |
| 접근 | O(N) or O(N/2) |

## 스택 (Stack)

## 큐 (Queue)

## 트리  (Tree)
하나의 시작 (root)를 시작으로 분기적으로 저장된 데이터의 형태.	

사용 예시
- HTML: DOM
- JSON
...등

### 종류
- 트리(Trees)
- 이진트리(Binary Trees)

### 이진 트리
**이진트리**의 전체 노드 순회 수행

- 모든 부모 노드는 자식 노드 보다 값이 크다
- 부모노드의 모든 왼쪽 자식 노드는 항상 부모노드 보다 작다.
- 부모 노드의 모든 오른쪽 노드들은 항상 부모 보다 큰 값을 가진다.

#### 1. 이진 트리 탐색 , 삽입
root를 시작으로 정렬된(유효한) 이진 트리 탐색을 하는 것
- 현재 노드 값이 찾고자 하는 값보다 **크면** **오른쪽 노드를 탐색**한다.
- 현재 노드 값이 찾고자 하는 값보다 **작으면** **왼쪽 노드를 탐색**한다.

**빅 오**   
거의 log(1)에 가까울 정도로 시간복잡도가 작다.      
보장 X
| 경우 | 복잡도  |
| :--- | :-----: |
| 삽입 | O(logN) |
| 탐색 | O(logN) |

## **트리 탐색**
### 1. 너비 우선 탐색 (BFS: Breadth First Search)
자식 노드를 탐색하기 전에 
**형제 노드 (같은 깊이의 노드들)을 먼저 방문하는** 트리 탐색


### 2. 깊이 우선 탐색 (DFS: Depth First Search)
형제 노드로 넘어가기 전에, **자식노드를 먼저 방문해** 수직으로 트리의 끝까지 내려가는 방식의 트리 탐색

```javascript
 BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        
        queue.push(node);
        while(queue.length){
            node = queue.shift(); // 탐색 완료된 노드 꺼내기
            data.push(node); // 방문한 노드에 넣어줌 (노드 방문 표시의 의미)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
        
    } //end BFS

```
#### - 전위 탐색
부모 -> 왼쪽 자식 -> 오른 자식

```javascript
DFSPreOrder(){ // 전위 순회
        let data = [];
        let current = this.root;
        function traverse (node) {
            data.push(node.value); // 방문 노드에 넣기
            if (node.left) traverse(node.left); // 왼쪽 먼저 탐색
            if (node.right) traverse(node.right); // 오른쪽 자식 트리 탐색;
        }
        traverse(this.root); //루트 호출
        return data;
    } // end DFSPreOrder

```
#### - 후위 참색
왼쪽 자식 -> 오른 자식 -> 부모       
**root 노드를 가장 마지막에 방문**
```javascript
DFSPostOrder(){ //후위 순회
        let data = [];
        let current = this.root;
        function traverse (node) {
            if (node.left) traverse(node.left); // 왼쪽 먼저 탐색
            if (node.right) traverse(node.right); // 오른쪽 자식 트리 탐색;
            data.push(node.value); // 노드 방문 노드에 넣기
        }
        traverse(this.root); //루트 호출
        return data;
} // End DFSPostOrder
```
#### - 중위 탐색
왼쪽 자식 -> 부모 -> 오른 자식
 
```javascript
DFSInOrder(){
        let data = [];
        let current = this.root;
        function traverse (node) {
            if (node.left) traverse(node.left); // 왼쪽 먼저 탐색
            data.push(node.value); // 방문 노드에 넣기
            if (node.right) traverse(node.right); // 오른쪽 자식 트리 탐색;
            
        }
        traverse(this.root); //루트 호출
        return data; 
    } // End DFSInOrder

```

## 이진 힙(Binary Heaps)
이진 탐색 트리와는 다르게 왼쪽과 오른쪽에 순서가 존재하지 않음

- 힙은 우선순위 큐에 사용됨
- 중요한 정도에 따라서 큐 안에 적절한 장소에 배치 가능
- 그래프순회에 자주 쓰임
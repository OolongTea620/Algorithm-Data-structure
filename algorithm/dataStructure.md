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
tjsdlqFIFO (First In First Out)
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

특징

- 부모노드는 최대 두 개의 자식노드를 가진다
- 최대 이진 힙에서 부모노드는 항상 자식노드 보다 큰 값을 가진다.
- 최소 이진 힙은 부모 노드가 항상 자식노드 보다 작은 값을 가진다. -> 즉 root는 최소값이다.
- 최적의 용량을 가진다

**빅 오**   

| 경우 |     복잡도     |
| :--- | :------------: |
| 삽입 |      O(logN)      |
| 삭제 |      O(logN)      |
| 탐색 |      O(N)      |

### 힙 정렬

```text
- 배열 (Array)에 구현
- 부모 인덱스 -> n
- 왼쪽 자식노드는 2n + 1에 저장
- 오른쪽 자식노드는 2n + 2에 저장
```

#### 최소정렬 힙 구현

```javascript
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        // 값을 넣는 함수
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        // 들어간 값을 기준으로 그 값을 다시 재배치하는 과정.
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            console.log(parentIdx);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx; // 무한 루프 방지
        }
    }
    extractMax(){
        const max = this.values[0];
        const end =this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        //값을 제거하고 알맞게 이진힙을 정렬하는 과정
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx= 2 * idx + 1;
            let rightChildIdx= 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            
            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if (leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                   ) {
                    swap =rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] =  element;
            idx = swap;
        }
    }
    
}

let heap = new MaxBinaryHeap();
heap.insert(41); 
heap.insert(39); 
heap.insert(33); 
heap.insert(18); 
heap.insert(27); 
heap.insert(12); 
heap.insert(55); 
```

### 우선 순위 큐(Priority Queue)

각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조

#### 우선 순위 큐 구현

```javascript
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        // 들어간 값을 기준으로 그 값을 다시 재배치하는 과정.
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            console.log(parentIdx);
            let parent = this.values[parentIdx];
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx; // 무한 루프 방지
        }
    }
    dequeue(){
        const max = this.values[0];
        const end =this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        //값을 제거하고 알맞게 이진힙을 정렬하는 과정
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx= 2 * idx + 1;
            let rightChildIdx= 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            
            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority > element.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                   ) {
                    swap =rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] =  element;
            idx = swap;
        }
    }
}

```

## 해시 (Hash)

key-value 방식의 데이터 구조    
key로 value에 접근한다

**빅 오**   
(평균적인 케이스)
| 경우 |     복잡도     |
| :--- | :-----------: |
| 삽입 |      O(1)      |
| 삭제 |      O(1)      |
| 탐색 |      O(1)      |

## 그래프 (Graphs)

유한하고 변할 수 있는 꼭지점이나 노드나 점들의 집합으로 구성된 데이터 구조

노드나 노드들의 연결을 모은 것 

- 꼭지점에 순서가 있으면 -> 유뱡향 그래프 
- 꼭지점에 순서가 없으면 -> 무방향 그래프

Usage   

- 인스타 팔로우...
- 길찾기 (경로 찾기) 등...


**종류**    

무방향 그래프, 유방향 그래프, 가중 그래프

어떻게 저장하는지?

1. 리스트 사용 vs 행렬 사용
2. 해시테이블 사용

- 간선에 따라서 그래프 순회가 이루어져야 한다.

```javascript

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    //정점 추가
    addVertex(vertex) { // 정점 추가
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    
    // 간선 추가
    addEdge(v1,v2){
    //1. 간선을 추가시, 두 개의 정점을 명시해야한다.
    //2. adjacencyList에서 vertex1의 키를 찾아서 vertex2를 그 배열에 넣어줘야 한다.
    //3. vertex2에도 동일하게 적용한다.
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    //간선 제거
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    //정점 제거
    removeVertex(vertex){
        // 정점 제거시, 정점에 있는 모든 간선도 삭제, removeEdge 실행
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}
```

### 그래프 순회

- 그래프에 있는 모든 정점을 다 방문 한다는 의미

#### 그래프 깊이 우선 탐색

한 인접점을 찾고 그 인접점과 연결된 정점을 이어서 탐색한다.

#### 그래프 너비 우선 탐색

### 다익스트라 알고리즘 (Dijkstra's Algorithm)

가중치 그래프를 다루는 알고리즘

두 정점 간 가장 빠른 경로를 찾는 알고리즘   

양방향 그래프, (노드, 간선, 가중치 부여)

Usage
- GPS : 최단 경로
- Network Routing : 최단 데이터 전송 길이 찾기
- Biology (바이러스 전파도)
- Airline tickets : 최저가 검색...
- 등등...

#### 1. 가중치 그래프 작성

#### 2. 접근법

1. 새로운 노드를 방문할 때마다 가장 작은 거리를 가지는 노드에 먼저 방문
2. 노드에 거쳐간 모든 값을 저장하고 이전 값보다 작다면 갱신하고 경유 노드 정보에 저장
3. 노드 우선순위 저장 데이터 추적으로 최단 거리 찾기


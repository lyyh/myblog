## Node原理组成
1. Event Loop 事件循环   
2. Event driven 事件驱动  

### Event Loop 事件循环
- 事件循环在IO操作中的作用  
由事件循环（Event Loop）分发 I/O 任务，最终工作线程（Work Thread）将任务丢到线程池（Thread Pool）里去执行，而事件循环只要等待执行结果就可以了  


### 参考文献
[如何正确学Node.js](https://i5ting.github.io/How-to-learn-node-correctly/#1)
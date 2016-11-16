// Creates a queue for Microsoft to handle orders for the new Surface


class Queue{
  constructor(){
    this._storage = {};
    this._start = -1; //replicating 0 index used for arrays
    this._end = -1; //replicating 0 index used for arrays
  }

  // create a way for people who click-buy to be added to the queue
  enqueue(val){
    this._storage[++this._end] = val;

    //++this._end increments the end variable first;
    //equivalent to 
    //this._end++ //->
    //this._storage[this._end] = val;
  }

  size(){
    return this._end - this._start; // tracks queue's size without using a counter
  }
}

let microsoftQueue = new Queue();
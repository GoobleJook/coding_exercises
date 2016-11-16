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

  dequeue(){
    if(this.size()){ //check if there are values
      let nextUp = this._storage[++this._start];
      delete this._storage[this._start];
      
      if(!this.size()) { //recheck after incrementing (!0 == true )
        this._start = -1;
        this._end = -1;
      }
      return nextUp;
    }
  }

  size(){
    return this._end - this._start; // tracks queue's size without using a counter
  }
}

let microsoftQueue = new Queue();

microsoftQueue.enqueue("{user: ILoveWindows@gmail.com}")
microsoftQueue.enqueue("{user: cortanaIsMyBestFriend@hotmail.com}")
microsoftQueue.enqueue("{user: InternetExplorer8Fan@outlook.com}")
microsoftQueue.enqueue("{user: IThrowApplesOutMyWindow@yahoo.com}")

// console.log(microsoftQueue)

//Function to send everyone their Surface Studio!
let sendSurface = recepient => {
  // sendTo(recepient);
  console.log(recepient);
}

//When your server is ready to handle this queue, execute this:
while(microsoftQueue.size() > 0){
  sendSurface(microsoftQueue.dequeue());
}
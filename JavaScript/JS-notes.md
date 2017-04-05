**What the Heck is the Event Loop?**
*https://www.youtube.com/watch?v=8aGhZQkoFbQ*

Learned:
Stack is in JavaScript (V8, etc.) and runs synchronously. When something is returned from the function in the stack, the function call is removed off the stack. 

Since JS is single-threaded (can only run one thing at a time), in order to prevent delays, we use tricks like setTimeout and callbacks, and other webAPIs, which do their function and then return their result to the Task Queue. They are in the browser, not the JS stack.

The Event Loop cycles through the stack and task queue. If stack is empty it pushes the first event from the task queue into the stack, where it returns its result.

Practical Tips:
Setting callback function timeout to zero pushes it back to the end of the stack. 

//  Component     What It Does?                                 
//  -----------  -------------------------------------------- 
//  JS Engine     Runs your code (V8, SpiderMonkey, etc.)      
//  Call Stack    Tracks function execution                    
//  Memory Heap   Stores variables/objects                     
//  Web APIs      Handle async tasks (e.g., setTimeout)        
//  Event Loop    Coordinates async callback execution         
//  Task Queues   Microtask (Promises), Macrotask (setTimeout) 

// Your Code → JavaScript Engine → Call Stack + Memory Heap → Web APIs → Task Queues (Microtask & Macrotask) → Event Loop → Call Stack (again!)

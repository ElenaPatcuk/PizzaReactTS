import React, {useState, useEffect} from "react";

function Example(){
    const [count, setCount] = useState(0)

    return(
        <div className="App">
            <p>You pushed {count} times</p>
            <button onClick={()=> setCount(count+2)}>
                Push on me
            </button>
        </div>
    )
}

// export default Example

function Example_2 (){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `You pushed ${count} times`
    })

    return(
        <div className="App">
            <p>You pushed {count} times</p>
            <button onClick={()=> setCount(count+1)}>
                Push on me
            </button>
        </div>
    )
}

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
  
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  
    useEffect(() => {
      ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
      };
    })

    return isOnline
  }

  export default useFriendStatus
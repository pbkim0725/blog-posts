The implementation of HTTP itself is stateless, that is achieved by hiding the underlying TCP connection. Example you as an HTTP client do not have access to the stateful tcp connection, so if the connection broke, disconnected or the server just restarted etc.. the HTTP client will establish a new tcp connection without you knowing and it will work normally. This is also possible because HTTP is a request response system..

However if you are a client that directly use a raw tcp connection ,and that tcp connection is closed or. the server got restarted. You are maintaining the state of the TCP connection and guess what its gone. Now your application state is “disconnected” so you are responsible to reestablish the connection yourself..

back to the definition of stateless, if the state is gone the application should keep running.

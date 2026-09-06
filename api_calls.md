### Why is it useful to create a reusable Axios instance?

Creating a reusable Axios instance is useful because I can configure common settings in one place instead of repeating them for every API request.

In this task, I used one Axios instance for the base URL, default headers, timeout, and interceptors. This makes the API code easier to manage and update.

### How does intercepting requests help with authentication?

A request interceptor can check for an authentication token before a request is sent. If a token is available, it can automatically be added to the request headers.

This means I do not need to manually add the token every time I make an API request.

### What happens if an API request times out, and how can you handle it?

If an API request takes longer than the configured timeout, Axios stops waiting for the response and returns an error.

In this task, I set the timeout to 5 seconds and handled errors in the interceptor. I also used an AbortController so that a request can be cancelled manually when needed.
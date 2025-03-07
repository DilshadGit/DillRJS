## SetState
- Always make use of setState and never modify the state directly.
- Code has to be executed after the state has been updated? place that code in the call back function
  which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in the function as an argument 
  instead of the regular object.

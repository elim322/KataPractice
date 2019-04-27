# Collection of Katas I've completed.

### 5 kyu:

- [BestTravel](./BestTravel.js)

John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Find the biggest distance possible within the limit

```
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
```

### 6 kyu:

- [PersistentBugger](./PersistentBugger.js)

Write a function, persistence, that takes in a positive
parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits
in num until you reach a single digit.

```
persistence(39)
-> 3 * 9 = 27
  -> 2 * 7 = 14
    -> 1 * 4 = 4  <- single digit

 result = 3 Iterations
```

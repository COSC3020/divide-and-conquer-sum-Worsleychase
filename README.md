# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

$$T(n) = 1, \quad \text{if } n \leq 1$$
$$T(n) = 3T\left(\frac{n}{3}\right) + n, \quad \text{otherwise}$$

### Explanation

For $n \leq 1$, we just return 0 if $n = 0$ or return the only (and first) element if $n = 1$. This is direct access indexing so it is a constant time complexity, hence the 1.

For anything other than the above case, we need to slice/split the array into 3 different elements and call the function with the new shortened arrays. This means we call the function 3 more times, with a third of the original size ($n$) for each. Therefore, we get: $3T\left(\frac{n}{3}\right)$. The slice function has a linear time complexity, so we add the $+ n$.

### Solution

$$
\begin{align*}
  T(n) &= 3T\left(\frac{n}{3}\right) + n \\
  &= 3\left(3T\left(\frac{n}{9}\right) + \frac{n}{3}\right) + n\\
  &= 9T\left(\frac{n}{9}\right) + 2n\\
  &= 9\left(3T\left(\frac{n}{27}\right) + \frac{n}{9}\right) + 2n \\
  &= 27T\left(\frac{n}{27}\right) + 3n\\
  &...\\
  &=3^iT\left(\frac{n}{3^i}\right) + in\\
  \text{For }i = \log_3(n):\\
  &= n+n\log_3(n)\\
  &\implies \Theta(n\log(n))
\end{align*}
$$

Note:
$\log_3(n) \equiv \log(n)$ asymptomaticlly

## Resources Used

I used a post on stack overflow to find the time complexity of slice: [here](https://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions)

General help with complexity stuff: [here](https://www.geeksforgeeks.org/difference-between-big-oh-big-omega-and-big-theta/)

I used WolframAlpha to confirm my answer: [here](https://www.wolframalpha.com/input?i2d=true&i=y%5C%2840%29x%5C%2841%29+%3D+3*y%5C%2840%29Divide%5Bx%2C3%5D%5C%2841%29%2Bx)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

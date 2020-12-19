# Sorting Visualizer

[![CodeFactor](https://www.codefactor.io/repository/github/anandman03/algorithm-visualizer-react-app/badge)](https://www.codefactor.io/repository/github/anandman03/algorithm-visualizer-react-app)
[![DeepScan grade](https://deepscan.io/api/teams/10851/projects/15151/branches/299087/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10851&pid=15151&bid=299087)

This is a progressive web app built using React.js to visualize sorting algorithms such as bubble, insertion, selection, merge, quick, heap and twist sort. This app is deployed with GitHub pages and can be accessed here: [Link](https://anandman03.github.io/algorithm-visualizer-react-app/). I hope you have fun playing around with it.

## Purpose

I wanted to improve my skills with React.js, JavaScript, CSS and also learn sorting algorithms.This project turned out to be a great way to achieve both of the aforementioned objectives at the same time. I also implemented a sorting algorithm of my own named `Twist Sort`.

## Meet the Algorithms

1. `Twist sort` is a efficient sorting algorithm based on insertion and merge sort. This sorting algorithm uses merge sort to divide the array and when the size of array reaches a threshold, it uses insertion sort to sort the smaller arrays. Why insertion sort? It has O(n) time complexity for small arrays and uses minimum swaps. The time complexity of the algorithm is O(n log(n)).

2. `Bubble sort` is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.

3. `Insertion Sort` is an in-place comparison-based sorting algorithm. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2), where n is the number of items.

4. `Selection sort` is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.

5. `Merge sort` is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log(n)), it is one of the most respected algorithms.

6. `Quick sort` is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(nLogn) and Ο(n2), respectively.

7. `Heap sort` is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements. With worst-case time complexity being Ο(n log(n)), it is one of the most respected algorithms.
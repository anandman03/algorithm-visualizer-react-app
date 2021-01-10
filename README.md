# Sorting Visualizer

[![CodeFactor](https://www.codefactor.io/repository/github/anandman03/algorithm-visualizer-react-app/badge)](https://www.codefactor.io/repository/github/anandman03/algorithm-visualizer-react-app)
[![DeepScan grade](https://deepscan.io/api/teams/10851/projects/15151/branches/299087/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10851&pid=15151&bid=299087)

This is a progressive web app built using React.js to visualize sorting algorithms such as bubble, insertion, selection, merge, quick, heap and twist sort. This app is deployed with GitHub pages and can be accessed here: [Link](https://anandman03.github.io/algorithm-visualizer-react-app/). I hope you have fun playing around with it.

## Installation and Setup Instructions

Installation:
```
$ git clone https://github.com/anandman03/algorithm-visualizer-react-app.git
$ cd algorithm-visualizer-react-app
$ npm install
```
To start server:
```
$ npm start
```
To Visit App in any browser:
```
http://localhost:3000/
```

## Purpose

I wanted to improve my skills with React.js, JavaScript, CSS and also learn sorting algorithms.This project turned out to be a great way to achieve both of the aforementioned objectives at the same time. I also implemented a sorting algorithm of my own named `Twist Sort`.

## Component Structure

![component](https://github.com/anandman03/algorithm-visualizer-react-app/blob/main/public/component.PNG)

## Meet the Algorithms

1. `Twist sort` is a efficient hybrid sorting algorithm based on insertion and merge sort. This sorting algorithm uses merge sort to divide the array and when the size of array reaches a threshold, it uses insertion sort to sort the smaller arrays. The time complexity of the algorithm is O(n log(n)).

2. `Bubble sort` is a comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. The worst case complexity are of Ο(n*n) where n is the number of items.

3. `Insertion Sort` is an in-place comparison-based sorting algorithm. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list. The worst case complexity are of Ο(n*n), where n is the number of items.

4. `Selection sort` is a in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. The worst case complexities are of Ο(n*n), where n is the number of items.

5. `Merge sort` is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log(n)), it is one of the most respected algorithms.

6. `Quick sort` is based on partitioning of array of data into smaller arrays. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. The average and worst-case complexity are O(n log(n)) and Ο(n*n), respectively.

7. `Heap sort` is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements. With worst-case time complexity being Ο(n log(n)), it is one of the most respected algorithms.

## Design

![home](https://github.com/anandman03/algorithm-visualizer-react-app/blob/main/public/home.PNG)

## Lisence

[MIT](LICENSE)

## Contributor

[Mansimar_Anand](https://anandman03.github.io/Mansimar-Anand/)
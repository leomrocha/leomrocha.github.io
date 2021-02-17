---
layout: post
title: Playing with MNIST
subtitle: Trying different architectures
tags: [datasets, CV, MNIST]
---

## Introduction
[MNIST](http://yann.lecun.com/exdb/mnist/) is a popular _Computer Vision_ dataset that with today's technology is already solved, nevertheless is a nice dataset to play with and is still popular for teaching and tutorials.

A few years ago I was trying to study how the brain works and encodes things, part of that study was experimenting with [Nengo](https://www.nengo.ai/) and another part was playing with [Artificial Neural Networks](https://en.wikipedia.org/wiki/Artificial_neural_network).
A part of the exploration and study was to play with MNIST and try different things to learn more about neural networks, the idea was to try different _Deep Neural Network Architectures_ and see what happened.

It might not have been a breakthrough for the human kind but it did teach me a lot of things about ANN architectures and Pytorch.

Here are the links to the exported web pages from the original jupyter notebooks and I write a short conclusion of the experiments in this page.

## Source Code and Comments

All the original (and dirty) code can be found in my [Minibrain repo](https://github.com/leomrocha/minibrain/tree/master/experiments/mnist)

* [MNIST Fully Connected [FC] Layers](https://leomrocha.github.io/minibrain/mnist_study_1_FC_layers.html)
* [MNIST ColumNet](https://leomrocha.github.io/minibrain/mnist_study_2_ColumNet.html) - Parallel Fully Connected Layers joined at the last 
* [MNIST SparseNet](https://leomrocha.github.io/minibrain/mnist_study_3_SparseNet.html) - Sparse layers

## Conclusions

As I expected, due to the number of parameters the performance of ColumNet was much better than the simple FC network, even at shallower depths (less layers). 

There is a common practice in the DL world to use one single type of activation, the brain does not work that way, and I believe that neither should the architectures that we build, but there is a practical part in which different activation functions have different computation costs (and different problems), having a **ColumNet** kind of solves one part of the vanishing gradient issue and increments the representation power. However this comes at the expense of training time.

Also as expected, the deeper the network, the better the performance, but one must be wary of this for such small dataset and other more complex datasets have been studied by the scientific community.

The SparseNet did converge and work, but the loss was not comparable, I would have to check the code and change the loss to be able to compare it. If I decide to do it in the future I will publish the results here and modify this post. The training was also slower, there are libraries like [cuSPARSE](https://developer.nvidia.com/cusparse) that deal with sparse matrix operations, but this topic is still a weak point for hardware (even though support has been incrementally getting better)


As a final word, it was a nice experience and was followed by another experiment on using multiple resolutions for a single input image and followed by other experiments on different types of encodings. The fact of reviewing it a bit now and re-launching the experiments with a few code tweaks (to adapt to changes in the pytorch library) but without changing the functionality was also interesting and brought back nice memories.


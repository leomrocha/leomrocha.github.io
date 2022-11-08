---
layout: post
title: Exploring Image Autoencoders
subtitle: Trying different architectures
tags: [Computer Vision, Image, Autoencoders]
---

## Introduction

[Autoencoders](https://en.wikipedia.org/wiki/Autoencoder) are AWESOME! 

They can be tested, trained and studied without having a labeled dataset, which means that all the data handling is made much easier and one can focus on the subject which is playing with the networks.

They are widely used in the industry, for example for pretraining Convolutional Neural Networks, used in Neural Machine Translation, Signal Denoising and many other applications.

While exploring how the brain works I decided to explore the possibility of using autoencoders to pretrain different parts of a complete neural network architecture. 

I have also used the same techniques to pretrain Natural Language Processing (NLP) embeddings with various levels of success. I'm slowly making some progress in that domain.

I make here available what I have tried with some or minimal explanations but with all the source code and comments available, they serve me as a reference point and also might be useful for some other people too.

## Source Code and Comments

All the original (and dirty) code on image autoencoders can be found in the [image directory](https://github.com/leomrocha/minibrain/blob/master/sensors/image/) of my [Minibrain repo](https://github.com/leomrocha/minibrain).

* [Convolutional Autoencoders (CAEs)](https://leomrocha.github.io/minibrain/ConvAutoEncoderTest.html)
* [MultiResolution Convolutional Autoencoders](https://leomrocha.github.io/minibrain/MultiResConvAutoEncoderTest.html)
* [Variational Autoencoders (VAEs)](https://github.com/leomrocha/minibrain/blob/master/sensors/image/vae.py) - Source code only, there is no notebook for the full experimentation available

## Conclusions

Playing with Image Autoencoders was a lot of fun and I learned a lot. 
I think that the Multi Resolution Convolutional Autoencoders would make a lot of sense for applications in which an agent interacts with the environment and have limited resources (computing and energywise) for example robotic applications as the eye has a Fovea we can do the same for robots.

This work is not groundbreaking, just an experiment based on  many different techniques used in the Neuroscience and Computer Vision Fields with more or less similarity some biological vision systems (different animals see differently).

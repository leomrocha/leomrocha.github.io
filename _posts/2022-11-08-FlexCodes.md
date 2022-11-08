---
layout: post
title: Flexible Universal Character Level Encoding methods for Text in NLP (FlexCodes)
subtitle: A Study of Multiple Encoding Techniques for Low Resource Consumption Character Level Embeddings for NLP Tasks¶
tags: [Encodings, Embeddings, NLP]
---

## Introduction

A few years ago I contacted some researchers through [AI-ON](https://github.com/AI-ON) and started to  help with [Few Shot Music Generation](https://github.com/AI-ON/Few-Shot-Music-Generation) project. My fork is located [here](https://github.com/leomrocha/Few-Shot-Music-Generation).

That led me to think about how to cut down the resource usage on the input encodings, which led to [this idea](https://leomrocha.github.io/2021-01-10-midi-encodings-study/). Afterwards I though that it could be generalized to the entire domain of any encoding type, so this led me to another rabbit hole in which I started working and testing ideas on overfitting encodings, error correction codes and some other things, but the main work

The main problem on any encoding is today that  the one-hot vector of the input layer is still too big and that we use a learnt encoding now instead of being able to pre-compute it in a deterministic manner.

## Source Code and Analysis

__Note:__ the page is not complete with all the conclusions, but does provide source code, some examples, a dimensionality analysis and gives the theoretical pointers to develop the subject further if wanted or needed to.

[A page with the analysis](https://leomrocha.github.io/mix_nlp/FlexCodes.html)

The notebook and source code of different tests is located in the [mix_nlp repository](https://github.com/leomrocha/mix_nlp).

## Conclusion

It is possible to decide on smaller deterministic input encodings that can be further compressed by an input Fully Connected network (as is the current practice for input layers), given a smaller input instead of a one-hot vector provides an important resource reduction.

The decoding of such encodings can be done in two ways, either by a fully connected one-hot with softmax(as is the current practice), or by a similarity search in a Vector Database.

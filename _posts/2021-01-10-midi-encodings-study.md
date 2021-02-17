---
layout: post
title: MIDI Encoding Input Domain Study
subtitle: Analysing the MIDI domain to create a compressed input domain and avoid one-hot encoding
tags: [Encodings, Embeddings, MIDI, NLP]
---

## Introduction

A few years ago I contacted some researchers through [AI-ON](https://github.com/AI-ON) and started to  help with [Few Shot Music Generation](https://github.com/AI-ON/Few-Shot-Music-Generation) project. My fork is located [here](https://github.com/leomrocha/Few-Shot-Music-Generation).

During this work I found LSTMs basically eating my entire GPU resources ( a single GTX 1080 with 8GB or RAM) which in consequence started my path towards trying to cut down resources. 

The main problem was the input domain, the one-hot vector was too big for the number of samples it was needed to process and I couldn't make it work correctly. So I decided that the encoding needed some work.

The current work presents how to encode the entire MIDI vocabulary (4708 symbols) in a deterministic way to an embedding of 64 dimensions and be able to decode it later. 

Even if the proposal I did for the _Few Shot Music Generation_ was rejected the encoding did its work well for me allowing me to do some sequence training (although the project was harder than I expected)


## Source Code and Analysis

__Note:__ the page is not complete with all the conclusions, but does provide source code, some examples, a dimensionality analysis and gives the theoretical pointers to develop the subject further if wanted or needed to.

[A page with the analysis](https://leomrocha.github.io/minibrain/midi_encoding_study.html)

The notebook and source code of different tests is located in the [minibrain repository](https://github.com/leomrocha/minibrain/tree/master/predictors/sequence).

## Conclusion

It is possible to decide of smaller encodings that can be further embeddings by an input Fully Connected network (as is the current practice for input layers), given a smaller input instead of a one-hot vector provides an important resource reduction.

The decoding of such encodings can be done in two ways, either by a fully connected one-hot with softmax(as is the current practice), or by a similarity search.

Nevertheless big vocabularies in NLP have huge input encoding networks (the same for decoders), the work presented in the link given in the section **Source Code and Analysis** below started my in the path of deterministic dimensionality reduction for input encodings which I have explored more in depth since then and I currently work (when I have some time) in a universal text encoder that can handle any input language and there is no. I would like to publish a paper on the subject but even if I know it works for the things I've done I don't have enough time to dedicate to this subject.

This work made a first spark in my head about the importance of dimensions on encoding and decoding layers and how to deal with it. I have been thinking and slowly working on this subject since then in some of my free time.
---
title: Some Notes on Causal Video VAEs
description: A short sample note on temporal compression, causal convolutions, and the first frame.
date: 2026-09-18
category: Video representation
sample: true
---

A video autoencoder has two jobs that can pull in different directions: compress the signal aggressively, and preserve the temporal detail that a generative model needs.

## What does causal mean here?

For a temporal encoder, causality means an output at a given time does not depend on future input frames. A causal convolution achieves this by padding on the past side of the temporal axis.

That architectural property is narrower than a claim about understanding cause and effect. It is a constraint on information flow.

## The first frame is special

The first frame has no observed history. A temporal compression scheme may preserve it separately, then compress subsequent groups of frames. Exactly how this works depends on the architecture and its padding conventions.

Check tensor shapes with a short sequence before reasoning about a long one:

```python
# Shape convention: batch, channels, time, height, width
video_shape = (1, 3, 17, 256, 256)
# Verify the actual encoder's temporal stride and padding.
```

## What to measure

Framewise reconstruction scores alone do not tell us whether motion survives the bottleneck. Fast movement, occlusion, and small objects are useful places to inspect a reconstruction manually.

The question I would keep next to an experiment is simple: **what information is the downstream generator no longer able to recover?**

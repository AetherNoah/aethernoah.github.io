---
title: Autoregressive World Models
description: A sample reading note on prediction, rollout errors, and action conditioning.
date: 2026-09-17
category: World models
sample: true
---

Predicting the next observation is a starting point. Using those predictions for action introduces a different standard: the model must remain useful under the trajectories a policy actually visits.

## A factorization

An action-conditioned sequence model can be written as

$$
p(z_{1:T}\mid a_{1:T-1})=p(z_1)\prod_{t=1}^{T-1}p(z_{t+1}\mid z_{\leq t},a_{\leq t}).
$$

This equation leaves important decisions open: the representation of $z$, the length of history, and the way actions enter the model.

## One step versus a rollout

A small one-step prediction error does not guarantee a useful long rollout. Once a model conditions on its own generated states, it may encounter inputs unlike those used during training.

It helps to separate three evaluations: prediction on observed trajectories, open-loop rollout quality, and downstream performance when the model is used to choose actions.

## A working question

How much visual detail is necessary for a useful world model? The answer likely depends on the task. A beautiful prediction can still omit the small object that determines the next action.

## References

1. Ha and Schmidhuber. [World Models](https://arxiv.org/abs/1803.10122), 2018.

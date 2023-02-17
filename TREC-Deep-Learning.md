# TREC 2023 Deep Learning Track Guidelines

## Previous edition

* 2019 [website](https://microsoft.github.io/msmarco/TREC-Deep-Learning-2019) and [overview paper](https://trec.nist.gov/pubs/trec28/papers/OVERVIEW.DL.pdf)
* 2020 [website](https://microsoft.github.io/msmarco/TREC-Deep-Learning-2020) and [overview paper](https://trec.nist.gov/pubs/trec29/papers/OVERVIEW.DL.pdf)
* 2021 [website](https://microsoft.github.io/msmarco/TREC-Deep-Learning-2021) and [overview paper](https://trec.nist.gov/pubs/trec30/papers/Overview-DL.pdf)
* 2022 [website](https://microsoft.github.io/msmarco/TREC-Deep-Learning-2022)

## Timetable (tentative)

* June: Test queries released
* August: Deadline for submitting runs for document and passage ranking tasks

## Registration

To participate in TREC please pre-register at the following website: [https://ir.nist.gov/trecsubmit.open/application.html](https://ir.nist.gov/trecsubmit.open/application.html)

## Introduction

The Deep Learning Track studies information retrieval in a large training data regime. This is the case where the number of training queries with at least one positive label is at least in the tens of thousands, if not hundreds of thousands or more. This corresponds to real-world scenarios such as training based on click logs and training based on labels from shallow pools (such as the pooling in the TREC Million Query Track or the evaluation of search engines based on early precision).

Certain machine learning based methods, such as methods based on deep learning are known to require very large datasets for training. Lack of such large scale datasets has been a limitation for developing such methods for common information retrieval tasks, such as document ranking. The Deep Learning Track organized in the previous years aimed at providing large scale datasets to TREC, and create a focused research effort with a rigorous blind evaluation of ranker for the passage ranking and document ranking tasks.

Similar to the previous years, one of the main goals of the track in 2022 is to study what methods work best when a large amount of training data is available. For example, do the same methods that work on small data also work on large data? How much do methods improve when given more training data? What external data and models can be brought in to bear in this scenario, and how useful is it to combine full supervision with other forms of supervision?


## Deep Learning Track Tasks

(Coming soon.)


## Datasets

(Coming soon.)

## Submission, evaluation and judging

We will be following a similar format as the ones used by most TREC submissions, which is repeated below. White space is used to separate columns.
The width of the columns in the format is not important, but it is important to have exactly six columns per line with at least one space between the columns.

```text
1 Q0 pid1    1 2.73 runid1
1 Q0 pid2    2 2.71 runid1
1 Q0 pid3    3 2.61 runid1
1 Q0 pid4    4 2.05 runid1
1 Q0 pid5    5 1.89 runid1
```

, where:

* the first column is the topic (query) number.
* the second column is currently unused and should always be "Q0".
* the third column is the official identifier of the retrieved passage in context of passage ranking task, and the identifier of the retrieved document in context of document ranking task.
* the fourth column is the rank the passage/document is retrieved.
* the fifth column shows the score (integer or floating point) that generated the ranking. This score **must** be in descending (non-increasing) order.
* The sixth column is the ID of the run you are submitting.

As the official evaluation set, we provide a set of test queries, a subset of which will be used for the final evaluation. The same test queries are used for passage retrieval and document retrieval. Unlike the previous years, different approaches will be used for constructing test collections for the passage ranking and document ranking tasks.

The approach used for test collection construction for the passage retrieval task will be the same as the previous years: NIST will be using depth pooling and construct pools for the queries in the final test set. Passages in these pools will then be labelled by NIST assessors using multi-graded judgments, allowing us to measure NDCG. 

Evaluation for the document ranking task will be done **using the labels inferred from the passage ranking task**, no additional judgments from NIST will be collected for this task. This is aligned with this year’s definition of the document ranking task, which is focusing on ranking documents based on their likelihood of containing a relevant passage. 

The main type of TREC submission is _automatic_, which means there was not manual intervention in running the test queries.
This means you should not adjust your runs, rewrite the query, retrain your model, or make any other sorts of manual adjustments after you see the test queries.
The ideal case is that you only look at the test queries to check that they ran properly (i.e. no bugs) then you submit your automatic runs.
However, if you want to have a human in the loop for your run, or do anything else that uses the test queries to adjust your model or ranking, you can mark your run as _manual_. Manual runs are interesting, and we may learn a lot, but these are distinct from our main scenario which is a system that responds to unseen queries automatically.

## Additional resources
We are sharing the following additional resources which we hope will be useful for the community.

| Dataset | Filename | File size | Num Records | Format |
|------|----------|----------:|------------:|--------|
| [Segmented document collection](https://github.com/castorini/anserini/blob/master/docs/experiments-msmarco-v2.md#document-collection-segmented) | [msmarco_v2_doc_segmented.tar](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco_v2_doc_segmented.tar) | 25.4 GB | 124,131,414 | tar |
| [Augmented passage collection](https://github.com/castorini/anserini/blob/master/docs/experiments-msmarco-v2.md#passage-collection-augmented) | [msmarco_v2_passage_augmented.tar](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco_v2_passage_augmented.tar) | 20.0 GB | 138,364,198 | tar |

## Coordinators

* Nick Craswell (Microsoft)
* Bhaskar Mitra (Microsoft)
* Emine Yilmaz (UCL, Amazon)
* Daniel Campos (University of Illinois at Urbana-Champaign)
* Jimmy Lin (University of Waterloo)

{% include_relative Notice.md %}

# Datasets for Document and Passage Ranking Leadboards

## Introduction

MS MARCO (**M**icro**S**oft **MA**chine **R**eading **CO**mprehension) is a large-scale dataset focused on machine reading comprehension.
Since its initial release, benchmarking efforts for several NLP and IR tasks have made use of this dataset—incl. question-answering, passage ranking, document ranking, keyphrase extraction, and conversational search.
Currently, we are using this dataset to primarily study information retrieval in a *large training data* regime.
This is the case where the number of training queries with at least one positive label is at least in the tens of thousands, if not hundreds of thousands or more.
This corresponds to real-world scenarios such as training based on click logs and training based on labels from shallow pools (such as the pooling in the TREC Million Query Track or the evaluation of search engines based on early precision).

Certain machine learning based methods, such as methods based on deep learning are known to require very large datasets for training.
Lack of such large scale datasets has been a limitation for developing such methods for common information retrieval tasks, such as document ranking.
The [TREC Deep Learning Track](https://microsoft.github.io/msmarco/TREC-Deep-Learning) aims at providing large scale datasets to TREC, and create a focused research effort with a rigorous blind evaluation of ranker for the passage ranking and document ranking tasks.
The MS MARCO document and passage ranking leaderboards complements the TREC Deep Learning Track by providing on-going evaluation of submissions using pre-collected sparse judgments.

Similar to TREC, one of the main goals of the leaderboard is to study what methods work best when a large amount of training data is available.
For example, do the same methods that work on small data also work on large data?
How much do methods improve when given more training data? What external data and models can be brought in to bear in this scenario, and how useful is it to combine full supervision with other forms of supervision?

## Citation

If you use the MS MARCO dataset, or any dataset derived from it, please cite the [paper](https://arxiv.org/abs/1611.09268):

@article{bajaj2016ms,  
  title={Ms marco: A human generated machine reading comprehension dataset},  
  author={Bajaj, Payal and Campos, Daniel and Craswell, Nick and Deng, Li and Gao, Jianfeng and Liu, Xiaodong and Majumder, Rangan and McNamara, Andrew and Mitra, Bhaskar and Nguyen, Tri and others},  
  journal={arXiv preprint arXiv:1611.09268},  
  year={2016}  
}  

## Ranking Tasks

There are two tasks: Passage ranking and document ranking; and two subtasks in each case: full ranking and reranking.

Each task uses a large human-generated set of training labels.
The two tasks have different sets of test queries.
Both tasks use similar form of training data with usually one positive training document/passage per training query.
In the case of passage ranking, there is a direct human label that says the passage can be used to answer the query, whereas for training the document ranking task we transfer the same passage-level labels to document-level labels.
Participants can also use external corpora for large scale language model pretraining, or adapt algorithms built for one task (e.g. passage ranking) to the other task (e.g. document ranking).
This allows participants to study a variety of transfer learning strategies.

Below the two tasks are described in more detail.

### Document Ranking Task

The first task focuses on document ranking.
We have two subtasks related to this: Full ranking and top-100 reranking.

In the full ranking (retrieval) subtask, you are expected to rank documents based on their relevance to the query, where documents can be retrieved from the full document collection provided.
You can submit up to **100 documents** for this task.
It models a scenario where you are building an end-to-end retrieval system.

In the reranking subtask, we provide you with an initial ranking of 100 documents from a simple IR system, and you are expected to rerank the documents in terms of their relevance to the question.
This is a very common real-world scenario, since many end-to-end systems are implemented as retrieval followed by top-k reranking.
The reranking subtask allows participants to focus on reranking only, without needing to implement an end-to-end system.
It also makes those reranking runs more comparable, because they all start from the same set of 100 candidates.

### Passage Ranking Task

Similar to the document ranking task, the passage ranking task also has a full ranking and reranking subtasks.

In context of full ranking (retrieval) subtask, given a question, you are expected to rank passages from the full collection in terms of their likelihood of containing an answer to the question. You can submit up to **1,000 passages** for this end-to-end retrieval task.

In context of top-1000 reranking subtask, we provide you with an initial ranking of 1000 passages and you are expected to rerank these passages based on their likelihood of containing an answer to the question.
In this subtask, we can compare different reranking methods based on the same initial set of 1000 candidates, with the same rationale as described for the document reranking subtask.

### Datasets

#### Document ranking dataset

The document ranking dataset is based on source documents, which contained passages in the passage task.
Although we have an incomplete set of documents that was gathered some time later than the passage data, the corpus is 3.2 million documents and our training set has 367,013 queries.
For each training query, we map from a positive passage ID to the corresponding document ID in our 3.2 million.
We do so on the assumption that a document that produced a relevant passage is usually a relevant document.

| Type   | Filename                                                                                                              | File size |              Num Records | Format                                                         |
|--------|-----------------------------------------------------------------------------------------------------------------------|----------:|-------------------------:|----------------------------------------------------------------|
| Corpus | [msmarco-docs.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-docs.tsv.gz)                          |     22 GB |               3,213,835  | tsv: docid, url, title, body                                   |
| Corpus | [msmarco-docs.trec](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-docs.trec.gz)                        |     22 GB |               3,213,835  | TREC DOC format (same content as msmarco-docs.tsv)                                               |
| Corpus | [msmarco-docs-lookup.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-docs-lookup.tsv.gz)            |    101 MB |               3,213,835  | tsv: docid, offset_trec, offset_tsv                            |
| Train  | [msmarco-doctrain-queries.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-doctrain-queries.tsv.gz)  |     15 MB |                 367,013  | tsv: qid, query                                                |
| Train  | [msmarco-doctrain-top100](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-doctrain-top100.gz)            |    1.8 GB |              36,701,116  | TREC submission: qid, "Q0", docid, rank, score, runstring      |
| Train  | [msmarco-doctrain-qrels.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-doctrain-qrels.tsv.gz)      |    7.6 MB |                 384,597  | TREC qrels format                                              |
| Train  | [msmarco-doctriples.py](https://github.com/microsoft/TREC-2019-Deep-Learning/blob/master/utils/msmarco-doctriples.py) |         - |                       -  | Python script generates training triples |
| Dev    | [msmarco-docdev-queries.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-docdev-queries.tsv.gz)      |    216 KB |                   5,193  | tsv: qid, query                                                |
| Dev    | [msmarco-docdev-top100](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-docdev-top100.gz)        |       27 MB |                     519,300  | TREC submission: qid, "Q0", docid, rank, score, runstring      |
| Dev    | [msmarco-docdev-qrels.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/msmarco-docdev-qrels.tsv.gz)          |    112 KB |                   5,478  | TREC qrels format                                              |
| Test    | [docleaderboard-queries.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/docleaderboard-queries.tsv.gz)          |     124K |                   5,793  | tsv: qid, query                                              |
| Test    | [docleaderboard-top100](https://msmarco.blob.core.windows.net/msmarcoranking/docleaderboard-top100.tsv.gz)          |   2.9M |                  579,300  | TREC submission: qid, "Q0", docid, rank, score, runstring       |

#### Passage ranking dataset

This passage dataset is based on the public MS MARCO dataset, although our evaluation will be quite different.
We will use a different set of test queries and we will use relevance judges to evaluate the quality of passage rankings in much more detail.

| Description                                           | Filename                                                                                                                | File size |                        Num Records | Format                                                         |
|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|----------:|-----------------------------------:|----------------------------------------------------------------|
| Collection                                | [collection.tar.gz](https://msmarco.blob.core.windows.net/msmarcoranking/collection.tar.gz)                             |    2.9 GB |                         8,841,823  | tsv: pid, passage |
| Queries                                   | [queries.tar.gz](https://msmarco.blob.core.windows.net/msmarcoranking/queries.tar.gz)                                   |   42.0 MB |                         1,010,916  | tsv: qid, query |
| Qrels Dev                                 | [qrels.dev.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/qrels.dev.tsv)                                     |    1.1 MB |                            59,273  | TREC qrels format |
| Qrels Train                               | [qrels.train.tsv](https://msmarco.blob.core.windows.net/msmarcoranking/qrels.train.tsv)                                 |   10.1 MB |                           532,761  | TREC qrels format |
| Queries, Passages, and Relevance   Labels | [collectionandqueries.tar.gz](https://msmarco.blob.core.windows.net/msmarcoranking/collectionandqueries.tar.gz)         |    2.9 GB |                        10,406,754  | |
| Train Triples Small                       | [triples.train.small.tar.gz](https://msmarco.blob.core.windows.net/msmarcoranking/triples.train.small.tar.gz)           |   27.1 GB |                        39,780,811  | tsv: query, positive passage, negative passage |
| Train Triples Large                      | [triples.train.full.tsv.gz](https://msmarco.blob.core.windows.net/msmarcoranking/triples.train.full.tsv.gz)             |  272.2 GB |                       397,756,691  | tsv: query, positive passage, negative passage |
| Train Triples QID PID Format               | [qidpidtriples.train.full.2.tsv.gz](https://msmarco.blob.core.windows.net/msmarcoranking/qidpidtriples.train.full.2.tsv.gz) |    5.7 GB |                       397,768,673  | tsv: qid, positive pid, negative pid |
| Top 1000 Train                            | [top1000.train.tar.gz](https://msmarco.blob.core.windows.net/msmarcoranking/top1000.train.tar.gz)                       |  175.0 GB |                       478,002,393  | tsv: qid, pid, query, passage |
| Top 1000 Dev                              | [top1000.dev.tar.gz](https://msmarco.blob.core.windows.net/msmarcoranking/top1000.dev.tar.gz)                           |    2.5 GB |                         6,668,967  | tsv: qid, pid, query, passage |


### Use of external information

IMPORTANT NOTE: You are allowed to use external information while developing your runs.
However, it is prohibited to use any datasets from msmarco.org in your submission except those listed below.
The original MS MARCO question-answering dataset reveals minor details of how the dataset was constructed that would not be available in a real-world search engine; hence, should be avoided.

{% include_relative Notice.md %}

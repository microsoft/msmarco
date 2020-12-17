# ORCAS: Open Resource for Click Analysis in Search

ORCAS is a click-based dataset associated with the [TREC Deep Learning Track](https://microsoft.github.io/msmarco/TREC-Deep-Learning). It covers 1.4 million of the TREC DL documents, providing 18 million connections to 10 million distinct queries. 

One ORCAS use case is Web mining, to find clusters of related queries and/or related documents. These can be mined for synonyms, used for expanding and understanding the vocabulary of queries and documents. The 10 million queries could be used in studies of query autocompletion. We note that the dataset is for research use only. Like many datasets of this type, ORCAS may be biased in relation to race, gender and other issues. These relate to biases in the underlying queries, clicks and search algorithms. The biases could be studied, but for other types of study people should be aware of potential biases in the data, which could then affect what models learn.

The other use case is in TREC ranking. Compared to the existing training data ORCAS has 28x more queries and 49x more query-document pairs, and covers 4.4x more documents in the corpus. It can also be used as a document field, in addition to title, URL and body text. In general the ORCAS data can be treated as a kind of relevance feedback, which can be used in multiple ways.

Paper describing the dataset: [https://arxiv.org/abs/2006.05324](https://arxiv.org/abs/2006.05324)

## Dataset

Each record in the dataset connects a query with a TREC document, where we provide both the document identifier and the document's URL:
* QID: 10103699
* Q: why is the sky blue
* DID: D1968574
* U: http://www.sciencemadesimple.com/sky_blue.html

We provide the dataset in a single file *orcas.tsv.gz* and also in TREC format to support training, including negative sampling from Indri top-100 lists.

| Type | Filename | Num Records | File size (Bytes) | Format | md5sum |
|------|----------|-----------|-------------|--------|--------|
| Click data | [orcas.tsv.gz](https://msmarco.blob.core.windows.net/msmarcoranking/orcas.tsv.gz) | 18,823,602 | 329,653,181 | tsv: qid, query, did, url | 4b9350bf997c5c0eaa562be81c796981 |
| Queries | [orcas-doctrain-queries.tsv.gz](https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-queries.tsv.gz) | 10,405,342 | 104,209,356 | tsv: qid, query | 519c5f522294406e3b0574d7d53cf233 |
| QRELs | [orcas-doctrain-qrels.tsv.gz](https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-qrels.tsv.gz) | 18,823,602 | 109,824,304 | TREC qrels format | 3f94db106374be649782022c3018acd0 |
| Top 100 candidates | [orcas-doctrain-top100.gz](https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-top100.gz) | 982,951,086 | 10,724,320,629 | TREC submission: qid, "Q0", docid, rank, score, runstring | 118d0884638fd405e111157a124ef0b2 |

## Citation

If you use the ORCAS dataset, or any dataset derived from it, please cite the [paper](https://arxiv.org/abs/2006.05324):

@article{craswell2020orcas,  
title={ORCAS: 18 Million Clicked Query-Document Pairs for Analyzing Search},  
author={Craswell, Nick and Campos, Daniel and Mitra, Bhaskar and Yilmaz, Emine and Billerbeck, Bodo},  
journal={arXiv preprint arXiv:2006.05324},  
year={2020}  
}

# Terms and Conditions

The ORCAS datasets are intended for non-commercial research purposes only to promote advancement in the field of artificial intelligence and related areas, and is made available free of charge without extending any license or other intellectual property rights. The dataset is provided “as is” without warranty and usage of the data has risks since we may not own the underlying rights in the documents. We are not be liable for any damages related to use of the dataset. Feedback is voluntarily given and can be used as we see fit. By using any of these datasets you are automatically agreeing to abide by these terms and conditions. Upon violation of any of these terms, your rights to use the dataset will end automatically.

Please contact us at ms-marco@microsoft.com if you own any of the documents made available but do not want them in this dataset. We will remove the data accordingly. If you have questions about use of the dataset or any research outputs in your products or services, we encourage you to undertake your own independent legal review. For other questions, please feel free to contact us.

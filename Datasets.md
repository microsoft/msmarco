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

If you use the ORCAS dataset, or any dataset derived from it, please cite the [paper](https://arxiv.org/abs/1611.09268):

@article{bajaj2016ms,  
  title={Ms marco: A human generated machine reading comprehension dataset},  
  author={Bajaj, Payal and Campos, Daniel and Craswell, Nick and Deng, Li and Gao, Jianfeng and Liu, Xiaodong and Majumder, Rangan and McNamara, Andrew and Mitra, Bhaskar and Nguyen, Tri and others},  
  journal={arXiv preprint arXiv:1611.09268},  
  year={2016}  
}  

{% include_relative Notice.md %}

# Submit to Document and Passage Ranking Leadboards

## File format

For both tasks, please prepare the test results file in the following TAB-separated (TSV) format: qid\<TAB\>pid\<TAB\>rank.

````
1124703    8766037    1
1124703    8021997    2
1124703    7816201    3
1124703    8296123    4
1124703    8790898    5
1124703    5451590    6
1124703    8021999    7
1124703    8388210    8
1124703    8702520    9
1124703    8790903    10
````

We report MRR@10 for both tasks. Therefore, to minimize the size of your test results file, please free to only inclde the top 10 results per query.

## Evaluation script

The official evaluation script for the two tasks are available at the below locations:
* Document ranking: <https://github.com/microsoft/MSMARCO-Document-Ranking/blob/main/ms_marco_eval.py>
* Passage ranking: <https://github.com/dfcf93/MSMARCOV2/blob/master/Ranking/Baselines/msmarco_eval.py>

## Submission process

Once you have built a model that meets your expectations on evaluation with the dev set, you can submit your test results to get official evaluation on the test set.
To ensure the integrity of the official test results, we do not release the correct answers for test set to the public.
To submit your model for official evaluation on the test set, follow the below steps:
Generate your proposed reranking for the Top1000 passages for the Eval and the Dev set. To encourage reproducibility of results we encourage all teams to submit their code along with documentation and hyperparameters used.
Submit the following information by [contacting us](mailto:ms-marco@microsoft.com?subject=MS%20Marco%20Submission)
* Individual/Team Name: Name of the individual or the team to appear in the leaderboard [Required]
* Individual/Team Institution: Name of the institution of the individual or the team to appear in the leaderboard [Optional]
* Model information: Name of the model/technique to appear in the leaderboard [Required]
* Paper Information: Name, Citation, URL of the paper if model is from a published work to appear in the leaderboard [Optional]
* Code Information: A github repo of your model, instruction of how to use, etc [Optional]

To avoid "P-hacking" we limit teams/individuals to 1 per week and we will update the leaderboard to include all submisions by such teams, not just the most recent.
### Document ranking

### Passage ranking

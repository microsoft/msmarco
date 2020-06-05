window.addEventListener('load', () => {
    function addDownloadLink() {
        if (document.getElementById("TA").checked == true) {
            //Usefulness
            document.getElementById("usefulnessdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarco/Usefulness.tsv\">Data</a>"
            //OpenKP
            document.getElementById("keyphrasedata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/openkp/OpenKPTrain.jsonl\">Train(10/22/2019)</a>"
            document.getElementById("keyphrasedata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/openkp/OpenKPDev.jsonl\">Dev(10/22/2019)</a>"
            document.getElementById("keyphrasedata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/openkp/OpenKPEvalPublic.jsonl\">Eval(10/22/2019)</a>"
            //Conversational Search
            document.getElementById("conversationaldata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/conversationalsearch/ann_session_train.tar.gz\">Train(04/19/2019)</a>"
            document.getElementById("conversationaldata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/conversationalsearch/ann_session_dev.tar.gz\">Dev(04/19/2019)</a>"
            document.getElementById("conversationaldata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/conversationalsearch/artificialSessionsQueryEncoding500kSample.tsv.gz\">AGI Encoder Sample(03/06/2019)</a>"
            document.getElementById("conversationaldata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/conversationalsearch/artificialSessionsBERT500k.tsv.gz\">BERT Sample(03/06/2019)</a>"
            //ranking
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/collection.tar.gz\">Collection(10/26/2018)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/fulldocs.tsv.gz\">Full Web Documents(05/02/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/queries.tar.gz\">Queries(11/13/2018)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/qrels.train.tsv\">Qrels Train(11/28/2018)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/qrels.dev.tsv\">Qrels Dev(11/28/2018)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/collectionandqueries.tar.gz\">Queries, Passages, and Relevance Labels(05/03/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/triples.train.small.tar.gz\">Train Triples Small(05/03/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/triples.train.full.tsv.gz\">Train Triples Large(01/02/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/qidpidtriples.train.full.tsv.gz\">Train Triples QID PID Format(1/31/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/top1000.train.tar.gz\">Top 1000 Train(05/06/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/top1000.dev.tar.gz\">Top 1000 Dev(05/02/2019)</a>"
            document.getElementById("rankingdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarcoranking/top1000.eval.tar.gz\">Top 1000 Eval(05/02/2019)</a>"
            //Qna
            document.getElementById("qnadataset").innerHTML += "<h4>Question Answering V2.1</h4>"
            document.getElementById("qnadataset").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarco/train_v2.1.json.gz\">Training Set(04/23/2018)</a>"
            document.getElementById("qnadataset").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarco/dev_v2.1.json.gz\">Dev Set(04/03/2018)</a>"
            document.getElementById("qnadataset").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmarco/eval_v2.1_public.json.gz\">Evaluation Set(04/03/2018)</a>"
            document.getElementById("qnadataset").innerHTML += "<h4>Question Answering V1.1</h4>"
            document.getElementById("qnadataset").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmsarcov1/train_v1.1.json.gz\">Training Set(12/01/2016)</a>"
            document.getElementById("qnadataset").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmsarcov1/dev_v1.1.json.gz\">Dev Set(12/01/2016)</a>"
            document.getElementById("qnadataset").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/msmsarcov1/test_hidden_v1.1.json\">Evaluation Set(12/01/2016)</a>"  
            //Optimal crawling
            document.getElementById("ocdata").innerHTML += "<a class=\"btn btn-primary btn-md\" style='margin-right: 3px;' href=\"https://msmarco.blob.core.windows.net/crawling/Dataset.tar.gz\">Crawling Dataset(10/22/2019)</a>"  
            alert("Download Links are now viewable")
        } else {
            alert("Please Agree to our conditions to download the dataset")
        }
    }
});
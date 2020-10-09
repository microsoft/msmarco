window.addEventListener('load', () => {
    // Array containing all necessary data
    const datasets= [
        { 
            nodeSelector: '#usefulnessdata',
            links: [{text: 'Data', href: 'https://msmarco.blob.core.windows.net/msmarco/Usefulness.tsv'}],
        },
        { 
            nodeSelector: '#keyphrasedata',
            links: [
                {text: 'Train(10/22/2019)', href: 'https://msmarco.blob.core.windows.net/openkp/OpenKPTrain.jsonl'},
                {text: 'Dev(10/22/2019)', href: 'https://msmarco.blob.core.windows.net/openkp/OpenKPDev.jsonl'},
                {text: 'Eval Public(10/22/2019)', href: 'https://msmarco.blob.core.windows.net/openkp/OpenKPEvalPublic.jsonl'},
                {text: 'Eval(10/09/2019)', href: 'https://msmarco.blob.core.windows.net/openkp/OpenKPEval.jsonl'}
            ],
        },

        { 
            nodeSelector: '#conversationaldata',
            links: [
                {text: 'Train(04/19/2019)', href: 'https://msmarco.blob.core.windows.net/conversationalsearch/ann_session_train.tar.gz'},
                {text: 'Dev(04/19/2019)', href: 'https://msmarco.blob.core.windows.net/conversationalsearch/ann_session_dev.tar.gz'},
                {text: 'AGI Encoder Sample(03/06/2019)', href: 'https://msmarco.blob.core.windows.net/conversationalsearch/artificialSessionsQueryEncoding500kSample.tsv.gz'},
                {text: 'BERT Sample(03/06/2019)', href: 'https://msmarco.blob.core.windows.net/conversationalsearch/artificialSessionsBERT500k.tsv.gz'},
            ],
        },
        { 
            nodeSelector: '#rankingdata',
            links: [
                {text: 'Collection(10/26/2018)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/collection.tar.gz'},
                {text: 'Full Web Documents(05/02/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/fulldocs.tsv.gz'},
                {text: 'Queries(11/13/2018)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/queries.tar.gz'},
                {text: 'Qrels Train(11/28/2018)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/qrels.train.tsv'},
                {text: 'Qrels Dev(11/28/2018)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/qrels.dev.tsv'},
                {text: ' and Relevance Labels(05/03/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/collectionandqueries.tar.gz,Queries, Passages'},
                {text: 'Train Triples Small(05/03/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/triples.train.small.tar.gz'},
                {text: 'Train Triples Large(01/02/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/triples.train.full.tsv.gz'},
                {text: 'Train Triples QID PID Format(1/31/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/qidpidtriples.train.full.tsv.gz'},
                {text: 'Top 1000 Train(05/06/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/top1000.train.tar.gz'},
                {text: 'Top 1000 Dev(05/02/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/top1000.dev.tar.gz'},
                {text: 'Top 1000 Eval(05/02/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/top1000.eval.tar.gz'},
                {text: 'ORCAS QRELS (08/05/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-qrels.tsv.gz'},
                {text: 'ORCAS Queries (08/05/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-queries.tsv.gz'},
                {text: 'ORCAS Top 100 (08/05/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-top100.gz'},
            ],
        },
        { 
            nodeSelector: '#docrankingdata',
            links: [
                {text: 'Collection(05/02/2019)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/fulldocs.tsv.gz'},
                {text: 'Queries(08/11/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/docleaderboard-queries.tsv.gz'},
                {text: 'Top 100 Eval(08/11/2020)', href:'https://msmarco.blob.core.windows.net/msmarcoranking/docleaderboard-top100.tsv.gz'},
                {text: 'ORCAS QRELS (08/05/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-qrels.tsv.gz'},
                {text: 'ORCAS Queries (08/05/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-queries.tsv.gz'},
                {text: 'ORCAS Top 100 (08/05/2020)', href: 'https://msmarco.blob.core.windows.net/msmarcoranking/orcas-doctrain-top100.gz'},
            ],
        },
        { 
            nodeSelector: '#qnadataset',
            title : 'Question Answering V2.1',
            links: [
                {text: 'Training Set(04/23/2018)', href: 'https://msmarco.blob.core.windows.net/msmarco/train_v2.1.json.gz'},
                {text: 'Dev Set(04/03/2018)', href: 'https://msmarco.blob.core.windows.net/msmarco/dev_v2.1.json.gz'},
                {text: 'Evaluation Set(04/03/2018)', href: 'https://msmarco.blob.core.windows.net/msmarco/eval_v2.1_public.json.gz'},
            ],
        },
        { 
            nodeSelector: '#qnadataset',
            title : 'Question Answering V1.1',
            links: [
                {text: 'Training Set(12/01/2016)', href: 'https://msmarco.blob.core.windows.net/msmsarcov1/train_v1.1.json.gz'},
                {text: 'Dev Set(12/01/2016)', href: 'https://msmarco.blob.core.windows.net/msmsarcov1/dev_v1.1.json.gz'},
                {text: 'Evaluation Set(12/01/2016)', href: 'https://msmarco.blob.core.windows.net/msmsarcov1/test_hidden_v1.1.json'},
            ],
        },
        { 
            nodeSelector: '#ocdata',
            links: [{text: 'Crawling Dataset(10/22/2019)', href: 'https://msmarco.blob.core.windows.net/crawling/Dataset.tar.gz'},],
        }];
    
    const agreeToTermsButton = document.querySelector('#agree-terms');
    const agreeToTermsCheckbox = document.querySelector('#TA');
    let linksShown = false;

    // Render dataset
    const renderDataset = dataset => {
        const parentNode = document.querySelector(dataset.nodeSelector);

        // If dataset has a title render it first
        if(dataset.title){
            parentNode.innerHTML += `<h4> ${dataset.title} </h4>`;
        }

        // Render links
        dataset.links.forEach(link => parentNode.innerHTML += `<a class="btn btn-primary btn-md mb-4 mr-2" href="${link.href}">${link.text}</a>`);
    };

    // Listen for click event on agreeToTermsButton
    agreeToTermsButton.addEventListener('click', () => {
        if(agreeToTermsCheckbox.checked && !linksShown){
            // Render all dataset links
            datasets.forEach(dataset => renderDataset(dataset));
            linksShown = true;
            alert('Download Links are now viewable');
        }else if(linksShown){
            alert('Download Links are now viewable');
        }else{
            alert("Please Agree to our conditions to download the dataset");
        }
    });
        
});

class forwardChaining{
  constructor(){
    let store = {};
    store["DI"] = "-1";
    let clausList = {};
    let clsLi=[];

    for(int i =1; i < 10; i++)
    {
        int j = 4 * (i-1) + 1;
        clsLi.push_back(j);
    }

    clausList["DI"] = clsLi;
    let Li ={};
    Li[1] = "DI";
    queue<string> qu;
    }

    function getAnswers(a, store){
        let ans=0;
        switch(a){
            case 10:
                if(store["DI"]=="NO_DISEASE") {
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("No Treatment");
                ans = 1;
                break;
                }
            case 20:
                if(store["DI"]=="BIPOLAR_DISORDER"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("OXCARBAZEPINE AND ANTIPSYCHOTICS");
                ans = 1;
                break;
                }
            case 30:
                if(store["DI"]=="SCHIZOAFECTIVE_DISORDER"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("PSYCHOTHERAPY AND CARBAMAZEPINE");
                ans = 1;
                break;
                }
            case 40:
                if(store["DI"]=="MAJORDEPRESSDISORDER"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("SSRI AND PSYCHOTHERAPY");
                ans = 1;
                break;
                }
            case 50:
                if(store["DI"]=="DYSTHYMIA"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("VENLAFAXINE AND PSYCHOTHERAPY AND TMS");
                ans = 1;
                break;
                }
            case 60:
                if(store["DI"]=="SCHIZOPHRENIA"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("ANTI-TREMOR AND PSYCHOTHERAPY");
                ans = 1;
                break;
                }
            case 70:
                if(store["DI"]=="GENERALIZED_ANXIETY_DISORDER"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("BUSPIRON AND PSYCHOTHERAPY");
                ans = 1;
                break;
                }
            case 80:
                if(store["DI"]=="PANICDISORDERAGROPHOBIA"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("DIAZEPAM AND PSYCHOTHERAPY");
                ans = 1;
                break;
                }
            case 90:
                if(store["DI"]=="DISSOCIATIVEDISORDER"){
                console.log("TREATMENT RECOMMENDED FOR THIS DISORDER : ");
                console.log("HYPNOSIS AND PSYCHOTHERAPY");
                ans = 1;
                break;
                }
              }
              return ans;
            }

    function resClaus (clausNum){  return (Math.floor(clausNum/4)+1)*10;}

    function printVariableList(){
      console.log("************** VARIABLE LIST *************");
      console.log("1. ","DISORDER ");
    }

    function printClausVariableList(){
        console.log("************** CLAUSE VARIABLE LIST *************");
        for(let i=1;i<=8*4;i++){
            if(i%4==1)
                console.log("CLAUSE ",i," ","DISORDER ");
            else
                console.log("CLAUSE ",i);
        }
    }

    function printConcVariableList(){
        console.log("************** CONCLUSION VARIABLE LIST *************");
        for(let i=1;i<=8*4;i++){
            console.log("CONCLUSION ",i," ","TREATMENT ");
        }
    }

    function askQuestions(question){
      let ans="";
      if(question=="DI")  {
        console.log("Which Disease?");
        cin>>ans;
      }
      return ans;
    }

    void startFcProcess(diagnosedDisease){
        let question = "";
        store["DI"] = diagnosedDisease;
        qu.push("DI");
        let cnt = 0;
        while(qu.length > 0){
            if (cnt>10) break;
            let a = qu[qu.length-1];
            qu.pop();
            let c = 0;
            let siz = 0;
            while(siz<clausList[a].size()){
                c++;
                if(c>50) {break;}
                let cls = clausList[a][siz];
                let i = cls;
                while(i<cls+4){
                    if(store[Li[i]] == "-1"){
                        store[Li[i]] = askQuestions(Li[i]);
                    }
                    i++;
                }
                if(store[a]=="-1"){
                    store[a] = askQuestions(a);
                }else{
                    let ans = getAnswers(resClaus(clausList[a][siz]), store); // Calculates all clause questions by calculating rules
                    if(ans == 1)
                        break;
                    else{
                        siz++;
                        continue;
                    }
                }
                c++;
            }
            cnt++;
        }
    }
};


export default forwardChaining;

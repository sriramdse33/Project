import {Component} from 'react';
export class backwardChaining extends Component{
    // map<int, string> concList;
    // map<string,int> Li;
    // map<string, int> visited;
    // map<string, int> store;
    // map<string, string> Questions;
    // map<int, string> clausList;
    // map<string, int> concVar;
    constructor(){
        super();
        this.concList =  {
        10 : "DI",
        20 : "DI",
        30 : "ADL",
        40 : "AD",
        50 : "AD",
        60 : "CD",
        70 : "ID",
        80 : "IC",
        90 : "AF",
        100 : "SU",
        110 : "SU",
        120 : "IA",
        130 : "GD",
        150 : "IS",
        140 : "IG",
        160 : "ID",
        170 : "IS",
        180 : "MD",
        190 : "IB",
        200 : "TP",
        210 : "IM",
        220 : "TP",
        230 : "TP",
        240 : "TP",
        250 : "TP",
        260 : "TP",
        270 : "TP",
        280 : "TP",
        290 : "TP",
        300 : "TP",
        310 : "TP",
        320 : "TP"
      }


        this.Li = {
          "DI" : 10,
          "DI" : 20,
          "ADL" : 30,
          "AD" : 40,
          "AD" : 50,
          "CD" : 60,
          "ID" : 70,
          "IC" : 80,
          "AF" : 90,
          "SU" : 100,
          "SU" : 110,
          "IA" : 120,
          "GD" : 130,
          "IS" : 150,
          "IG" : 140,
          "ID" : 160,
          "IS" : 170,
          "MD" : 180,
          "IB" : 190,
          "TP" : 200,
          "IM" : 210,
          "TP" : 220,
          "TP" : 230,
          "TP" : 240,
          "TP" : 250,
          "TP" : 260,
          "TP" : 270,
          "TP" : 280,
          "TP" : 290,
          "TP" : 300,
          "TP" : 310,
          "TP" : 320
        }

// STORE =  Answers store, stores replies as binary taken from User Inputs -- Changes frequently
        this.store = {
          "BC" : -1,
          "AX" : -1,
          "DL" : -1,
          "EX" : -1,
          "DP" : -1,
          "SU" : -1,
          "PR" : -1,
          "CC" : -1,
          "IN" : -1,
          "AC" : -1,
          "FG" : -1,
          "SD" : -1,
          "DF" : -1,
          "SP" : -1,
          "TL" : -1,
          "GD" : -1,
          "MD" : -1,
          "SX" : -1,
          "PA" : -1,
          "AM" : -1,
          "RT" : -1,
          "RH" : -1,
          "PP" : -1
        }


        //Questions: Questions to prompt the user -- Save in DB
        this.Questions = {
        "BC" : "Is the person exhibiting any behavioral changes?  (Enter Yes or No)",
        "AX" : "Is the person anxious? (Enter Yes or No)",
        "DL" : "Is the person having delusions? (Enter Yes or No)",
        "EX" : "Is the person exasperate? (Enter Yes or No)",
        "DP" : "Is the person suffering from depression? (Enter Yes or No)",
        "PR" : "Is the person suffering from paranoia? (Enter Yes or No)",
        "CC" : "Is the person having difficulty to concentrate? (Enter Yes or No)",
        "IN" : "Is the person suffering from insomnia? (Enter Yes or No)",
        "AC" : "Are there any appetite changes in the person? (Enter Yes or No)",
        "FG" : "Is the person suffering from fatigue? (Enter Yes or No)",
        "SD" : "Is the person exhibiting from self destructive behavior? (Enter Yes or No)",
        "DF" : "Is the person suffering from dying fear? (Enter Yes or No)",
        "SP" : "Is the person having any speech difficulties? (Enter Yes or No)",
        "TL" : "Is the person talkative? (Enter Yes or No)",
        "SX" : "Is the person having sex desire? (Enter Yes or No)",
        "PA" : "Did the person have any panic attacks? (Enter Yes or No)",
        "AM" : "Is the person suffering from amnesia? (Enter Yes or No)",
        "RT" : "Is the person repeatedly going over thoughts? (Enter Yes or No)",
        "RH" : "Is the person having rapid heartbeat? (Enter Yes or No)",
        "PP" : "Is the person suffering from PALPITATION? (Enter Yes or No)"
      };


      this.clausList = {
          1 : "BC",
          5 : "BC",
          6 : "AX",
          9 : "DI",
          10 : "DL",
          13 : "DI",
          14 : "DP",
          17 : "DI",
          18 : "DP",
          21 : "CC",
          22 : "AD",
          25 : "ADL",
          26 : "EX",
          29 : "DI",
          30 : "IN",
          31 : "CC",
          33 : "DI",
          34 : "AC",
          35 : "FG",
          37 : "ID",
          38 : "AF",
          39 : "IC",
          41 : "DI",
          42 : "SD",
          43 : "DF",
          45 : "DI",
          46 : "SD",
          47 : "DF",
          49 : "AD",
          50 : "SU",
          53 : "DI",
          54 : "TL",
          57 : "DI",
          58 : "TL",
          61 : "IA",
          62 : "PA",
          65 : "AD",
          66 : "SU",
          69 : "SU",
          70 : "AF",
          71 : "AD",
          73 : "IS",
          74 : "EX",
          75 : "PR",
          77 : "MD",
          78 : "GD",
          79 : "SX",
          81 : "MD",
          82 : "GD",
          83 : "ADL",
          85 : "AF",
          86 : "CD",
          87 : "IC",
          89 : "IA",
          90 : "PA",
          93 : "CD",
          94 : "SP",
          95 : "SU",
          97 : "IG",
          98 : "PP",
          101 : "IG",
          102 : "SP",
          105 : "IS",
          106 : "PR",
          109 : "IB",
          110 : "ADL",
          111 : "CD",
          113 : "ID",
          114 : "AM",
          117 : "IM",
          118 : "SU",
          119 : "RT",
          121 : "IM",
          122 : "SU",
          123 : "RH",
          125 : "IM",
          126 : "SU",
          127 : "RH",
          128 : "ADL"
        }


      this.visited = {
        "BC" : 0,
        "AX" : 0,
        "DI" : 0,
        "DL" : 0,
        "EX" : 0,
        "DP" : 0,
        "SU" : 0,
        "PR" : 0,
        "CC" : 0,
        "IN" : 0,
        "AC" : 0,
        "FG" : 0,
        "SD" : 0,
        "DF" : 0,
        "SP" : 0,
        "TL" : 0,
        "GD" : 0,
        "MD" : 0,
        "SX" : 0,
        "PA" : 0,
        "AM" : 0,
        "RT" : 0,
        "RH" : 0,
        "PP" : 0,
        "DI" : 0,
        "ID" : 0,
        "ADL" : 0,
        "IC" : 0,
        "CD" : 0,
        "AF" : 0,
        "IA" : 0,
        "SU" : 0,
        "IG" : 0,
        "IS" : 0,
        "MD" : 0,
        "GD" : 0,
        "IB" : 0,
        "IM" : 0
      }

      this.concVar = {
        "DI" :   -1,
        "ADL" :  -1,
        "AD" :   -1,
        "CD" :  -1,
        "ID" :  -1,
        "IC" :  -1,
        "AF" :  -1,
        "IA" :  -1,
        "SU" :  -1,
        "IG" :  -1,
        "IS" :  -1,
        "MD" :  -1,
        "GD" :  -1,
        "IB" :  -1,
        "IM" :  -1
      };

    }
  //Calculates starting number in stack given rule number
     calc(rule){
            let k = 4*(rule/10-1)+1;
            return k;
    }

    // Calculates rule number given clause number.
     calcClaus(claus){
    return  Math.floor((10*(claus-1+4)/4)/10)*10;
    }

    //Prints clause variable list
     printClausVariableList(abbr){
        console.log("****************** Clause Variable List ******************");
         for(let i=1;i<=32*4;i++){
            console.log("CLAUSE ",i," ",abbr[this.clausList[i]]);
        }
    }

    //Prints variable list
     printVariableList(abbr){
        let cnt = 1;
        console.log("****************** Variable List ******************");
         Object.keys(this.store).forEach((k, v) => {
             console.log(cnt++,". ",abbr[k]);
         });
    }

    //Function to print conclusion variable list
     printConcVariableList(abbr){
        console.log("******** Conclusion Variable List *************");
        console.log(this.concList[10]);
        for(const [k,v] of Object.entries(this.concList)){
          console.log(k," ",abbr[v]);
        }

      }

   //Prints answers stored
     printStore(store, concVar){
      console.log("Result Variables ");
      Object.entries(store).forEach((k, v) => {
        if(v == 1){
          console.log(k," ",v);
        }
      });

      console.console.log("Conclusion Variables ");
      Object.entries(this.concVar).forEach((k, v) => {
        if(v == 1){
          console.log(k, " ", v );
        }
      });
    }

    checkRuleSatisfied(ruleNum, store, concVar){
      let ans = "";

      if(store["BC"] == 0 )
      {
        concVar["DI"] = 0;
        ans="NO_DISEASE";
      }

      if( store["BC"] == 1 && store["AX"]==1  && concVar["DI"]==-1)
      {
          concVar["DI"] = 1;
          console.log(" DISORDER ");
      }
      //    if(store["SY"] = 0) {concVar["DI"] = 0;  ans="NO_DISEASE";}
      if( concVar["DI"]==1 && store["DL"] ==1 && concVar["ADL"] == -1)
      {
          concVar["ADL"] = 1;
          console.log(" CLASS 1 DISORDER ");
      }

      if( concVar["DI"]==1  && store["DP"]==1 && concVar["AD"] ==-1)
      {
          concVar["AD"] =1;
          console.log(" CLASS 2 DISORDER ");
      }

      if( concVar["DI"]== 1  && store["DP"]==0 )
          concVar["AD"] = 0;

      if( store["CC"] ==1 && concVar["AD"]==1 && concVar["CD"] == -1 )
      {
          concVar["CD"] = 1;
          console.log(" CLASS 3 DISORDER ");
      }

      if( concVar["ADL"]==1 && store["EX"] == 1 && concVar["ID"]==-1)
      {
          concVar["ID"]=1;
          console.log("INITIAL STAGE DYSTHYMIA ");
      }

      if( concVar["DI"]==1 && store["IN"] == 1 && store["CC"] == 1 &&concVar["IC"]==-1 )
      {
          concVar["IC"]=1;
          console.log("CLASS 4 DISORDER ");
          ans = "IC";
      }

      if( concVar["DI"]==1 && store["AC"] == 1 && store["FG"] == 1 && concVar["AF"]==-1)
      {
          concVar["AF"]=1;
          console.log("CLASS 5 DISORDER");
          ans = "AF";
      }

      if( concVar["DI"]==1 && store["SD"]==1 && store["DF"] ==1 && concVar["SU"]==-1)
      {
          concVar["SU"]=1;
          console.log("SUICIDE (SUICIDAL THOUGHTS) ");
          ans = "SU";
      }

      if( concVar["DI"]==1 && store["SD"]==0 && store["DF"] == 0  )
      {
          concVar["SU"]=0;
      }

      if( concVar["AD"] ==1 && concVar["SU"] == 0 && concVar["IA"]==-1)
      {
          concVar["IA"]=1;
          console.log("INITIAL STAGE PANICDISORDERAGROPHOBIA ");
          ans = "IA";
      }

      if( concVar["DI"] == 1 && store["TL"] == 1 && concVar["GD"] == -1)
      {
          concVar["GD"] = 1;
          console.log(" GRANDIOSITY ");
          ans = "GD";
      }

      if( concVar["DI"] == 1 &&  store["TL"] == 0 && concVar["IS"] == -1)
      {
          concVar["IS"] = 1;
          console.log(" INITIAL STAGE SCHIZOAFECTIVE_DISORDER ");
      }

      if(concVar["IA"]==1 && store["PA"] == 0 && concVar["IG"]==-1)
      {
          concVar["IG"]=1;
          console.log("INITIAL STAGE GENERALIZED_ANXIETY_DISORDER ");
          ans = "IG";
      }

      if(concVar["AD"]==1 && concVar["SU"]==1 && concVar["ID"]==-1 )
      {
          concVar["ID"]=1;
          console.log("INITIAL STAGE DISSOCIATIVEDISORDER ");
          ans = "ID";
      }

      if( concVar["SU"] ==1 && concVar["AF"]==1 && concVar["AD"]==1 && concVar["IS"]==-1)
      {
          concVar["IS"]=1;
          console.log("INITIAL STAGE SCHIZOAFECTIVE_DISORDER");
          ans = "IS";
      }

      if( concVar["IS"]==1 && store["EX"]==0 && store["PR"]==0 && concVar["MD"]==-1)
      {
          concVar["MD"]=1;
          console.log("MANIC DEPRESSION");
          ans = "MD";
      }

      if( concVar["MD"]==1 && concVar["GD"]==1 && store["SX"] == 1 && concVar["IB"]==-1 )
      {
          concVar["IB"]=1;
          console.log("INITIAL STAGE BIPOLAR DISORDER ");
          ans = "IB";
      }

      if (concVar["MD"] == 1 && concVar["GD"] == -1 && concVar["ADL"] == 0)
      {
          ans="SCHIZOAFECTIVE_DISORDER";
      }

      if( concVar["AF"]==1  && concVar["CD"] == 1 &&  concVar["IC"] == 1 && concVar["IM"]==-1)
      {
          concVar["IM"]=1;
          console.log("INITIAL STAGE MDD ");
          ans = "IM";
      }

      if(concVar["ID"]==1  && concVar["AF"]==1 && concVar["IC"] == 1 && concVar["SU"]==0)
      {
          ans="DYSTHYMIA";
      }

      if(concVar["IA"]==1 && store["PA"] == 1 )
          ans="PANICDISORDERAGROPHOBIA";

      if( concVar["CD"]==1 && store["SP"]== 1 && concVar["SU"]==1 )
          ans="SCHIZOPHRENIA";

      if( concVar["IG"]==1 && store["PP"]==1 )
          ans="GENERALIZED_ANXIETY_DISORDER";

      if( concVar["IG"]==1 && store["SP"]== 0  )
          ans="GENERALIZED_ANXIETY_DISORDER";

      if( concVar["IS"]== 1 && store["PR"] == 1 )
          ans="SCHIZOAFECTIVE_DISORDER";

      if( concVar["IB"]==1 && concVar["AD"]==1 && concVar["CD"]==1 )
          ans="BIPOLAR_DISORDER";

      if( concVar["ID"]==1 && store["AM"] == 1 )
          ans="DISSOCIATIVEDISORDER";

      if( concVar["IM"]==1 && concVar["SU"] == 1 &&  store["RT"]==1 )
          ans="MAJORDEPRESSDISORDER";

      if( concVar["IM"]==1 && concVar["SU"]==0 && store["RH"] == 1 )
          ans="GENERALIZED_ANXIETY_DISORDER";

      if( concVar["IM"]==1 && concVar["SU"]==0 && store["RH"] == 0  && store["ADL"]==1)
          ans="SCHIZOPHRENIA";

      return ans;
    }


    startProcess(abbr){
        let finalAns = "";
        let start = "";
        console.log("Do you want to start ? (Enter Yes / No) ");
        //cin>>start;
        start = prompt("What is your name?");
        start = start.toLowerCase();
        //transform(start.begin(), start.end(), start.begin(), ::tolower);
        let startResp = (start=="yes");
        if(startResp==1){
            let stk = [];
            for(const [k,v] of Object.entries(this.concList)){
              stk.push(k);
              let c = 0;
              while(stk.length >0){
                  if(c>23){
                      break;
                  }
                  let rs = this.calc(stk[stk.length-1]);
                  let  j =rs;
                  let cnt = 0;
                  while (j<rs+4){
                      let vr = this.clausList[j]; // Gets Variables of IF // 1-4.. 5-8 clauselist
                      console.log("Vr :", vr);
                      if(this.visited[vr]==0){// Question havent been asked yet
                          this.visited[vr] = 1;
                          console.log(vr," ConcVar :", this.concVar["DI"]);
                          if((vr in this.concVar) && this.concVar[vr] === -1){ // Check that variable is sub-conlcusion variable
                            console.log("Inside ....", vr, this.Li);
                              stk.push(this.Li[vr]);
                              break;
                          }else{
                              if((vr in this.Questions) && vr.length>0){
                                  console.log(this.Questions[vr]);
                                  let answer = "";
                                  answer = prompt(this.Questions[vr]);
                                  answer = answer.toLowerCase();
                                  let ansResp = (answer=="yes");
                                  this.store[vr] = ansResp;
                                  j++;
                              }else{
                              j++;
                              }
                          }
                      }else{ //Already visited that question
                          j++;
                      }
                      cnt+=1;
                  }
                  console.log("Stk ",stk);
                  if(cnt == 4) {
                      this.checkRuleSatisfied(stk[stk.length - 1], this.store, this.concVar);
                      stk.pop();
                  }
              c++;
              }
              let finl = this.checkRuleSatisfied(k, this.store, this.concVar);
              if(finl=="" || (finl in this.concVar)){
                  continue;
                  }else{
                  console.log("****************************Success*********************");
                  finalAns  = finl;
                  console.log("PATIENT IS SUFFERING FROM : ", finl, " DISORDER.");
                  break;
              }
            }
        }
    return finalAns;
}

};



export default backwardChaining;

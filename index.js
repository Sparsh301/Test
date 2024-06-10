const express=require("express")

const users=[{
    name: "Sparsh",
    kidney:[{
        healthy: false
    }]
}]

const app=express()

app.get('/',function(req,res){
    sparshkidney=users[0].kidney;
    let workingcnt=0;
    let numberkidney=sparshkidney.length;
    for(let i=0;i<sparshkidney.length;i++){
        if(sparshkidney[i].healthy)
            workingcnt++;
    }

    let notworking=sparshkidney.length-workingcnt;

    res.json({
        numberkidney,
        workingcnt,
        notworking
    })
})

app.use(express.json())
app.post('/',function(req,res){

    let ishealthy=req.body.ishealthy;

    users[0].kidney.push({
        healthy:ishealthy
    })

    res.json({
        msg:"Done"
    })
})

app.put('/',function(req,res){

    
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }

    res.json({putmsg:"done"});
})

app.delete('/',function(req,res){
    const newkidney=[]

    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy)
            newkidney.push({healthy:true});
    }

    users[0].kidney=newkidney;

    res.json({delmsg:"done"});
})

app.listen(3000)
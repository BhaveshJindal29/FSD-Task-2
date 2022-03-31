studentInfo = [
    {
        name:"A",
        score:"95%"
    },
    {
        name:"B",
        score:"90%"
    },
    {
        name:"C",
        score:"98%"
    }
];

function getStudentDetails(){
    console.log("getStudentDetails")

    setTimeout(()=>{
        let Stundent ="";

        Stundent.forEach((s)=>{
            console.log(s);
        })
    }),1000
}

function AddStudent(newStudent){
    console.log("Adding New Studen");

    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{
                studentInfo.push(newStudent)
                let flag= true;
                if(flag){
                    resolve()
                }else{
                    reject("Some Error has been Occured")
                }
            },1000)
        }
    )
}


AddStudent({name:"D",score:"80%"}).then(getStudentDetails).catch(err=>console.log(err));



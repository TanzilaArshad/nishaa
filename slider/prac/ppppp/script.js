let db =[
    {
        q:"Q:1 What is the full form of HTML?",
        a:"Hydra Text Markup Language",
        b:"Hyper Text Markup Language",
        c:"Hyper Text Makeup Language",
        d:"Hyper Tetra Markup Language",
        correct:'mcq2'
    },
    {
        q:"Q:2 What is the full form of CSS?",
        a:"Cascading Style Sheet",
        b:"Cascading settled aheet",
        c:"Castle Style Sheet",
        d:"Cascading Style styling",
        correct:'mcq1'
    },
    {
        q:"Q:3 For which purpose we use Js? ",
        a:"To add functionality",
        b:"To design the website",
        c:"Making structure",
        d:"None of these",
        correct:'mcq1'
    },
    {
        q:"Q:4 How many list types?",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        correct:'mcq3'
    },
    {
        q:"Q:5 for which p tag use?",
        a:"Paragraph",
        b:"partition",
        c:"both of them",
        d:"none of these",
        correct:'mcq1'
    },
    {
        q:"Q:6 what is the abbriviation of JS?",
        a:"JavScript",
        b:"javaSytle",
        c:"JavaSheet",
        d:"JavaScript",
        correct:'mcq4'
    },
    {
        q:"Q:7 Why we use href tag in HTML?",
        a:"To make sapce",
        b:"For add styling inline",
        c:"To make links",
        d:"None of them",
        correct:'mcq3'
    },
    {
        q:"Q:8 How many Types of CSS?",
        a:"3",
        b:"5",
        c:"6",
        d:"7",
        correct:'mcq1'
    },
    {
        q:"Q:9 To write Css in tags we use?",
        a:"internal",
        b:"External",
        c:"InTag",
        d:"Inline",
        correct:'mcq4'
    },
    {
        q:"Q:10 How we make space with in border?",
        a:"Padding",
        b:"Margin",
        c:"Gap",
        d:"Space between",
        correct:'mcq1'
    },
]
//fetchig classes:
let Question = document.querySelector(".Question");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let same = document.querySelectorAll(".same");
let btn = document.querySelector(".btn");
let box = document.querySelector(".box");


let count=0;
let marks=0;
let f1 = ()=>{
    Question.innerText= db[count].q;
    op1.innerText= db[count].a;
    op2.innerText= db[count].b;
    op3.innerText= db[count].c;
    op4.innerText= db[count].d;
}
f1();
let f2= ()=>{
    let  selected;
    same.forEach((c) => {
        if(c.checked){
            selected = c.id;
        }
    })
    return selected;
}
btn.addEventListener("click", ()=>{
    let ans =f2();
    //undefined use to stay there if ans is not selected
    if(ans==undefined){
        alert("please choose the answer before submitting")
        return;
    }
    //console.log(ans);
    if(ans==db[count].correct)
    {
        marks++;
    }
    count++;
    let f4= ()=>{
        same.forEach((e) => {
            if(e.checked){
            e.checked=false;
            }
        })
    }
    f4();
    if(count<db.length)
    {
        f1();

    }
    else{
       box.innerHTML=`<h3>Your Scores ${marks}</h3>`;
    }

})



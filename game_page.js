player1name=localStorage.getItem("key_player1");
player2name=localStorage.getItem("key_player2");

player1score=0;
player2score=0;

document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="Question Turn : "+player1name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2name;

function send()
{
    getword=document.getElementById("Word").value;
    word=getword.toLowerCase();
    console.log("word in lowerCase = " + word);

    firstletter=word.charAt(1);
    console.log(firstletter);

    lengthdivideby2=Math.floor(word.length/2);
    secondletter=word.charAt(lengthdivideby2);
    console.log(secondletter);

    lengthminus1=word.length-1;
    lastletter=word.charAt(lengthminus1);
    console.log(lastletter);

    replacefirstletter=word.replace(firstletter,"_");
    replacesecondletter=replacefirstletter.replace(secondletter,"_");
    replacelastletter=replacesecondletter.replace(lastletter,"_");
    console.log(replacelastletter);

    questionrow="<h4 id='word=display'>Q. "+replacelastletter+"</h4><br>";
    answerinputbox="Answer : <input type='text' id='input_check_box'><br><br><br>";
    checkbutton="<button class='btn btn-info' onclick='check();'>Check</button>";
    row=questionrow+answerinputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Word").value="";
}
question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
     console.log(answer);
    if(answer==word)
    {
        if(answer_turn=="player1")
        {
            console.log("answer_turn "+answer_turn);
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;

        }
        else
        {
            console.log("answer_turn "+answer_turn);
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }
    if(question_turn=="player1")
    {
      question_turn="player2";
    document.getElementById("player_question").innerHTML="Question Turn - "+player2name;
    }
     else
     {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1name;
     }
     if(answer_turn=="player1")
    {
      answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn - "+player2name;
    }
     else
     {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1name;
     }
     document.getElementById("output").innerHTML="";
}

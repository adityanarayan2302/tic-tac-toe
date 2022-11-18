let clk=0;
let arr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
] 
//inputting value of X and O in there respective button
function inputval(id){
    if(clk%2==0){
        $(`#${id}`).prop('disabled',true);
        $(`#${id}`).html('X');       
        clk++
    }else{
        $(`#${id}`).prop('disabled',true);
        $(`#${id}`).html('O');
        clk++
    }
}
//updating the matrix according to the input by the user
function check(id){
    if(id=='b1'){
        if(id=='b1'&&clk%2==0){
            arr[0][0]=1
        }else{
            arr[0][0]=2
        }
    }
    else if(id=='b2'){
        if(id=='b2'&&clk%2==0){
            arr[0][1]=1
        }else{
            arr[0][1]=2
        }
    }
    else if(id=='b3'){
        if(id=='b3'&&clk%2==0){
            arr[0][2]=1
        }else{
            arr[0][2]=2
        }
    }
    else if(id=='b4'){
        if(id=='b4'&&clk%2==0){
            arr[1][0]=1
        }else{
            arr[1][0]=2
        }
    }else if(id=='b5'){
        if(id=='b5'&&clk%2==0){
            arr[1][1]=1
        }else{
            arr[1][1]=2
        }
    }else if(id=='b6'){
        if(id=='b6'&&clk%2==0){
            arr[1][2]=1
        }else{
            arr[1][2]=2
        }
    }else if(id=='b7'){
        if(id=='b7'&&clk%2==0){
            arr[2][0]=1
        }else{
            arr[2][0]=2
        }
    }else if(id=='b8'){
        if(id=='b8'&&clk%2==0){
            arr[2][1]=1
        }else{
            arr[2][1]=2
        }
    }else if(id=='b9'){
        if(id=='b9'&&clk%2==0){
            arr[2][2]=1
        }else{
            arr[2][2]=2
        }
    }    
    winner();
}
//checking if there is any winner
function winner(){
    let game_freeze = false;
    if(arr[0][0]==1&&arr[0][1]==1&&arr[0][2]==1 
        ||arr[1][0]==1&&arr[1][1]==1&&arr[1][2]==1
        ||arr[2][0]==1&&arr[2][1]==1&&arr[2][2]==1
        ||arr[0][0]==1&&arr[1][0]==1&&arr[2][0]==1
        ||arr[0][1]==1&&arr[1][1]==1&&arr[2][1]==1
        ||arr[0][2]==1&&arr[1][2]==1&&arr[2][2]==1
        ||arr[0][0]==1&&arr[1][1]==1&&arr[2][2]==1
        ||arr[0][2]==1&&arr[1][1]==1&&arr[2][0]==1){
            game_freeze=true
            alert('O won the game')
        }else if(arr[0][0]==2&&arr[0][1]==2&&arr[0][2]==2 
            ||arr[1][0]==2&&arr[1][1]==2&&arr[1][2]==2
            ||arr[2][0]==2&&arr[2][1]==2&&arr[2][2]==2
            ||arr[0][0]==2&&arr[1][0]==2&&arr[2][0]==2
            ||arr[0][1]==2&&arr[1][1]==2&&arr[2][1]==2
            ||arr[0][2]==2&&arr[1][2]==2&&arr[2][2]==2
            ||arr[0][0]==2&&arr[1][1]==2&&arr[2][2]==2
            ||arr[0][2]==2&&arr[1][1]==2&&arr[2][0]==2){
                game_freeze=true
                alert('X won the Game')
            }
            if(game_freeze==true){
                reset()
            }
}
//function to reset the matrix
function reset(){
    arr = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ] 
    for(let i=0;i<10;i++){
        clk=0;
        $(`#b${i}`).prop('disabled',false);
        $(`#b${i}`).html('');
    }
}
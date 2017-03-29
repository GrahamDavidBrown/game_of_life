function buildGameBoard(x, y){
    let $board = $('<table>');
    let data_board = [];
    for(var i = 0; i < y; i++){
        data_board += []
        let $row = $('<tr>');
        $board.append($row);
        for(var j = 0; j < x; j++){
            let $cell = $('<td>');
            $row.append($cell);
            // if(Math.random() < .2) {
            //     $cell.addClass('mine')
            // }
            $cell.attr('id', 'cell_' + j + '_' + i);
            $cell.attr('index', (j, i))
            $cell.on('click', cell_clicked);

            // $cell.on('contextmenu', cell_right_clicked);
        }
    }
    $('#gameBoard').append($board);
    gamePlay($board, x, y, data_board);

}
function get_cell(i, j){
    return $('#cell_' + i + "_" + j)
}

function cell_clicked(e){
    let $clickedCell = $(e.target);
    // console.log($clickedCell);
    let y = e.target.parentNode.rowIndex
    let x = e.target.cellIndex
    console.log(x,y)
    $clickedCell.toggleClass("alive");
}
function hello(){
  alert('hello')
}
function game_timer(){
    game_timer = setInterval(gamePlay, 1000);}

function gamePlay($board, x, y, data_board){
    console.log('tick');
    // thing = $('#cell_1_1');
    // console.log(thing)
    for(var i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
          current = get_cell(i, j)
          console.log(current
          n = getNeighbors(i, j)
          // for(var i = 0, size = n.length; i < size ; i++){
             // console.log(n[i])
   }
}
       }



function getNeighbors(i, j){
  // x-1,y-1   x,y-1   x+1,y-1
  // x-1,y     x,y     x+1,y
  // x-1,y+1   x,y+1   x+1, y+1
  let y = $('#cell_' + i + "_" + j)
  // console.log(y)
  // console.log(y.parentNode.rowIndex)
  // let x = $('#cell_' + i + "_" + j).cellIndex;
  let xe = i-1;
  let xw = i+1;
  let yn = j-1;
  let ys = j+1;
  let ne = get_cell(xe, yn);
  let n  = get_cell(i,  yn);
  let nw = get_cell(xw, yn);
  let e  = get_cell(xe, j);
  let w  = get_cell(xw,  j);
  let se = get_cell(xe, ys);
  let s  = get_cell(i,  ys);
  let sw = get_cell(xw, ys);

  return [ne,n,nw,e,w,se,s,sw];
}

game_timer()
buildGameBoard(40,40)

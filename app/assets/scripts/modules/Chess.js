var pieces = new Array(32);
var moveNum = -1;
var timer;

var chessCanvas = document.getElementById("board");
var chessContext = chessCanvas.getContext("2d");


//creating the chess board
function drawBoard() {
    chessContext.clearRect(0, 0, 400, 400);

    //coloring the squares
    chessContext.fillStyle = "#55A14C";

    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if ((x + y) % 2) {
                chessContext.fillRect(50 * x, 50 * y, 50, 50);
            }
        }
    }

    chessContext.strokeRect(0, 0, 400, 400);
    drawAllPieces();

}


var bPawn = new Image();
var bRook = new Image();
var bKnight = new Image();
var bBishop = new Image();
var bQueen = new Image();
var bKing = new Image();
var wPawn = new Image();
var wRook = new Image();
var wKnight = new Image();
var wBishop = new Image();
var wQueen = new Image();
var wKing = new Image();

var pieces = new Array(32);

function loadImages() {
    bPawn.src = "assets/images/bPawn.png";
    bRook.src = "assets/images/bRook.png";
    bKnight.src = "assets/images/bKnight.png";
    bBishop.src = "assets/images/bBishop.png";
    bQueen.src = "assets/images/bQueen.png";
    bKing.src = "assets/images/bKing.png";
    wPawn.src = "assets/images/wPawn.png";
    wRook.src = "assets/images/wRook.png";
    wKnight.src = "assets/images/wKnight.png";
    wBishop.src = "assets/images/wBishop.png";
    wQueen.src = "assets/images/wQueen.png";
    wKing.src = "assets/images/wKing.png";
}

function ChessPiece() {
    this.image = null;
    this.x = 0;
    this.y = 0;
    this.height = 0;
    this.width = 0;
    this.killed = false;
}

//draw a chess piece

function drawPiece(p) {
    if (!p.killed)
        chessContext.drawImage(p.image,
            (50 - p.width) / 2 + (50 * p.x),
            50 - p.height + (50 * p.y),
            p.width,
            p.height);

}


//draw all chess pieces

function drawAllPieces() {
    for (var i = 0; i < 32; i++) {
        if (pieces[i] != null) {
            drawPiece(pieces[i]);
        }
    }
}

function createPieces() {
    var piece;

    //black pawns
    for (var i = 0; i < 8; i++) {
        piece = new ChessPiece();
        piece.image = bPawn;
        piece.x = i;
        piece.y = 1;
        piece.height = 50;
        piece.width = 45;

        pieces[i] = piece;
    }

    //black rooks
    piece = new ChessPiece();
    piece.image = bRook;
    piece.x = 0;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[8] = piece;

    piece = new ChessPiece();
    piece.image = bRook;
    piece.x = 7;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[9] = piece;

    // Black knights
    piece = new ChessPiece();
    piece.image = bKnight;
    piece.x = 1;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[10] = piece;

    piece = new ChessPiece();
    piece.image = bKnight;
    piece.x = 6;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[11] = piece;

    // Black bishops
    piece = new ChessPiece();
    piece.image = bBishop;
    piece.x = 2;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[12] = piece;

    piece = new ChessPiece();
    piece.image = bBishop;
    piece.x = 5;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[13] = piece;

    // Black queen
    piece = new ChessPiece();
    piece.image = bQueen;
    piece.x = 3;
    piece.y = 0;
    piece.height = 50;
    piece.width = 45;
    pieces[14] = piece;

    // Black king
    piece = new ChessPiece();
    piece.image = bKing;
    piece.x = 4;
    piece.y = 0;
    piece.height = 55;
    piece.width = 45;
    pieces[15] = piece;

    // White pawns
    for (var i = 0; i < 8; i++) {
        piece = new ChessPiece();
        piece.image = wPawn;
        piece.x = i;
        piece.y = 6;
        piece.height = 50;
        piece.width = 45;
        pieces[16 + i] = piece;

    }

    // White rooks
    piece = new ChessPiece();
    piece.image = wRook;
    piece.x = 0;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[24] = piece;

    piece = new ChessPiece();
    piece.image = wRook;
    piece.x = 7;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[25] = piece;

    // White knights
    piece = new ChessPiece();
    piece.image = wKnight;
    piece.x = 1;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[26] = piece;

    piece = new ChessPiece();
    piece.image = wKnight;
    piece.x = 6;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[27] = piece;

    // White bishops
    piece = new ChessPiece();
    piece.image = wBishop;
    piece.x = 2;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[28] = piece;

    piece = new ChessPiece();
    piece.image = wBishop;
    piece.x = 5;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[29] = piece;

    // White queen
    piece = new ChessPiece();
    piece.image = wQueen;
    piece.x = 3;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[30] = piece;

    // White king
    piece = new ChessPiece();
    piece.image = wKing;
    piece.x = 4;
    piece.y = 7;
    piece.height = 50;
    piece.width = 45;
    pieces[31] = piece;

}

loadImages();
createPieces();

setTimeout(drawBoard, 500);

//moving chess pieces



$('#move1').on('click', function () {

    pieces[19].y = 4;

    moveNum++;
    drawBoard();
    drawAllPieces();
});
$('#move2').on('click', function () {

    pieces[11].y = 2;
    pieces[11].x = 5;

    $("#move1").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move3').on('click', function () {

    pieces[18].y = 4;

    $("#move1").click();
    $("#move2").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move4').on('click', function () {

    pieces[6].y = 2;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move5').on('click', function () {

    pieces[26].y = 5;
    pieces[26].x = 2;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    $("#move4").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move6').on('click', function () {

    pieces[13].y = 1;
    pieces[13].x = 6;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    $("#move4").click();
    $("#move5").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move7').on('click', function () {

    pieces[20].y = 4;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    $("#move4").click();
    $("#move5").click();
    $("#move6").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move8').on('click', function () {

    pieces[3].y = 2;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    $("#move4").click();
    $("#move5").click();
    $("#move6").click();
    $("#move7").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move9').on('click', function () {

    pieces[27].y = 5;
    pieces[27].x = 5;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    $("#move4").click();
    $("#move5").click();
    $("#move6").click();
    $("#move7").click();
    $("#move8").click();

    moveNum++;
    drawBoard();
    drawAllPieces();
});

$('#move10').on('click', function () {

    pieces[9].x = 5;
    pieces[15].x = 6;

    $("#move1").click();
    $("#move2").click();
    $("#move3").click();
    $("#move4").click();
    $("#move5").click();
    $("#move6").click();
    $("#move7").click();
    $("#move8").click();
    $("#move9").click();
    moveNum++;
    drawBoard();
    drawAllPieces();
});
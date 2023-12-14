let bandBtn = document.getElementById('bandBtn');
let coversBtn = document.getElementById('coversBtn');
let albumsBtn = document.getElementById('albumsBtn');
let membersBtn = document.getElementById('membersBtn');
let translateBtn = document.getElementById('translateBtn');
let language = "Français";
let burgerBtn = document.getElementById('burgerBtn');
let burgerIs = 0;

let bandBloc = document.getElementById('bandBloc');
let coversBloc = document.getElementById('coversBloc');
let albumsBloc = document.getElementById('albumsBloc');
let membersBloc = document.getElementById('membersBloc');

burgerBtn.addEventListener('click', function (){
    if (burgerIs == 0){
        bandBtn.style.display="flex";
        coversBtn.style.display="flex";
        albumsBtn.style.display="flex";
        membersBtn.style.display="flex";
        translateBtn.style.display="flex";
        burgerIs=burgerIs+1;
    } else {
        bandBtn.style.display="none";
        coversBtn.style.display="none";
        albumsBtn.style.display="none";
        membersBtn.style.display="none";
        translateBtn.style.display="none";
        burgerIs=burgerIs-1;
    }
})



translateBtn.addEventListener('click', function (){
    if (language == "Français"){
        language="English";
    } else {
        language="Français";
    }
})

bandBtn.style.fontWeight="bold";


bandBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="bold";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="normal";

    bandBloc.style.display="flex";
    coversBloc.style.display="none";
    albumsBloc.style.display="none";
    membersBloc.style.display="none";
})

coversBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="bold";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="normal";

    bandBloc.style.display="none";
    coversBloc.style.display="flex";
    albumsBloc.style.display="none";
    membersBloc.style.display="none";
})

albumsBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="bold";
    membersBtn.style.fontWeight="normal";

    bandBloc.style.display="none";
    coversBloc.style.display="none";
    albumsBloc.style.display="flex";
    membersBloc.style.display="none";
})

membersBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="bold";

    bandBloc.style.display="none";
    coversBloc.style.display="none";
    albumsBloc.style.display="none";
    membersBloc.style.display="flex";
})
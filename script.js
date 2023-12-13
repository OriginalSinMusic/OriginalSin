let bandBtn = document.getElementById('bandBtn');
let coversBtn = document.getElementById('coversBtn');
let albumsBtn = document.getElementById('albumsBtn');
let membersBtn = document.getElementById('membersBtn');
let contactsBtn = document.getElementById('contactsBtn');
let translateBtn = document.getElementById('translateBtn');

let bandBloc = document.getElementById('bandBloc');
let coversBloc = document.getElementById('coversBloc');
let albumsBloc = document.getElementById('albumsBloc');
let membersBloc = document.getElementById('membersBloc');
let contactsBloc = document.getElementById('contactsBloc');

bandBtn.style.fontWeight="bold";
bandBloc.style.display="flex";

bandBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="bold";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="normal";
    contactsBtn.style.fontWeight="normal";

    bandBloc.style.display="flex";
    coversBloc.style.display="none";
    albumsBloc.style.display="none";
    membersBloc.style.display="none";
    contactsBloc.style.display="none";
})

coversBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="bold";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="normal";
    contactsBtn.style.fontWeight="normal";

    bandBloc.style.display="none";
    coversBloc.style.display="flex";
    albumsBloc.style.display="none";
    membersBloc.style.display="none";
    contactsBloc.style.display="none";
})

albumsBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="bold";
    membersBtn.style.fontWeight="normal";
    contactsBtn.style.fontWeight="normal";

    bandBloc.style.display="none";
    coversBloc.style.display="none";
    albumsBloc.style.display="flex";
    membersBloc.style.display="none";
    contactsBloc.style.display="none";
})

membersBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="bold";
    contactsBtn.style.fontWeight="normal";

    bandBloc.style.display="none";
    coversBloc.style.display="none";
    albumsBloc.style.display="none";
    membersBloc.style.display="flex";
    contactsBloc.style.display="none";
})

contactsBtn.addEventListener('click', function (){
    bandBtn.style.fontWeight="normal";
    coversBtn.style.fontWeight="normal";
    albumsBtn.style.fontWeight="normal";
    membersBtn.style.fontWeight="normal";
    contactsBtn.style.fontWeight="bold";

    bandBloc.style.display="none";
    coversBloc.style.display="none";
    albumsBloc.style.display="none";
    membersBloc.style.display="none";
    contactsBloc.style.display="flex";
})


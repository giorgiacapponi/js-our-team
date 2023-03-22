
const memberTeamArray=[
    {
        nome:'Wayne Barnett',
        position:'founder&ceo',
        photo:'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome:'Angela Carrol',
        position:'chief editor',
        photo:'angela-caroll-chief-editor.jpg'
    },
    {
        nome:'walter Gordon',
        position:'office manager',
        photo:'walter-gordon-office-manager.jpg'
    },
    {
        nome:'angela lopez',
        position:'social media manager',
        photo:'angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        position:'Developer',
        photo:'scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        position:'Graphic Designer',
        photo:'barbara-ramos-graphic-designer.jpg'
    },
]
const row=document.querySelector('.row');
for(let i=0;i<memberTeamArray.length;i++){
    console.log('nome',memberTeamArray[i].nome,'ruolo',memberTeamArray[i].position,'photo',memberTeamArray[i].photo);

row.innerHTML +=`<div class="col-4 mb-5">
                <div class="card">
                    <img src="img/${memberTeamArray[i].photo}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3>${memberTeamArray[i].nome}</h3>
                      <h5>${memberTeamArray[i].position}</h5>
                    </div>
                  </div>
            </div>`

}



  $.getJSON("Json/amount_weapons.json", function(data){
       console.log(data);

        var smgmin = data.MINISMG
        var smgminmin = data.MINIminSMG

        var assault = data.ASSAULTRIFLE
        var miniak = data.MINIAK

        var deagle = data.DEAGLE
        var pistol = data.PISTOL
        var pistolmk = data.PISTOLMKII
        var pistolpocket = data.POCKETPISTOL
        var pistolcombat = data.COMBATPISTOL
        var revolver = data.REVOLVER

        var baseball = data.BASEBALLBAT
        var kiy = data.KIY
        var golf = data.GOLFCLUB
        var hammer = data.Hammer
        var key = data.ABJUSTABLEWRENCH
        var fomka = data.FOMKA
        var lamp = data.LAMP

        var shotgun = data.BULLPUPSHOTGUN
        var pump = data.PUMP

       $('.weapons__smg').append("(" + "кол-во: " + smgmin + ")")
       $('.minminsmg').append("(" + "кол-во: " + smgminmin + ")")

       $('.weapons__assaultr').append("(" + "кол-во: " + assault + ")")
       $('.weapons__assault').append("(" + "кол-во: " + miniak + ")")

       $('.deagle').append( "(" + "кол-во: " + deagle + ")")
       $('.pistol').append("(" + "кол-во: " + pistol + ")")
       $('.pistolmk2').append("(" + "кол-во: " + pistolmk + ")")
       $('.karmanpistol').append("(" + "кол-во: " + pistolpocket + ")")
       $('.combatpistol').append("(" + "кол-во: " + pistolcombat + ")")
       $('.revolver').append("(" + "кол-во: " + revolver + ")")

       $('.baseball').append("(" + "кол-во: " + baseball + ")")
       $('.kiy').append("(" + "кол-во: " + kiy + ")")
       $('.golf').append("(" + "кол-во: " + golf + ")")
       $('.hammer').append("(" + "кол-во: " + hammer + ")")
       $('.key').append("(" + "кол-во: " + key + ")")
       $('.fomka').append("(" + "кол-во: " + fomka + ")")
       $('.lamp').append("(" + "кол-во: " + lamp + ")")

       $('.blyap').append("(" + "кол-во: " + shotgun + ")")
       $('.weapons__shotgun').append("(" + "кол-во: " + pump + ")")
        

 })   

   $.getJSON("Json/amount_ammo.json", function(data){
    console.log(data);

    var assault_ammo = data.ASSAULT_AMMO
    var mg_ammo = data.MG_AMMO
    var pistol_ammo = data.PISTOL_AMMO
    var shotgun_ammo = data.SHOTGUN_AMMO
    var smg_ammo = data.SMG_AMMO


    $('.ammo__assault').append("(" + "кол-во: " + assault_ammo + ")")
    $('.ammo__mg').append("(" + "кол-во: " + mg_ammo + ")")
    $('.ammo__pistols').append("(" + "кол-во: " + pistol_ammo + ")")
    $('.ammo__shotgun').append("(" + "кол-во: " + shotgun_ammo + ")")
    $('.ammo__SMG').append("(" + "кол-во: " + smg_ammo + ")")

})

setTimeout(function(){
  location.reload();
}, 30000);

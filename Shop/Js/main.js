  $.getJSON("../../Json/amount_weapons.json", function(data) {
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

      $('.deagle').append("(" + "кол-во: " + deagle + ")")
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

  $.getJSON("../../Json/amount_ammo.json", function(data) {
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

  $.getJSON("../../Json/FIB LIST/FIBS__LIST.json", function(data) {
      console.log(data);

      var f1 = data.f1
      var f2 = data.f2
      var f3 = data.f3
      var f4 = data.f4
      var f5 = data.f5
      var f6 = data.f6
      var f7 = data.f7
      var f8 = data.f8
      var f9 = data.f9
      var f10 = data.f10
      var f11 = data.f11
      var f12 = data.f12
      var f13 = data.f13
      var f14 = data.f14
      var f15 = data.f15
      var f16 = data.f16
      var f17 = data.f17
      var f18 = data.f18
      var f19 = data.f19
      var f20 = data.f20
      var f21 = data.f21
      var f22 = data.f22
      var f23 = data.f23
      var f24 = data.f24
      var f25 = data.f25
      var f26 = data.f26
      var f27 = data.f27
      var f28 = data.f28
      var f29 = data.f29
      var f30 = data.f30
      var f31 = data.f31
      var f32 = data.f32
      var f33 = data.f33
      var f34 = data.f34
      var f35 = data.f35

      $('.fibid').append("FIB CID: " + f1 + "<br></br>")
      $('.fibid').append("FIB CID: " + f2 + "<br></br>")
      $('.fibid').append("FIB CID: " + f3 + "<br></br>")
      $('.fibid').append("FIB CID: " + f4 + "<br></br>")
      $('.fibid').append("FIB CID: " + f5 + "<br></br>")
      $('.fibid').append("FIB CID: " + f6 + "<br></br>")
      $('.fibid').append("FIB CID: " + f7 + "<br></br>")
      $('.fibid').append("FIB CID: " + f8 + "<br></br>")
      $('.fibid').append("FIB CID: " + f9 + "<br></br>")
      $('.fibid').append("FIB CID: " + f10 + "<br></br>")
      $('.fibid').append("FIB CID: " + f11 + "<br></br>")
      $('.fibid').append("FIB CID: " + f12 + "<br></br>")
      $('.fibid').append("FIB CID: " + f13 + "<br></br>")
      $('.fibid').append("FIB CID: " + f14 + "<br></br>")
      $('.fibid').append("FIB CID: " + f15 + "<br></br>")
      $('.fibid').append("FIB CID: " + f16 + "<br></br>")
      $('.fibid').append("FIB CID: " + f17 + "<br></br>")
      $('.fibid').append("FIB CID: " + f18 + "<br></br>")
      $('.fibid').append("FIB CID: " + f19 + "<br></br>")
      $('.fibid').append("FIB CID: " + f20 + "<br></br>")
      $('.fibid').append("FIB CID: " + f21 + "<br></br>")
      $('.fibid').append("FIB CID: " + f22 + "<br></br>")
      $('.fibid').append("FIB CID: " + f23 + "<br></br>")
      $('.fibid').append("FIB CID: " + f24 + "<br></br>")
      $('.fibid').append("FIB CID: " + f25 + "<br></br>")
      $('.fibid').append("FIB CID: " + f26 + "<br></br>")
      $('.fibid').append("FIB CID: " + f27 + "<br></br>")
      $('.fibid').append("FIB CID: " + f28 + "<br></br>")
      $('.fibid').append("FIB CID: " + f29 + "<br></br>")
      $('.fibid').append("FIB CID: " + f30 + "<br></br>")
      $('.fibid').append("FIB CID: " + f31 + "<br></br>")
      $('.fibid').append("FIB CID: " + f32 + "<br></br>")
      $('.fibid').append("FIB CID: " + f33 + "<br></br>")
      $('.fibid').append("FIB CID: " + f34 + "<br></br>")

  })
  setTimeout(function() {
      location.reload();
  }, 30000);
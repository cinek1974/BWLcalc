
/* Gracz A */

var slider_AIloscJednostek = document.getElementById("slider_AIloscJednostek");
var wyswietl_AIloscJednostek = document.getElementById("wyswietl_AIloscJednostek");
wyswietl_AIloscJednostek.innerHTML = slider_AIloscJednostek.value;
slider_AIloscJednostek.oninput = function () {
    wyswietl_AIloscJednostek.innerHTML = this.value;
}

var slider_AIloscStraconychJednostek = document.getElementById("slider_AIloscStraconychJednostek");
var wyswietl_AIloscStraconychJednostek = document.getElementById("wyswietl_AIloscStraconychJednostek");
wyswietl_AIloscStraconychJednostek.innerHTML = slider_AIloscStraconychJednostek.value;
slider_AIloscStraconychJednostek.oninput = function () {
    wyswietl_AIloscStraconychJednostek.innerHTML = this.value;
}

var slider_AIloscOdpechnietychJednostek = document.getElementById("slider_AIloscOdpechnietychJednostek");
var wyswietl_AIloscOdpechnietychJednostek = document.getElementById("wyswietl_AIloscOdpechnietychJednostek");
wyswietl_AIloscOdpechnietychJednostek.innerHTML = slider_AIloscOdpechnietychJednostek.value;
slider_AIloscOdpechnietychJednostek.oninput = function () {
    wyswietl_AIloscOdpechnietychJednostek.innerHTML = this.value;
}

var slider_AIloscZdobytychPunktowStrategicznych = document.getElementById("slider_AIloscZdobytychPunktowStrategicznych");
var wyswietl_AIloscZdobytychPunktowStrategicznych = document.getElementById("wyswietl_AIloscZdobytychPunktowStrategicznych");
wyswietl_AIloscZdobytychPunktowStrategicznych.innerHTML = slider_AIloscZdobytychPunktowStrategicznych.value;
slider_AIloscZdobytychPunktowStrategicznych.oninput = function () {
    wyswietl_AIloscZdobytychPunktowStrategicznych.innerHTML = this.value;
}

var slider_ADodatkowePunkty = document.getElementById("slider_ADodatkowePunkty");
var wyswietl_ADodatkowePunkty = document.getElementById("wyswietl_ADodatkowePunkty");
wyswietl_ADodatkowePunkty.innerHTML = slider_ADodatkowePunkty.value;
slider_ADodatkowePunkty.oninput = function () {
    wyswietl_ADodatkowePunkty.innerHTML = this.value;
}

/* Gracz B */

var slider_BIloscJednostek = document.getElementById("slider_BIloscJednostek");
var wyswietl_BIloscJednostek = document.getElementById("wyswietl_BIloscJednostek");
wyswietl_BIloscJednostek.innerHTML = slider_BIloscJednostek.value;
slider_BIloscJednostek.oninput = function () {
    wyswietl_BIloscJednostek.innerHTML = this.value;
}

var slider_BIloscStraconychJednostek = document.getElementById("slider_BIloscStraconychJednostek");
var wyswietl_BIloscStraconychJednostek = document.getElementById("wyswietl_BIloscStraconychJednostek");
wyswietl_BIloscStraconychJednostek.innerHTML = slider_BIloscStraconychJednostek.value;
slider_BIloscStraconychJednostek.oninput = function () {
    wyswietl_BIloscStraconychJednostek.innerHTML = this.value;
}

var slider_BIloscOdpechnietychJednostek = document.getElementById("slider_BIloscOdpechnietychJednostek");
var wyswietl_BIloscOdpechnietychJednostek = document.getElementById("wyswietl_BIloscOdpechnietychJednostek");
wyswietl_BIloscOdpechnietychJednostek.innerHTML = slider_BIloscOdpechnietychJednostek.value;
slider_BIloscOdpechnietychJednostek.oninput = function () {
    wyswietl_BIloscOdpechnietychJednostek.innerHTML = this.value;
}

var slider_BIloscZdobytychPunktowStrategicznych = document.getElementById("slider_BIloscZdobytychPunktowStrategicznych");
var wyswietl_BIloscZdobytychPunktowStrategicznych = document.getElementById("wyswietl_BIloscZdobytychPunktowStrategicznych");
wyswietl_BIloscZdobytychPunktowStrategicznych.innerHTML = slider_BIloscZdobytychPunktowStrategicznych.value;
slider_BIloscZdobytychPunktowStrategicznych.oninput = function () {
    wyswietl_BIloscZdobytychPunktowStrategicznych.innerHTML = this.value;
}

var slider_BDodatkowePunkty = document.getElementById("slider_BDodatkowePunkty");
var wyswietl_BDodatkowePunkty = document.getElementById("wyswietl_BDodatkowePunkty");
wyswietl_BDodatkowePunkty.innerHTML = slider_BDodatkowePunkty.value;
slider_BDodatkowePunkty.oninput = function () {
    wyswietl_BDodatkowePunkty.innerHTML = this.value;
}



/* testowe wyświetlanie wartości */

function wyswietlWartosci() {
    /* Gracz A */
    var radio_ATaktykaArmii = document.getElementsByName("radio_ATaktykaArmii");
    var wybrana_ATaktykaArmii = Array.from(radio_ATaktykaArmii).find(
        (radio) => radio.checked
    );
    const checkbox_AZniszczoneBalony = document.querySelector('#checkbox_AZniszczoneBalony');
    let AIloscJednostek = wyswietl_AIloscJednostek.innerHTML;
    let AIloscStraconychJednostek = wyswietl_AIloscStraconychJednostek.innerHTML;
    let AIloscOdpechnietychJednostek = wyswietl_AIloscOdpechnietychJednostek.innerHTML;
    let AIloscZdobytychPunktowStrategicznych = wyswietl_AIloscZdobytychPunktowStrategicznych.innerHTML;
    let ATaktykaArmii = wybrana_ATaktykaArmii.value;
    let AWlasnaPodstawa = checkbox_AWlasnaPodstawa.checked;
    let AWrogaPodstawa = checkbox_AWrogaPodstawa.checked;
    let ARozbicieMorale = checkbox_ARozbicieMorale.checked;
    let AZniszczoneBalony = checkbox_AZniszczoneBalony.checked;
    let ADodatkowePunkty = wyswietl_ADodatkowePunkty.innerHTML;


    /* Gracz B */
    var radio_BTaktykaArmii = document.getElementsByName("radio_BTaktykaArmii");
    var wybrana_BTaktykaArmii = Array.from(radio_BTaktykaArmii).find(
        (radio) => radio.checked
    );
    const checkbox_BZniszczoneBalony = document.querySelector('#checkbox_BZniszczoneBalony');
    let BIloscJednostek = wyswietl_BIloscJednostek.innerHTML;
    let BIloscStraconychJednostek = wyswietl_BIloscStraconychJednostek.innerHTML;
    let BIloscOdpechnietychJednostek = wyswietl_BIloscOdpechnietychJednostek.innerHTML;
    let BIloscZdobytychPunktowStrategicznych = wyswietl_BIloscZdobytychPunktowStrategicznych.innerHTML;
    let BTaktykaArmii = wybrana_BTaktykaArmii.value;
    let BWlasnaPodstawa = checkbox_BWlasnaPodstawa.checked;
    let BWrogaPodstawa = checkbox_BWrogaPodstawa.checked;
    let BRozbicieMorale = checkbox_BRozbicieMorale.checked;
    let BZniszczoneBalony = checkbox_BZniszczoneBalony.checked;
    let BDodatkowePunkty = wyswietl_BDodatkowePunkty.innerHTML;


    /* WYLICZENIE WYNIKÓW*/

    var AWynik = 0;
    var BWynik = 0;
    var AWspolczynnikPunktacji = 0;
    var BWspolczynnikPunktacji = 0;

    /* Warunki zwycięstwa dla różnych taktyk Armii - Gracz A */

    if (AIloscZdobytychPunktowStrategicznych > BIloscZdobytychPunktowStrategicznych) {
        AWarunekO1 = true;
    } else {
        AWarunekO1 = false;
    }
    AWarunekO2 = AWlasnaPodstawa;
    if (AIloscStraconychJednostek < BIloscStraconychJednostek) {
        AWarunekO3 = true;
    } else {
        AWarunekO3 = false;
    }
    AWarunekN1 = AWarunekO1;
    AWarunekN2 = AWarunekO2;
    if (BIloscStraconychJednostek / BIloscJednostek > .25) {
        AWarunekN3 = true;
    } else {
        AWarunekN3 = false;
    }
    AWarunekN4 = AWrogaPodstawa;
    if (AIloscZdobytychPunktowStrategicznych == 5) {
        AWarunekA1 = true;
    } else {
        AWarunekA1 = false;
    }
    AWarunekA2 = ARozbicieMorale;
    AWarunekA3 = AWrogaPodstawa;
    if (BIloscStraconychJednostek / BIloscJednostek > .25) { // tutaj trzeba poprawić formułę !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        AWarunekA4 = true;
    } else {
        AWarunekA4 = false;
    }
    if (AIloscZdobytychPunktowStrategicznych > 2.5) {
        AWarunekA5 = true;
    } else {
        AWarunekA5 = false;
    }

    /* Warunki zwycięstwa dla różnych taktyk Armii - Gracz B */

    if (BIloscZdobytychPunktowStrategicznych > AIloscZdobytychPunktowStrategicznych) {
        BWarunekO1 = true;
    } else {
        BWarunekO1 = false;
    }
    BWarunekO2 = BWlasnaPodstawa;
    if (BIloscStraconychJednostek < AIloscStraconychJednostek) {
        BWarunekO3 = true;
    } else {
        BWarunekO3 = false;
    }
    BWarunekN1 = BWarunekO1;
    BWarunekN2 = BWarunekO2;
    if (AIloscStraconychJednostek / AIloscJednostek > .25) {
        BWarunekN3 = true;
    } else {
        BWarunekN3 = false;
    }
    BWarunekN4 = BWrogaPodstawa;
    if (BIloscZdobytychPunktowStrategicznych == 5) {
        BWarunekA1 = true;
    } else {
        BWarunekA1 = false;
    }
    BWarunekA2 = BRozbicieMorale;
    BWarunekA3 = BWrogaPodstawa;
    if (AIloscStraconychJednostek / AIloscJednostek > .25) { // tutaj trzeba poprawić formułę !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        BWarunekA4 = true;
    } else {
        BWarunekA4 = false;
    }
    if (BIloscZdobytychPunktowStrategicznych > 2.5) {
        BWarunekA5 = true;
    } else {
        BWarunekA5 = false;
    }

    var AOpisTaktyki = "błąd";
    var BOpisTaktyki = "błąd";


    /* Wyliczenie współcznników z realizacji celów - Gracz A */
    if (ATaktykaArmii == "Ostrozna") {
        if (AWarunekO1 && AWarunekO2 && AWarunekO3) {
            AWspolczynnikPunktacji = 1;
            AOpisTaktyki = "Taktyka Ostrożna, wszystkie cele zrealizowane ";
        } else if ((AWarunekO1 && AWarunekO2) || (AWarunekO1 && AWarunekO3) || (AWarunekO2 && AWarunekO3)) {
            AWspolczynnikPunktacji = 0.5;
            AOpisTaktyki = "Taktyka Ostrożna, zrealizowane dwa dowolne cele ";
        } else {
            AWspolczynnikPunktacji = 0;
            AOpisTaktyki = "Taktyka Ostrożna, brak punktów ";
        }        
    }
    else if (ATaktykaArmii == "Neutralna") {
        if (AWarunekN1 && AWarunekN2 && AWarunekN3 && AWarunekN4) {
            AWspolczynnikPunktacji = 2;
            AOpisTaktyki = "Taktyka Neutralna, wszystkie cele zrealizowane ";
        } else if (AWarunekN1 && AWarunekN2 && AWarunekN3) {
            AWspolczynnikPunktacji = 1;
            AOpisTaktyki = "Taktyka Neutralna, zrealizowane cele 1-3 ";
        } else if ((AWarunekN1 && AWarunekN2) || (AWarunekN1 && AWarunekN3) || (AWarunekN1 && AWarunekN4) || (AWarunekN2 && AWarunekN3) || (AWarunekN2 && AWarunekN4) || (AWarunekN3 && AWarunekN4)) {
            AWspolczynnikPunktacji = 0.5;
            AOpisTaktyki = "Taktyka Neutralna, zrealizowane dwa dowolne cele ";
        } else {
            AWspolczynnikPunktacji = 0;
            AOpisTaktyki = "Taktyka Neutralna, brak punktów ";
        }       
    }
    else if (ATaktykaArmii == "Agresywna") {
        if (AWarunekA1 && AWarunekA2 && AWarunekA3 && AWarunekA4) {
            AWspolczynnikPunktacji = 4;
            AOpisTaktyki = "Taktyka Agresywna, zrealizowane cele 1-4 ";
        } else if (AWarunekA3 && AWarunekA4 && AWarunekA5) {
            AWspolczynnikPunktacji = 3;
            AOpisTaktyki = "Taktyka Agresywna, zrealizowane cele 3-5 ";
        } else if ((AWarunekA1 && AWarunekA2 && AWarunekA3) || (AWarunekA1 && AWarunekA2 && AWarunekA4) || (AWarunekA1 && AWarunekA2 && AWarunekA5) || (AWarunekA2 && AWarunekA3 && AWarunekA4) || (AWarunekA2 && AWarunekA3 && AWarunekA5) || (AWarunekA3 && AWarunekA4 && AWarunekA5)) {
            AWspolczynnikPunktacji = 1;
            AOpisTaktyki = "Taktyka Agresywna, zrealizowane dowolne trzy cele ";
        } else {
            AWspolczynnikPunktacji = 0;
            AOpisTaktyki = "Taktyka Agresywna, brak punktów ";
        }        
    }

    /* Wyliczenie współcznników z realizacji celów - Gracz B */
    if (BTaktykaArmii == "Ostrozna") {
        if (BWarunekO1 && BWarunekO2 && BWarunekO3) {
            BWspolczynnikPunktacji = 1;
            BOpisTaktyki = "Taktyka Ostrożna, wszystkie cele zrealizowane ";
        } else if ((BWarunekO1 && BWarunekO2) || (BWarunekO1 && BWarunekO3) || (BWarunekO2 && BWarunekO3)) {
            BWspolczynnikPunktacji = 0.5;
            BOpisTaktyki = "Taktyka Ostrożna, zrealizowane dowolne dwa cele ";
        } else {
            BWspolczynnikPunktacji = 0;
            BOpisTaktyki = "Taktyka Ostrożna, brak punktów ";
        }
    }
    else if (BTaktykaArmii == "Neutralna") {
        if (BWarunekN1 && BWarunekN2 && BWarunekN3 && BWarunekN4) {
            BWspolczynnikPunktacji = 2;
            BOpisTaktyki = "Taktyka Neutralna, wszystkie cele zrealizowane ";
        } else if (BWarunekN1 && BWarunekN2 && BWarunekN3) {
            BWspolczynnikPunktacji = 1;
            BOpisTaktyki = "Taktyka Neutralna, zrealizowane cele 1-3 ";
        } else if ((BWarunekN1 && BWarunekN2) || (BWarunekN1 && BWarunekN3) || (BWarunekN1 && BWarunekN4) || (BWarunekN2 && BWarunekN3) || (BWarunekN2 && BWarunekN4) || (BWarunekN3 && BWarunekN4)) {
            BWspolczynnikPunktacji = 0.5;
            BOpisTaktyki = "Taktyka Neutralna, zrealizowane dowolne dwa cele ";
        } else {
            BWspolczynnikPunktacji = 0;
            BOpisTaktyki = "Taktyka Neutralna, brak punktów ";
        }
    }
    else if (BTaktykaArmii == "Agresywna") {
        if (BWarunekA1 && BWarunekA2 && BWarunekA3 && BWarunekA4) {
            BWspolczynnikPunktacji = 4;
            BOpisTaktyki = "Taktyka Agresywna, zrealizowane cele 1-4 ";
        } else if (BWarunekA3 && BWarunekA4 && BWarunekA5) {
            BWspolczynnikPunktacji = 3;
            BOpisTaktyki = "Taktyka Agresywna, zrealizowane cele 3-5 ";
        } else if ((BWarunekA1 && BWarunekA2 && BWarunekA3) || (BWarunekA1 && BWarunekA2 && BWarunekA4) || (BWarunekA1 && BWarunekA2 && BWarunekA5) || (BWarunekA2 && BWarunekA3 && BWarunekA4) || (BWarunekA2 && BWarunekA3 && BWarunekA5) || (BWarunekA3 && BWarunekA4 && BWarunekA5)) {
            BWspolczynnikPunktacji = 1;
            BOpisTaktyki = "Taktyka Agresywna, zrealizowane dowolne trzy cele ";
        } else {
            BWspolczynnikPunktacji = 0;
            BOpisTaktyki = "Taktyka Agresywna, brak punktów ";
        }
    }

    var AWynikCele = Math.ceil(AWspolczynnikPunktacji * (AIloscJednostek - AIloscStraconychJednostek - AIloscOdpechnietychJednostek));
    var AWynikZniszczone = BIloscStraconychJednostek * 1;
    var AWynikOdepchniete = Math.ceil(BIloscOdpechnietychJednostek * 0.5);
    if (AZniszczoneBalony == true) {
        var AWynikBalony = 1;
    } else {
        var AWynikBalony = 0;
    }
    if (AIloscStraconychJednostek < BIloscStraconychJednostek) {
        var AWynikNizszeStraty = 3;
    } else {
        var AWynikNizszeStraty = 0;
    }
    var AWynikInne = ADodatkowePunkty * 1;
    AWynik = AWynikCele + AWynikZniszczone + AWynikOdepchniete + AWynikBalony + AWynikNizszeStraty + AWynikInne;

    var BWynikCele = Math.ceil(BWspolczynnikPunktacji * (BIloscJednostek - BIloscStraconychJednostek - BIloscOdpechnietychJednostek));
    var BWynikZniszczone = AIloscStraconychJednostek * 1;
    var BWynikOdepchniete = Math.ceil(AIloscOdpechnietychJednostek * 0.5);
    if (BZniszczoneBalony == true) {
        var BWynikBalony = 1;
    } else {
        var BWynikBalony = 0;
    }
    if (BIloscStraconychJednostek < AIloscStraconychJednostek) {
        var BWynikNizszeStraty = 3;
    } else {
        var BWynikNizszeStraty = 0;
    }
    var BWynikInne = BDodatkowePunkty * 1;
   
    BWynik = BWynikCele + BWynikZniszczone + BWynikOdepchniete + BWynikBalony + BWynikNizszeStraty + BWynikInne;


    /* wyświetlanie wyników w tabeli */
    tabAOpisTaktyki.innerHTML = AOpisTaktyki;
    tabBOpisTaktyki.innerHTML = BOpisTaktyki;
    tabAWynikCele.innerHTML = AWynikCele;
    tabBWynikCele.innerHTML = BWynikCele;
    tabAWynikZniszczone.innerHTML = AWynikZniszczone;
    tabBWynikZniszczone.innerHTML = BWynikZniszczone;
    tabAWynikOdepchniete.innerHTML = AWynikOdepchniete;
    tabBWynikOdepchniete.innerHTML = BWynikOdepchniete;
    tabAWynikBalony.innerHTML = AWynikBalony;
    tabBWynikBalony.innerHTML = BWynikBalony;
    tabAWynikNizszeStraty.innerHTML = AWynikNizszeStraty;
    tabBWynikNizszeStraty.innerHTML = BWynikNizszeStraty;
    tabAWynikInne.innerHTML = AWynikInne;
    tabBWynikInne.innerHTML = BWynikInne;
    tabAWynik.innerHTML = AWynik;
    tabBWynik.innerHTML = BWynik;


    /* opis słowny wyniku starcia */
    var WynikBitwy = AWynik - BWynik;
    var WynikBitwyOpisowy = "hmmm";
     
    if (WynikBitwy > 30) {
        WynikBitwyOpisowy = "Armia gracza A zmasakrowała przeciwnika!";
    } else if (WynikBitwy > 20) {
        WynikBitwyOpisowy = "Armia gracza A zdecydowanie pokonała wroga!";
    } else if (WynikBitwy > 10) {
        WynikBitwyOpisowy = "Armia gracza A odniosła duże zwycięstwo.";
    } else if (WynikBitwy > 3) {
        WynikBitwyOpisowy = "Armia gracza A nieznacznie pokonała przeciwnika.";
    } else if (WynikBitwy > -4) {
        WynikBitwyOpisowy = "Bitwa pozostaje nierozstrzygnięta!";
    } else if (WynikBitwy > -11) {
        WynikBitwyOpisowy = "Armia gracza B nieznacznie pokonała przeciwnika.";
    } else if (WynikBitwy > -21) {
        WynikBitwyOpisowy = "Armia gracza B odniosła duże zwycięstwo.";
    } else if (WynikBitwy > -31) {
        WynikBitwyOpisowy = "Armia gracza B zdecydowanie pokonała wroga!";
    } else if (WynikBitwy < -30) {
        WynikBitwyOpisowy = "Armia gracza B zmasakrowała przeciwnika!";
    }
    
    wyswietlWynikBitwyOpisowy.innerHTML = WynikBitwyOpisowy;

}



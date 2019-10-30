'use strict'

var country;
var color;
var countryName;

var worldMap = {

    //getting the id,path in the svg
    idSelector(){
        var inSvg = svg.contentDocument;

        for(var i = 0; i < 338; i++){
            var pathSvg = inSvg.querySelector('path');

            //setting the event listener
            pathSvg[i].addEventListener('click', worldMap.switchRed);
            pathSvg[i].addEventListener('mouseenter', worldMap.switchBlue);
            pathSvg[i].addEventListener('mouseout', worldMap.switchBlack);
        }
    },

    //enter svg
    selectSvg(){
        var svg = document.getElementById('svg');
        svg.addEventListener('load',this.idSelector);
    },

    //switch to red method
    switchRed(elem) {
        country = elem.target.id;
        if (elem.target.style.fill == '#2550db'){
            color = '#ff0000';
            elem.target.style.fill = color;
        }
    },

    //switch to blue method
    switchBlue(elem) {
        country = elem.target.id;
        if (elem.target.style.fill == '#000000'){
            color = '#2550db';
            elem.target.style.fill = color;
        };
        countryName = document.getElementById('path');
        countryName.innerText = elem.target.id;
        countryName.style.color = 'black'
    },

    //switch to black method
    switchBlack(elem) {
        country = elem.target.id;
        if (elem.target.style.fill != '#000000'){
            color = '#000000';
            elem.target.style.fill = color;
        };

    }
}

worldMap.selectSvg();
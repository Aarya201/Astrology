var points = 0

var elem2 = document.getElementById('second');
var elem3 = document.getElementById('third');
var elem4 = document.getElementById('four');
var elem5 = document.getElementById('five');
var elem6 = document.getElementById('six');
var elem7 = document.getElementById('seven');
var elem8 = document.getElementById('eight');
var elem9 = document.getElementById('nine');
var elem10 = document.getElementById('ten');
function one1() {
    points = points + 2
    console.log(points)
    var elem = document.getElementById('first');
    elem.parentNode.removeChild(elem);
    document.getElementById('second').style.visibility = "visible"
    document.getElementById('question').innerHTML = "What are you best known for in your group of friends?"
}
function one2() {
    points = points + 1
    console.log(points)
    var elem = document.getElementById('first');
    elem.parentNode.removeChild(elem);
    document.getElementById('second').style.visibility = "visible"
    document.getElementById('question').innerHTML = "What are you best known for in your group of friends?"
}
function one3() {
    points = points + 4
    console.log(points)
    var elem = document.getElementById('first');
    elem.parentNode.removeChild(elem);
    document.getElementById('second').style.visibility = "visible"
    document.getElementById('question').innerHTML = "What are you best known for in your group of friends?"
}
function two1() {
    points = points + 1
    console.log(points)
    document.getElementById('third').style.visibility = "visible"
    var elem2 = document.getElementById('second');
    elem2.parentNode.removeChild(elem2);
    document.getElementById('question').innerHTML = "Do you like surprises?"
}
function two2() {
    points = points + 4
    console.log(points)
    var elem2 = document.getElementById('second');
    document.getElementById('third').style.visibility = "visible"
    elem2.parentNode.removeChild(elem2);
    document.getElementById('question').innerHTML = "Do you like surprises?"
}
function two3() {
    points = points + 2
    console.log(points)
    var elem2 = document.getElementById('second');
    elem2.parentNode.removeChild(elem2);
    document.getElementById('third').style.visibility = "visible"
    document.getElementById('question').innerHTML = "Do you like surprises?"
}
function two4() {
    points = points + 3
    console.log(points)
    var elem2 = document.getElementById('second');
    elem2.parentNode.removeChild(elem2);
    document.getElementById('third').style.visibility = "visible"
    document.getElementById('question').innerHTML = "Do you like surprises?"
}

function third1() {
    points = points + 4
    console.log(points)
    document.getElementById('four').style.visibility = "visible"
    var elem3 = document.getElementById('third');
    elem3.parentNode.removeChild(elem3);
    document.getElementById('question').innerHTML = "When are you the happiest?"
}
function third2() {
    points = points + 3
    console.log(points)
    var elem3 = document.getElementById('third');
    document.getElementById('four').style.visibility = "visible"
    elem3.parentNode.removeChild(elem3);
    document.getElementById('question').innerHTML = "When are you the happiest?"
}
function third3() {
    points = points + 1
    console.log(points)
    document.getElementById('four').style.visibility = "visible"
    var elem3 = document.getElementById('third');
    elem3.parentNode.removeChild(elem3);
    document.getElementById('question').innerHTML = "When are you the happiest?"
}
function third4() {
    points = points + 2
    console.log(points)
    document.getElementById('four').style.visibility = "visible"
    var elem3 = document.getElementById('third');
    elem3.parentNode.removeChild(elem3);
    document.getElementById('question').innerHTML = "When are you the happiest?"
}
function four1() {
    points = points + 2
    console.log(points)
    document.getElementById('five').style.visibility = "visible"
    var elem4 = document.getElementById('four');
    elem4.parentNode.removeChild(elem4);
    document.getElementById('question').innerHTML = "Which superpower do you want?"
}
function four2() {
    points = points + 1
    console.log(points)
    document.getElementById('five').style.visibility = "visible"
    var elem4 = document.getElementById('four');
    elem4.parentNode.removeChild(elem4);
    document.getElementById('question').innerHTML = "Which superpower do you want?"
}
function four3() {
    points = points + 4
    console.log(points)
    var elem4 = document.getElementById('four');
    elem4.parentNode.removeChild(elem4);
    document.getElementById('five').style.visibility = "visible"
    document.getElementById('question').innerHTML = "Which superpower do you want?"
}
function four4() {
    points = points + 3
    console.log(points)
    var elem4 = document.getElementById('four');
    document.getElementById('five').style.visibility = "visible"
    elem4.parentNode.removeChild(elem4);
    document.getElementById('question').innerHTML = "Which superpower do you want?"
}
function five1() {
    points = points + 1
    console.log(points)
    document.getElementById('six').style.visibility = "visible"
    var elem5 = document.getElementById('five');
    elem5.parentNode.removeChild(elem5);
    document.getElementById('question').innerHTML = "Which color combo do you like?"
}
function five2() {
    points = points + 3
    console.log(points)
    document.getElementById('six').style.visibility = "visible"
    var elem5 = document.getElementById('five');
    elem5.parentNode.removeChild(elem5);
    document.getElementById('question').innerHTML = "Which color combo do you like?"
}
function five3() {
    points = points + 2
    console.log(points)
    var elem5 = document.getElementById('five');
    elem5.parentNode.removeChild(elem5);
    document.getElementById('six').style.visibility = "visible"
    document.getElementById('question').innerHTML = "Which color combo do you like?"
}
function five4() {
    points = points + 4
    console.log(points)
    var elem5 = document.getElementById('five');
    document.getElementById('six').style.visibility = "visible"
    elem5.parentNode.removeChild(elem5);
    document.getElementById('question').innerHTML = "Which color combo do you like?"
}
function six1() {
    points = points + 4
    console.log(points)
    document.getElementById('seven').style.visibility = "visible"
    var elem6 = document.getElementById('six');
    elem6.parentNode.removeChild(elem6);
    document.getElementById('question').innerHTML = "What is your biggest flaw??"
}
function six2() {
    points = points + 1
    console.log(points)
    document.getElementById('seven').style.visibility = "visible"
    var elem6 = document.getElementById('six');
    elem6.parentNode.removeChild(elem6);
    document.getElementById('question').innerHTML = "What is your biggest flaw?"
}
function six3() {
    points = points + 2
    console.log(points)
    var elem6 = document.getElementById('six');
    elem6.parentNode.removeChild(elem6);
    document.getElementById('seven').style.visibility = "visible"
    document.getElementById('question').innerHTML = "What is your biggest flaw?"
}
function six4() {
    points = points + 3
    console.log(points)
    var elem6 = document.getElementById('six');
    document.getElementById('seven').style.visibility = "visible"
    elem6.parentNode.removeChild(elem6);
    document.getElementById('question').innerHTML = "What is your biggest flaw?" 
}
function seven1() {
    points = points + 4
    console.log(points)
    document.getElementById('eight').style.visibility = "visible"
    var elem7 = document.getElementById('seven');
    elem7.parentNode.removeChild(elem7);
    document.getElementById('question').innerHTML = "Which was your favourite subject?"
}
function seven2() {
    points = points + 3
    console.log(points)                 
    document.getElementById('eight').style.visibility = "visible"
    var elem7 = document.getElementById('seven');
    elem7.parentNode.removeChild(elem7);
    document.getElementById('question').innerHTML = "Which was your favourite subject?"
}
function seven3() {
    points = points + 1
    console.log(points)
    var elem7 = document.getElementById('seven');
    elem7.parentNode.removeChild(elem7);
    document.getElementById('eight').style.visibility = "visible"
    document.getElementById('question').innerHTML = "Which was your favourite subject?"
}
function seven4() {
    points = points + 2
    console.log(points)
    var elem7 = document.getElementById('seven');
    document.getElementById('eight').style.visibility = "visible"
    elem7.parentNode.removeChild(elem7);
    document.getElementById('question').innerHTML = "Which was your favourite subject?"
}
function eight1() {
    points = points + 3
    console.log(points)
    document.getElementById('nine').style.visibility = "visible"
    var elem8 = document.getElementById('eight');
    elem8.parentNode.removeChild(elem8);
    document.getElementById('question').innerHTML = "Which of these deserts you like?"
}
function eight2() {
    points = points + 1
    console.log(points)                 
    document.getElementById('nine').style.visibility = "visible"
    var elem8 = document.getElementById('eight');
    elem8.parentNode.removeChild(elem8);
    document.getElementById('question').innerHTML = "Which of these deserts you like?"
}
function eight3() {
    points = points + 4
    console.log(points)
    var elem8 = document.getElementById('eight');
    elem8.parentNode.removeChild(elem8);
    document.getElementById('nine').style.visibility = "visible"
    document.getElementById('question').innerHTML = "Which of these deserts you like?"
}
function eight4() {
    points = points + 2
    console.log(points)
    var elem8 = document.getElementById('eight');
    document.getElementById('nine').style.visibility = "visible"
    elem8.parentNode.removeChild(elem8);
    document.getElementById('question').innerHTML = "Which of these deserts you like?"
}
function nine1() {
    points = points + 2
    console.log(points)
    document.getElementById('ten').style.visibility = "visible"
    var elem9 = document.getElementById('nine');
    elem9.parentNode.removeChild(elem9);
    document.getElementById('question').innerHTML = "What is your attitude most of the time?"
}
function nine2() {
    points = points + 4
    console.log(points)                 
    document.getElementById('ten').style.visibility = "visible"
    var elem9 = document.getElementById('nine');
    elem9.parentNode.removeChild(elem9);
    document.getElementById('question').innerHTML = "What is your attitude most of the time?"
}
function nine3() {
    points = points + 1
    console.log(points)
    var elem9 = document.getElementById('nine');
    elem9.parentNode.removeChild(elem9);
    document.getElementById('ten').style.visibility = "visible"
    document.getElementById('question').innerHTML = "What is your attitude most of the time?"
}
function nine4() {
    points = points + 3
    console.log(points)
    var elem9 = document.getElementById('nine');
    document.getElementById('ten').style.visibility = "visible"
    elem9.parentNode.removeChild(elem9);
    document.getElementById('question').innerHTML = "What is your attitude most of the time?"
}
function ten1() {
    points = points + 3
    console.log(points)
    var elem10 = document.getElementById('ten');
    elem10.parentNode.removeChild(elem10);
    if(points > 9 && points < 17) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Earth.jpg"
        document.getElementById('question').innerHTML = "You're either a Taurus, Virgo, or Capricorn! Earth signs keep it real.Slow and steady, these 'builders' are loyal, stable,and stick by their people through hard times.You are very grounded and down-to-earth.You value loyalty and honesty above all else and are,therefore, known to be an excellent friend and romantic partner."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 25 && points < 35) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Air.jpg"
        document.getElementById('question').innerHTML = "You're either a Gemini, Libra, or Aquarius!Air signs are all about action, ideas, and motion -they are the 'winds of change.' Air signs bring everyone a breath of fresh air when things start to get stale. You can't stay in one place physically, emotionally,or mentally.You welcome change and oftentimes thrive off of it."
    } 
    if(points > 34 && points < 41) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Fire.jpg"
        document.getElementById('question').innerHTML = "You are either an Aries, Leo, or Sagittarius!Like fire itself, fire signs tend to be passionate,dynamic, and temperamental. As a result, fire signs need to be nurtured and managed carefully.It is clear that you're an extremely intense person who can also be a bit temperamental at times. Therefore, it is important that you try to manage your emotions to channel your energy into productive outlets."
    } 
}
function ten2() {
    points = points + 2
    console.log(points)
    var elem10 = document.getElementById('ten');
    elem10.parentNode.removeChild(elem10);
    if(points > 9 && points < 17) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Earth.jpg"
        document.getElementById('question').innerHTML = "You're either a Taurus, Virgo, or Capricorn! Earth signs keep it real.Slow and steady, these 'builders' are loyal, stable,and stick by their people through hard times.You are very grounded and down-to-earth.You value loyalty and honesty above all else and are,therefore, known to be an excellent friend and romantic partner."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 25 && points < 35) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Air.jpg"
        document.getElementById('question').innerHTML = "You're either a Gemini, Libra, or Aquarius!Air signs are all about action, ideas, and motion -they are the 'winds of change.' Air signs bring everyone a breath of fresh air when things start to get stale. You can't stay in one place physically, emotionally,or mentally.You welcome change and oftentimes thrive off of it."
    } 
    if(points > 34 && points < 41) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Fire.jpg"
        document.getElementById('question').innerHTML = "You are either an Aries, Leo, or Sagittarius!Like fire itself, fire signs tend to be passionate,dynamic, and temperamental. As a result, fire signs need to be nurtured and managed carefully.It is clear that you're an extremely intense person who can also be a bit temperamental at times. Therefore, it is important that you try to manage your emotions to channel your energy into productive outlets."
    } 
}
function ten3() {
    points = points + 4
    console.log(points)
    var elem10 = document.getElementById('ten');
    elem10.parentNode.removeChild(elem10);
    if(points > 9 && points < 17) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Earth.jpg"
        document.getElementById('question').innerHTML = "You're either a Taurus, Virgo, or Capricorn! Earth signs keep it real.Slow and steady, these 'builders' are loyal, stable,and stick by their people through hard times.You are very grounded and down-to-earth.You value loyalty and honesty above all else and are,therefore, known to be an excellent friend and romantic partner."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 25 && points < 35) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Air.jpg"
        document.getElementById('question').innerHTML = "You're either a Gemini, Libra, or Aquarius!Air signs are all about action, ideas, and motion -they are the 'winds of change.' Air signs bring everyone a breath of fresh air when things start to get stale. You can't stay in one place physically, emotionally,or mentally.You welcome change and oftentimes thrive off of it."
    } 
    if(points > 34 && points < 41) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Fire.jpg"
        document.getElementById('question').innerHTML = "You are either an Aries, Leo, or Sagittarius!Like fire itself, fire signs tend to be passionate,dynamic, and temperamental. As a result, fire signs need to be nurtured and managed carefully.It is clear that you're an extremely intense person who can also be a bit temperamental at times. Therefore, it is important that you try to manage your emotions to channel your energy into productive outlets."
    } 
}
function ten4() {
    points = points + 1
    console.log(points)
    var elem10 = document.getElementById('ten');
    elem10.parentNode.removeChild(elem10);
    if(points > 9 && points < 17) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Earth.jpg"
        document.getElementById('question').innerHTML = "You're either a Taurus, Virgo, or Capricorn! Earth signs keep it real.Slow and steady, these 'builders' are loyal, stable,and stick by their people through hard times.You are very grounded and down-to-earth.You value loyalty and honesty above all else and are,therefore, known to be an excellent friend and romantic partner."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 16 && points < 26) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "water.jpg"
        document.getElementById('question').innerHTML = "You're either a Cancer, Scorpio, or Pisces!Intuitive, emotional and ultra-sensitive, water signs can be as mysterious as the ocean itself. You feel things deeply and you're a very intuitive person.You also value feeling secure in all aspects of your life over most thing - after all, water needs a container,or it dries up and disappears."
    } 
    if(points > 25 && points < 35) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Air.jpg"
        document.getElementById('question').innerHTML = "You're either a Gemini, Libra, or Aquarius!Air signs are all about action, ideas, and motion -they are the 'winds of change.' Air signs bring everyone a breath of fresh air when things start to get stale. You can't stay in one place physically, emotionally,or mentally.You welcome change and oftentimes thrive off of it."
    } 
    if(points > 34 && points < 41) {
        document.getElementById('im').style.visibility = "visible"
        document.getElementById('im').style.width = "60%"
        document.getElementById('im').style.height = "30%"
        document.getElementById('im').style.marginLeft = "20%"
        document.getElementById('im').style.marginRight = "20%"
        document.getElementById('im').src = "Fire.jpg"
        document.getElementById('question').innerHTML = "You are either an Aries, Leo, or Sagittarius!Like fire itself, fire signs tend to be passionate,dynamic, and temperamental. As a result, fire signs need to be nurtured and managed carefully.It is clear that you're an extremely intense person who can also be a bit temperamental at times. Therefore, it is important that you try to manage your emotions to channel your energy into productive outlets."
    } 
}

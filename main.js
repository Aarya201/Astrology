var date = ""
var month = ""
function submit() {
    var full = document.getElementById('date').value;   
    var date = new Date(full)
    var month = date.getMonth();
    var day = date.getDate();
    console.log(date)
    console.log(month)
    console.log(day)
    if(day > "21" && month == "11") {
        document.getElementById('description').innerHTML = "As the tenth astrological sign in the Zodiac, Capricorn is situated to the east of Sagittarius and to the west of Aquarius. Capricorn is an astrological sign indicating the beginning of winter. Capricorn people are known for their adamancy, rationality, responsibility and tolerance. In Latin, the constellation Capricornus means the horned goat."        
        document.getElementById("imag").src = "Capricorn.png"
        document.getElementById('main').innerHTML = "Capricorn"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Capricorn")   
    }
    else if(month == "0" && day < "20" ) {
        document.getElementById('description').innerHTML = "As the tenth astrological sign in the Zodiac, Capricorn is situated to the east of Sagittarius and to the west of Aquarius. Capricorn is an astrological sign indicating the beginning of winter. Capricorn people are known for their adamancy, rationality, responsibility and tolerance. In Latin, the constellation Capricornus means the horned goat." 
        document.getElementById("imag").src = "Capricorn.png"
        document.getElementById('main').innerHTML = "Capricorn"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Capricorn")  
    }
    else if(month == "0" && day > "19") {
        document.getElementById('description').innerHTML = "Aquarius is the 11th astrological sign in the Zodiac and it is situated to the east of Capricornus and west to the Pisces. People born on between January 20 and February 18 are under the Aquarius sign. Aquarians are basically forward-thinking, rational and self-respecting. Similar with the Sagittarians, they are philanthropic and unrestrained but they are different with the Sagittarians. Ruled by the Uranus, Aquarians often give people the intelligent, humorous and unique feeling but they are seemingly a contradictory combination: sometimes low-key, sometimes high-key; sometimes tender, sometimes indifferent; sometimes realistic, sometimes free from vulgarity. In short, people under Aquarius sign are complex and changeful." 
        document.getElementById("imag").src = "Aquarius.png"
        document.getElementById('main').innerHTML = "Aquarius"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Aquarius")
    }
    else if(month == "1" && day < "19") {
        document.getElementById('description').innerHTML = "Aquarius is the 11th astrological sign in the Zodiac and it is situated to the east of Capricornus and west to the Pisces. People born on between January 20 and February 18 are under the Aquarius sign. Aquarians are basically forward-thinking, rational and self-respecting. Similar with the Sagittarians, they are philanthropic and unrestrained but they are different with the Sagittarians. Ruled by the Uranus, Aquarians often give people the intelligent, humorous and unique feeling but they are seemingly a contradictory combination: sometimes low-key, sometimes high-key; sometimes tender, sometimes indifferent; sometimes realistic, sometimes free from vulgarity. In short, people under Aquarius sign are complex and changeful." 
        document.getElementById("imag").src = "Aquarius.png"
        document.getElementById('main').innerHTML = "Aquarius"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Aquarius")
    }
    else if(month == "1" && day > "18") {
        document.getElementById('description').innerHTML = "As the last astrological sign in the Zodiac, Pisces has the advantages and disadvantages of all astrological signs. It is situated to the east of Aquarius and west to the Aries. Taking two fishes captured by a string as the astrological symbol, Pisceans are a combination of multiple contradictions. Since people under water signs are sentimental, Pisces people are even more complicated." 
        document.getElementById("imag").src = "Pisces.png"
        document.getElementById('main').innerHTML = "Pisces"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Pisces")
    }
    else if(month == "2" && day < "21") {
        document.getElementById('description').innerHTML = "As the last astrological sign in the Zodiac, Pisces has the advantages and disadvantages of all astrological signs. It is situated to the east of Aquarius and west to the Aries. Taking two fishes captured by a string as the astrological symbol, Pisceans are a combination of multiple contradictions. Since people under water signs are sentimental, Pisces people are even more complicated." 
        document.getElementById("imag").src = "Pisces.png"
        document.getElementById('zod').style.visibility = "visible";
        document.getElementById('main').innerHTML = "Pisces"
        console.log("Pisces")
    }
    else if(month == "2" && day > "20") {
        document.getElementById('description').innerHTML = "As the first astrological sign in the Zodiac, Aries is situated to the east of Pisces and to the west of Taurus. People under the Aries sign are like a child who is frank, enthusiastic, impulsive, self-centered and childish. Since Aries is the first astrological sign in spring during which everything comes to life, the Arians are always vigorous and passionate."
        document.getElementById("imag").src = "Aries.png"
        document.getElementById('main').innerHTML = "Aries"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Aries")
    }
    else if(month == "3" && day < "20") {
        document.getElementById('description').innerHTML = "As the first astrological sign in the Zodiac, Aries is situated to the east of Pisces and to the west of Taurus. People under the Aries sign are like a child who is frank, enthusiastic, impulsive, self-centered and childish. Since Aries is the first astrological sign in spring during which everything comes to life, the Arians are always vigorous and passionate."
        document.getElementById("imag").src = "Aries.png"
        document.getElementById('main').innerHTML = "Aries"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Aries")
    }
    else if(month == "3" && day > "19") {
        document.getElementById('description').innerHTML = "Taurus is the second astrological sign in the Zodiac indicated by a Bull and it is situated to the east of Aries and to the west of Gemini. People under the Taurus sign are very conservative and they like stable rather than changeful life. Taureans usually require a relatively long adaptation period for work, life and environment. Generally, Taurus is the symbol of wealth and Taureans often have insightful views on investing and financing."
        document.getElementById("imag").src = "Taurus.png"
        document.getElementById('zod').style.visibility = "visible";
        document.getElementById('main').innerHTML = "Taurus"
        console.log("Taurus")
    }       
    else if(month == "4" && day < "21") {
        document.getElementById('description').innerHTML = "Taurus is the second astrological sign in the Zodiac indicated by a Bull and it is situated to the east of Aries and to the west of Gemini. People under the Taurus sign are very conservative and they like stable rather than changeful life. Taureans usually require a relatively long adaptation period for work, life and environment. Generally, Taurus is the symbol of wealth and Taureans often have insightful views on investing and financing."
        document.getElementById("imag").src = "Taurus.png"
        document.getElementById('main').innerHTML = "Taurus"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Taurus")
    }
    else if(month == "4" && day > "20") {
        document.getElementById('description').innerHTML = "Gemini is the third astrological sign in the Zodiac and it represents change and communication; people born between May 21 and June 21 are under this sign. People of this sign tend to be fond of new things and they are smart but always distracted. Chatting with them, you will feel excited because you are curious about the novel and strange ideas in their mind. Maybe their pursuit and curiosity about new things will make others feel they are changeful. But it's not true as they just like the new things." 
        document.getElementById("imag").src = "Gemini.png"
        document.getElementById('main').innerHTML = "Gemini"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Gemini")
    }
    else if(month == "5" && day < "21") {
        document.getElementById('description').innerHTML = "Gemini is the third astrological sign in the Zodiac and it represents change and communication; people born between May 21 and June 21 are under this sign. People of this sign tend to be fond of new things and they are smart but always distracted. Chatting with them, you will feel excited because you are curious about the novel and strange ideas in their mind. Maybe their pursuit and curiosity about new things will make others feel they are changeful. But it's not true as they just like the new things." 
        document.getElementById("imag").src = "Gemini.png"
        document.getElementById('zod').style.visibility = "visible";
        document.getElementById('main').innerHTML = "Gemini"
        console.log("Gemini")
    }
    else if(month == "5" && day > "20") {
        document.getElementById('description').innerHTML = "Cancer is the first constellation in summer. Cancer is situated to the east of Gemini and to the west of Leo and it is symbolized through the Crab. Cancerians are sincere, faithful, kind-hearted, righteous and indomitable people. Also, they are emotional, sensitive, and suspicious and often feel insecure; they are hard to please and prone to hysteria. Male Cancerians are quite good men and attached to family; female Cancerians are very caring and maternal." 
        document.getElementById("imag").src = "Cancer.png"
        document.getElementById('main').innerHTML = "Cancer"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Cancer")
    }
    else if(month == "6" && day < "23") {
        document.getElementById('description').innerHTML = "Cancer is the first constellation in summer. Cancer is situated to the east of Gemini and to the west of Leo and it is symbolized through the Crab. Cancerians are sincere, faithful, kind-hearted, righteous and indomitable people. Also, they are emotional, sensitive, and suspicious and often feel insecure; they are hard to please and prone to hysteria. Male Cancerians are quite good men and attached to family; female Cancerians are very caring and maternal." 
        document.getElementById("imag").src = "Cancer.png"
        document.getElementById('zod').style.visibility = "visible";
        document.getElementById('main').innerHTML = "Cancer"
        console.log("Cancer")
    }
    else if(month == "6" && day > "22") {
        document.getElementById('description').innerHTML = "Leo is the fifth zodiac sign. This astrological sign is situated to the east of Cancer and to the west of Virgo. Leo people are very ambitious and they always want to stand out with their efforts, yearning for the superiority complex and being admired; they are a little overly confident and pretentious. The Leo men have strong male chauvinism and they are face-saving; the Leo women are enthusiastic and loyal to their friends." 
        document.getElementById("imag").src = "Leo.png"
        document.getElementById('main').innerHTML = "Leo"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Leo")
    }
    else if(month == "7" && day < "23") {
        document.getElementById('description').innerHTML = "Leo is the fifth zodiac sign associated with those who are born between July 23 and August 22. This astrological sign is situated to the east of Cancer and to the west of Virgo. Leo people are very ambitious and they always want to stand out with their efforts, yearning for the superiority complex and being admired; they are a little overly confident and pretentious. The Leo men have strong male chauvinism and they are face-saving; the Leo women are enthusiastic and loyal to their friends." 
        document.getElementById("imag").src = "Leo.png"
        document.getElementById('main').innerHTML = "Leo"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Leo")
    }
    else if(month == "7" && day > "22") {
        document.getElementById('description').innerHTML = "Situated to the east of Leo and to the west of Libra, Virgo is the sixth zodiac sign associated with the people who are born between August 23 and September 22. It is indicated by a Virgin. Virgo people adhere to their pursuit of perfectionism and they will never make do with life and perfection; they are motivated and aggressive and they need to be encouraged. Male Virgoans have strong perseverance and they are persistent; female Virgoans have strong thirst for knowledge." 
        document.getElementById("imag").src = "Virgo.png"
        document.getElementById('zod').style.visibility = "visible";
        document.getElementById('main').innerHTML = "Virgo"
        console.log("Virgo")
    }
    else if(month == "8" && day < "23") {
        document.getElementById('description').innerHTML = "Situated to the east of Leo and to the west of Libra, Virgo is the sixth zodiac sign associated with the people who are born between August 23 and September 22. It is indicated by a Virgin. Virgo people adhere to their pursuit of perfectionism and they will never make do with life and perfection; they are motivated and aggressive and they need to be encouraged. Male Virgoans have strong perseverance and they are persistent; female Virgoans have strong thirst for knowledge." 
        document.getElementById("imag").src = "Virgo.png"
        document.getElementById('zod').style.visibility = "visible";
        document.getElementById('main').innerHTML = "Virgo"
        console.log("Virgo")
    }
    else if(month == "8" && day > "22") {
        document.getElementById('description').innerHTML = "People under the Libra sign often pursue equality and harmony; they are elegant, easy-going and gentle and have excellent social skills. Librans are very sincere, so they often have many true friends. The biggest weakness of Librans is that they are always indecisive. Male Librans tend to care about themselves but ignore others while the female Librans would like to have someone accompanying them." 
        document.getElementById("imag").src = "Libra.png"
        document.getElementById('main').innerHTML = "Libra"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Libra")
    }
    else if(month == "9" && day < "23") {
        document.getElementById('description').innerHTML = "People under the Libra sign often pursue equality and harmony; they are elegant, easy-going and gentle and have excellent social skills. Librans are very sincere, so they often have many true friends. The biggest weakness of Librans is that they are always indecisive. Male Librans tend to care about themselves but ignore others while the female Librans would like to have someone accompanying them." 
        document.getElementById("imag").src = "Libra.png"
        document.getElementById('main').innerHTML = "Libra"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Libra")
    }
    else if(month == "9" && day > "22") {
        document.getElementById('description').innerHTML = "People under the Scorpio sign are vigorous and possessive; they have clear goals in life and will not stop until they reach their goals. Scorpions pay great attention to personal privacy and they are so revenge-minded that they will revenge on those how have hurt them desperately. Male Scorpions have strong egoism color while female Scorpions have strong self-protection awareness and they are unapproachable." 
        document.getElementById("imag").src = "Scorpio.png"
        document.getElementById('main').innerHTML = "Scorpio"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Scorpio")
    }
    else if(month == "10" && day< "22") {
        document.getElementById('description').innerHTML = "People under the Scorpio sign are vigorous and possessive; they have clear goals in life and will not stop until they reach their goals. Scorpions pay great attention to personal privacy and they are so revenge-minded that they will revenge on those how have hurt them desperately. Male Scorpions have strong egoism color while female Scorpions have strong self-protection awareness and they are unapproachable." 
        document.getElementById("imag").src = "Scorpio.png"
        document.getElementById('main').innerHTML = "Scorpio"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Scorpio")
    }
    else if(month == "10" && day > "21") {
        document.getElementById('description').innerHTML = "Sagittarius is the ninth sign of the Zodiac with the symbol of an arrow. People born under the Sagittarius sign love freedom and they are brave, decisive and independent, marching forward courageously no matter how difficult it is as they have unbeatable perseverance and confidence. Male Sagittarians love freedom and hate any restriction while female Sagittarians are simple and direct and never play tricks but they are self-willed." 
        document.getElementById("imag").src = "Sagittarius.png"
        document.getElementById('main').innerHTML = "Sagittarius"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Sagittarius")
    }
    else if(month == "11" && day < "22") {
        document.getElementById('description').innerHTML = "Sagittarius is the ninth sign of the Zodiac with the symbol of an arrow. People born under the Sagittarius sign love freedom and they are brave, decisive and independent, marching forward courageously no matter how difficult it is as they have unbeatable perseverance and confidence. Male Sagittarians love freedom and hate any restriction while female Sagittarians are simple and direct and never play tricks but they are self-willed." 
        document.getElementById("imag").src = "Sagittarius.png"
        document.getElementById('main').innerHTML = "Sagittarius"
        document.getElementById('zod').style.visibility = "visible";
        console.log("Sagittarius")
    }
}
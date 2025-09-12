/*
let ålder = +await read("Ålder:")
if (ålder <= 17){
    write("omyndig")
}
if (ålder >= 18){
    write("myndig")
}
    if(ålder >0){
    write("Kan inte vara yngre än 0 år")
}
*/

/*
let number = +await read ("hur lång är du?")
if (number <= 199)
    write("Hej du korte!")
if (number >=200)
    write("Hej du långe!")
*/

/*
let number = +await read ("Ett tal:")
if (number <0)
    write("Talet är negativt.")
if (number >0)
    write("Talet är positivt.")
*/

/*
let x = +await read("x=")
let y = +await read("y=")
if (x>y)
    write ("x > y")
if (y>x)
    write ("y > x")
if (y=x)
    write ("x = y")
*/
/*
let number = +await read("Tal 1:")
let number2 = +await read("Tal 2:")
let operator = await read("operator(+, -, *, /): ")

if (operator =="+" )
    write (number + number2)
else if ( operator == "-") {
    write(number-number2)
}
else if(operator=="*")
    write(number*number2)
else if (operator=="/")
    write(number/number2)
 */
/*
let valör = await read ("Valör (1-13):")
if (valör =="1")
    write( "Ess")
if (valör == "11")
    write("Knäckt")
if (valör == "12")
    write("Dam")
if (valör == "13")
    write("Kung")
if (valör>1&&valör<11)
    write ("En " + Math.round(valör) + ":a")
*/
/*
let månad = +await read("Månadsnummer:")
if (månad==1)
   write ("Januari, Vinter")
if (månad==2)
    write("Februari, Vinter")
if (månad==3)
    write("Mars, Vår")
if (månad==4)
    write("April, Vår")
if (månad==5)
    write("Maj, Vår")
if (månad==6)
    write("Juni, Sommar")
if (månad==7)
    write("Juli, Sommar")
if (månad==8)
    write("Augusti, Sommar")
if (månad==9)
    write("September, Höst")
if (månad==10)
    write("Oktober, Höst")
if (månad==11)
    write("November, Höst")
if (månad==12)
    write("December, Vinter")
if (månad<1||månad>12)
    write("Månad finns inte!")
*/
/*
let Tal1 = +await read("Tal 1:")
let Tal2 = +await read("Tal 2:")
let operator = +await read("Produkt:")
if (operator==Tal1*Tal2 )
    write ("korrekt")
else{
    write("inkorrekt, Rätt svar är: " +Tal1*Tal2)
}
*/  

/*
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
write ("summa: " + (tal1+tal2))
write ("medelvärde: " + (tal1+tal2)/2)
write("Minsta: " + Math.min(tal1, tal2))
write("Största: " + Math.max(tal1, tal2))
*/

/*
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 3: ")
write ("summa: " + (tal1+tal2+tal3))
write ("medelvärde: " + (tal1+tal2+tal3)/3)
write ("Minsta: " + Math.min(tal1, tal2, tal3))
write ("Största: " + Math.max(tal1, tal2, tal3))
*/

/*
let tecken = await read("Tecken: ")
if(tecken != tecken.toLowerCase())
    write("Stor bokstav")
if("abcdefghijklmnopqrstuvwxyzåäö".includes(tecken))
    write("liten bokstav")
if("1234567890½§?=)(/&%¤#*_:;;`?+´¨'.-,")
    write("Annat tecken")
*/

/*
let tal = +await read("Ett tal mellan -999 och 999: ")
if (tal >=-99 && tal <=99)
    write("Två siffror")
if(tal>0)
    write("Positivt")
if (tal<0)
    write("Negativt")
if (tal<=-100 && tal>-999 || tal >=100 && tal<999)
    write("Tre siffror")
if (tal>999)
    write("Tal för stort")
if (tal<-999)
    write("Tal för litet")
*/

/*
let tal = +await read("Sida 1: ")
let tal2 = +await read("Sida 2: ")
let tal3 = +await read("Sida 3: ")
if( tal > 0 &&
    tal2 > 0 &&
    tal3 > 0 &&
    tal < tal2 + tal3 &&
    tal2 < tal + tal3 &&
    tal3 < tal + tal2 ){
write("Triangel: Ja")
    }
else{
    write("Triangel: Nej") 
}
*/
export {}
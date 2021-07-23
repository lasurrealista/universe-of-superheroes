## **Szuperhősök Univerzuma - Universe of Superheroes**
---
---

## Az alkalmazás leírása

**Célja:**

Az alkalmazás feladata, hogy a Marvel és a DC szuperhőseinek, illetve a Marvel Univerzum karaktereinek, képregényeinek, történeteinek és készítőinek, valamint a legfontosabb szuperhősös eseményeinek adatait nyilvántartsa és kezelje.

**Technikai követelmények, előírások:**
- Az alkalmazás Angular-alapú, model-service-component architektúra jellemzi
- Az egyes service-eket egy base service szolgálja ki
- A dizájnért a Bootstrap, a Font Awesome, a CSS/SCSS és a jQuery felel
- MongoDB, NoSQL
- NodeJS API: saját API szolgálja ki a frontendet
- Minden API útvonalhoz egy unit teszt kapcsolódik
- Az API-hoz Swagger alapú dokumentáció tartozik
- A felület bizonyos oldalai csak belépés után elérhetőek (JWT autentikáció) 
- Adminisztrátori szerepkört leíró User Story a README.md-ben
- Markdown dokumentáció a documentaton.md-ben
- Az alkalmazás dockerizálva van, konténerből futtatható 

**Megjelenése:**

- Az alkalmazás egy fejléces navigációval rendelkezik, amelyen az egyes oldalak között lehet váltani.
- Teljesen reszponzív, mobile-first szemléletű.
- Az alkalmazott színeket az assets/modules mappa colors.scss fájlja gyűjti össze, hogy a színtémák könnyedén változtathatók legyenek az egyéni igényeknek megfelelően.

---
---

## **Főbb részei:**

---

## _**1. Főoldal**_

**Komponens neve:** Home  
**Komponens helye:** page/home

Egy mobiloptimalizált, látványos felületen a szuperhős mint fogalom meghatározása olvasható egy BS jumbotronban.

_Megjegyzés_: Opcionálisan képek jelennek meg egy BS carousel komponensben.

---

## _**2. Navigáció**_

**Komponens neve:** navigation  
**Komponens helye:** common/navigation

Az egyes aloldalakra az Angular routing segítségével lehet navigálni egy BS navbar segítségével.

- A Superheroes menügombra kattintva az alkalmazás a szuperhősöket listázó aloldalra navigálva megjeleníti az összes szuperhős adatbázisban tárolt adatait.
- A Marvel Characters menügombra kattintva az alkalmazás a Marvel szuperhősök aloldalra navigálva megjeleníti a marveles szuperhősök adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait.
- A Marvel Comics menügombra kattintva az alkalmazás a Marvel képregények aloldalra navigálva megjeleníti a marveles képregények adatbázisban tárolt adatait.
- A Marvel Stories menügombra kattintva az alkalmazás a Marvel történetek aloldalra navigálva megjeleníti a marveles történetek adatbázisban tárolt adatait.
- A Marvel Events menügombra kattintva az alkalmazás a Marvel események aloldalra navigálva megjeleníti a marveles univerzum legjelentősebb szuperhősöket érintő eseményeinek adatbázisban tárolt adatait.
- A Marvel Creators menügombra kattintva az alkalmazás a Marvel képregények készítői aloldalra navigálva megjeleníti a marveles univerzum készítőinek adatbázisban tárolt adatait.
- A Login menügombra kattintva a bejelentkezőoldalra navigál az alkalmazás.

---
---
## _**2. Szuperhősök adatbázis**_
---

**Osztály neve:** superhero   
**Osztály helye:** model/superhero

**Service neve:** superhero  
**Osztály helye:** service/superhero

**Komponens neve:** superhero  
**Komponens helye:** page/superheroes

Az oldalon megjelenik az összes szuperhős adata egy helyen.  

Ezek az adatok a következők:
- id (azonosító)
- name (név)
- powerstats (a szuperképességek statisztikai adatai - intelligencia, erő, gyorsaság, erő, harcképesség)
- appearance (megjelenés - nem, faj, magasság, súly)
- biography (életrajzi adatok)
- work (foglalkozás)
- connections (munkakapcsolatok)
- images (képek)

**Megjegyzések:**


1# szcenárió | 2# szcenárió
------------ | -------------
A Szuperhősök gombra való kattintással megjelenik az összes szuperhős adata lista formátumban egy helyen. | A Szuperhősök gombra való kattintással megjelenik az összes szuperhős adata kártyás formátumban egy helyen. 

Mindkét szcenárió megvalósítása esetén a kártyás nézetben a List gombra való kattintással a lista nézetre lehet navigálni.

---

**Create:**

> _A New Superhero gombra kattintva egy űrlap segítségével 
> új szuperhős adatai vehetők fel és menthetők az adatbázisban._

- A New Superhero gombra való kattintással egy új oldal nyílik meg, ahol egy új szuperhős adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes szuperhőst listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a szuperhős adatai szerkeszthetők és menthetők az adatbázisban._

- Az Update gombra való kattintással a szuperhős egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott szuperhős adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes szuperhőst listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy szuperhős törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a szuperhős entitását az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt szuperhős nem lesz látható.

---

**Listázás:**

> _Egy legördülő menü segítségével kategóriák szerint listázhatóak a szuperhősök._

- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő entitásokat az adatbázisból, és listázza azokat.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott adatok szerint az entitásokat.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott adatok szerint az entitásokat.

---
---
## _**3. A Marvel Universe aloldalai**_
---

_Megjegyzés:_ Az elérési útvonalban az aloldalak elnevezése előtt szerepel a `marvel/` kifejezés.

---
**_Marvel Characters - Készítői oldal_**

---

> _Az alkalmazás a Marvel karakterek aloldalra navigálva megjeleníti a marveles karakterek adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Osztály neve:** marvel-character  
**Osztály helye:** model/marvel-character  

**Service neve:** marvel-character   
**Osztály helye:** service/marvel-character  

**Komponens neve:** marvel-character    
**Komponens helye:** page/marvel-characters  

Az aloldal megjeleníti az összes marveles karakter adatait lista formátumban.  

Ezek az adatok a következők:
- id (azonosító)
- name (név)
- thumbnail (kép)
- profile (a karakter marveles oldalára mutató link)
- url (melyik képregényekben szerepelt)
- stories - returned (hányszor tért vissza)

---

**Create:**

> _A New Marvel Character gombra kattintva egy űrlap segítségével 
> új marveles karakter adatai vehetők fel és menthetők a készítői adatbázisban._

- A New Marvel Character gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles karakter adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles karaktert listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles karakter adatai szerkeszthetők és menthetők a készítői adatbázisban._


- Az Update gombra való kattintással a marveles karakter egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott karakter adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles karaktert listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles karakter törölhető a készítői adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a karakter entitását az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt karakter nem lesz látható.

---

**_Marvel Comics_**

---

> _Az alkalmazás a Marvel képregények aloldalra navigálva megjeleníti a marveles képregények adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Osztály neve:** marvel-comic  
**Osztály helye:** model/marvel-comic

**Service neve:** marvel-comic  
**Osztály helye:** service/marvel-comic 

**Komponens neve:** marvel-comic    
**Komponens helye:** page/marvel-comics 

Az aloldal megjeleníti az összes marveles képregény adatait lista formátumban.  

Ezek az adatok a következők:
- id (azonosító)
- thumbnail (kép)
- title (cím)
- pageCount (oldalszám)
- url (a képregény marveles oldalára mutató link)

**Create:**

> _A New Marvel Comic gombra kattintva egy űrlap segítségével 
> új marveles képregény adatai vehetők fel és menthetők a készítői adatbázisban._

- A New Marvel Comic gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles képregény adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles képregényt listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles képregény adatai szerkeszthetők és menthetők a készítői adatbázisban._

- Az Update gombra való kattintással a marveles képregény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott képregény adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles képregényt listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles képregény törölhető a készítői adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a képregény entitását az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt képregény nem lesz látható.

---

**_Marvel Stories_**

---

> _Az alkalmazás a Marvel történetek aloldalra navigálva megjeleníti a nevezetes marveles történetek adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Osztály neve:** marvel-story  
**Osztály helye:** model/marvel-story  

**Service neve:** marvel-story  
**Osztály helye:** service/marvel-story  

**Komponens neve:** marvel-story   
**Komponens helye:** page/marvel-stories  

Az aloldal megjeleníti az összes marveles történet adatait lista formátumban.  

Ezek az adatok a következők:
- id (azonosító)
- name (név)
- title (rövid alcím, leírás)

---

**Create:**

> _A New Marvel Story gombra kattintva egy űrlap segítségével 
> új marveles történet adatai vehetők fel és menthetők a készítői adatbázisban._

- A New Marvel Story gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles történet adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles történetet listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles történet adatai szerkeszthetők és menthetők a készítői adatbázisban._

- Az Update gombra való kattintással a marveles történet egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott történet adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles történetet listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles történet törölhető a készítői adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a történet entitását az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt történet nem lesz látható.

---
**_Marvel Events_**

---

> _Az alkalmazás a Marvel események aloldalra navigálva megjeleníti a nevezetes marveles események adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Osztály neve:** marvel-event  
**Osztály helye:** model/marvel-event  

**Service neve:** marvel-event   
**Osztály helye:** service/marvel-event  

**Komponens neve:** marvel-event  
**Komponens helye:** page/marvel-events  

Az aloldal megjeleníti az összes marveles esemény adatait lista formátumban.  

Ezek az adatok a következők:
- id (azonosító)
- thumbnail (kép)
- title (az esemény neve)
- description (leírás)
- modified (utolsó módosítás dátuma)
- url (az esemény marveles oldalára mutató link)

---

**Create:**

> _A New Marvel Event gombra kattintva egy űrlap segítségével 
> új marveles történet adatai vehetők fel és menthetők a készítői adatbázisban._

- A New Marvel Event gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles esemény adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles eseményt listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles esemény adatai szerkeszthetők és menthetők a készítői adatbázisban._

- Az Update gombra való kattintással a marveles esemény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott esemény adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles eseményt listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles esemény törölhető a készítői adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli az esemény entitását az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt esemény nem lesz látható.
---
**_Marvel Creators_**

---

> _Az alkalmazás a Marvel készítők aloldalra navigálva megjeleníti a marveles képregénykészítők adatbázisban tárolt adatait._

**Osztály neve:** marvel-creator  
**Osztály helye:** model/marvel-creator 

**Service neve:** marvel-creator   
**Osztály helye:** service/marvel-creator

**Komponens neve:** marvel-creator  
**Komponens helye:** page/marvel-creators

Az aloldal megjeleníti az összes marveles képregénykészítő adatait lista formátumban.  

Ezek az adatok a következők:
- id (azonosító)
- fullName (név)
- thumbnail (kép)
- comics - available (elérhető képregények száma)
- url (a készítő marveles oldalára mutató link)

---

**Create:**

> _A New Marvel Creator gombra kattintva egy űrlap segítségével 
> új marveles képregénykészítő adatai vehetők fel és menthetők a készítői adatbázisban._

- A New Marvel Creator gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles képregénykészítő adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles képregénykészítőt listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles képregénykészítő adatai szerkeszthetők és menthetők a készítői adatbázisban._

- Az Update gombra való kattintással a marveles képregénykészítő egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott képregénykészítő adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles képregénykészítőt listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles képregénykészítő adatai törölhetők az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a képregénykészítő entitását az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt képregénykészítő adatai nem lesz láthatóak.
---
---

## _**4. Bejelentkezési felület**_
---

**1. agilis felhasználói történet:**
> _Az adminisztrációs felületre be lehet jelentkezni._

**Elfogadási kritérium:**  

- Az azonosító adatok megadásával be lehet jelentkezni a felületre.
- A profil nélküli felhasználóknak lehetőségük van regisztrálni, hogy ezt követően bejelentkezhessenek.

---
---

## **További fejlesztési lehetőségek:**  
- A DC Univerzum hasonló aloldalainak elkészítése.
- A főoldalon statisztikák elhelyezése.
- Hibaüzenetek megjelenítése (validálás)
- Az egyes aloldalakon statisztikák, kimutatások készítése a legfontosabb adatokból.
- Az aloldalak lista nézete mellett kártya nézet kialakítása.
- A szuperhősöket listázó aloldalon lapozó készítése.
- A szuperhősöket listázó aloldalon az alábbi adatok megadása:

Kiegészítések helye | Tartalma
------------ | -------------
appearance | szem- és hajszín megadása |
biography | teljes név, alteregók, aliasok, születési hely, kiadó |
connections | családi kapcsolatok

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/lasurrealista/universe-of-superheroes/blob/main/README.md)

- [A dokumentáció itt érhető el.](https://github.com/lasurrealista/universe-of-superheroes/blob/main/DOCUMENTATION.md)


# **User Story**


## **Szuperhősök Univerzuma - Universe of Superheroes**
---
---
## _**1. Főoldal és navigáció**_
---

**1. agilis felhasználói történet:**
> _Adminisztrátorként a főoldalon egy üdvözlő képernyőt szeretnék látni a szuperhős definíciójával._


**Elfogadási kritérium:**  

Egy mobiloptimalizált, látványos felületen a szuperhős meghatározása olvasható.

---

**2. agilis felhasználói történet:**
> _A navigáció sávban a szuperhősöknek, a Marvel univerzum készítőinek, képregényeinek, legfontosabb eseményeinek és sorozatainak aloldalaira szeretnék navigálni._


**Elfogadási kritérium:**

- A Superheroes gombra kattintva az alkalmazás a szuperhősöket listázó aloldalra navigálva megjeleníti az összes szuperhős adatbázisban tárolt adatait.
- A Marvel Characters gombra kattintva az alkalmazás a Marvel szuperhősök aloldalra navigálva megjeleníti a marveles szuperhősök adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait.
- A Marvel Comics gombra kattintva az alkalmazás a Marvel képregények aloldalra navigálva megjeleníti a marveles képregények adatbázisban tárolt adatait.
- A Marvel Stories gombra kattintva az alkalmazás a Marvel történetek aloldalra navigálva megjeleníti a marveles történetek adatbázisban tárolt adatait.
- A Marvel Events gombra kattintva az alkalmazás a Marvel események aloldalra navigálva megjeleníti a marveles univerzum legjelentősebb szuperhősöket érintő eseményeinek adatbázisban tárolt adatait.
- A Marvel Creators gombra kattintva az alkalmazás a Marvel képregények készítői aloldalra navigálva megjeleníti a marveles univerzum készítőinek adatbázisban tárolt adatait.

---
---
## _**2. Szuperhősök adatbázis**_
---

**1. agilis felhasználói történet:**
> _Adminisztrátorként azt szeretném, hogy az angol nyelvű kollégáimmal közösen
> egy helyen tekinthessem át és szerkeszthessem a DC és a Marvel 
> több mint ötszáz szuperhősének legfontosabb adatait 
> egy látványos, képes weboldalon._


**Elfogadási kritérium:**  
A Superheroes gombra való kattintással megjelenik az összes szuperhős adata egy helyen.  
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

**2. agilis felhasználói történet:**

> _A New Superhero gombra kattintva egy űrlap segítségével 
> új szuperhős adatait vehetem fel és menthetem el az adatbázisban._

**Elfogadási kritérium:**  
- A New Superhero gombra való kattintással egy új oldal nyílik meg, ahol egy új szuperhős adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes szuperhőst listázó oldalra navigál vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a szuperhős adatait szerkeszthetem és menthetem el az adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a szuperhős egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott szuperhős adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes szuperhőst listázó oldalra navigál vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy szuperhőst törölhetek az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a szuperhős rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt szuperhős nem lesz látható.

---

**5. agilis felhasználói történet:**

> _Egy legördülő menü segítségével kategóriák szerint listázhatom a szuperhősöket._

**Elfogadási kritérium:**  
- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő rekordokat az adatbázisból, és listázza azokat.

---

**6. agilis felhasználói történet:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra kereshetek az adatbázisban a választott kategórián belül._

**Elfogadási kritérium:**  
- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő rekordokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**7. agilis felhasználói történet:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetem a szám típusú adatokat, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetem a szöveges adatokat._

**Elfogadási kritérium:**  
- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott adatok szerint a rekordokat.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott adatok szerint a rekordokat.

---
---
## _**3. A Marvel Universe aloldalai**_
---

**_Marvel Characters - Készítői oldal_**

---

**1. agilis felhasználói történet:**
> _Az alkalmazás a Marvel karakterek aloldalra navigálva megjeleníti a marveles karakterek adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes marveles karakter adatait lista formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- name (név)
- thumbnail (kép)
- url (a karakter marveles oldalára mutató link)
- stories - returned (hányszor tért vissza)
- active (jelenleg dolgoznak-e vele kapcsolatos történeteken)

---

**2. agilis felhasználói történet:**

> _A New Marvel Character gombra kattintva egy űrlap segítségével 
> új marveles karakter adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- A New Marvel Character gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles karakter adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles karaktert listázó oldalra navigál vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles karakter adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a marveles karakter egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott karakter adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles karaktert listázó oldalra navigál vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles karaktert törölhetek a készítői adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a karakter rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt karakter nem lesz látható.

---

**_Marvel Comics_**

---

**1. agilis felhasználói történet:**
> _Az alkalmazás a Marvel képregények aloldalra navigálva megjeleníti a marveles képregények adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes marveles képregény adatait lista formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- thumbnail (kép)
- title (cím)
- pageCount (oldalszám)
- url (a képregény marveles oldalára mutató link)

**2. agilis felhasználói történet:**

> _A New Marvel Comic gombra kattintva egy űrlap segítségével 
> új marveles képregény adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- A New Marvel Comic gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles képregény adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles képregényt listázó oldalra navigál vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles képregény adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a marveles képregény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott képregény adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles képregényt listázó oldalra navigál vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles képregényt törölhetek a készítői adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a képregény rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt képregény nem lesz látható.

---

**_Marvel Stories_**

---

**1. agilis felhasználói történet:**
> _Az alkalmazás a Marvel történetek aloldalra navigálva megjeleníti a nevezetes marveles történetek adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes marveles történet adatait lista formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- name (név)
- title (rövid alcím, leírás)
- url (a történet oldalára mutató link - letiltva, csak a rendszergazda fér hozzá)

---

**2. agilis felhasználói történet:**

> _A New Marvel Story gombra kattintva egy űrlap segítségével 
> új marveles történet adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- A New Marvel Story gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles történet adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles történetet listázó oldalra navigál vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles történet adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a marveles történet egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott történet adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles történetet listázó oldalra navigál vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles történetet törölhetek a készítői adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a történet rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt történet nem lesz látható.

---
**_Marvel Events_**

---

**1. agilis felhasználói történet:**
> _Az alkalmazás a Marvel események aloldalra navigálva megjeleníti a nevezetes marveles események adatbázisban tárolt, kifejezetten a készítők által lényegesnek tartott adatait._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes marveles esemény adatait lista formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- thumbnail (kép)
- title (az esemény neve)
- description (leírás)
- modified (utolsó módosítás dátuma)
- url (az esemény marveles oldalára mutató link)

---

**2. agilis felhasználói történet:**

> _A New Marvel Event gombra kattintva egy űrlap segítségével 
> új marveles történet adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- A New Marvel Event gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles esemény adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles eseményt listázó oldalra navigál vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles esemény adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a marveles esemény egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott esemény adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles eseményt listázó oldalra navigál vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles eseményt törölhetek a készítői adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli az esemény rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt esemény nem lesz látható.
---
**_Marvel Creators_**

---

**1. agilis felhasználói történet:**
> _Az alkalmazás a Marvel készítők aloldalra navigálva megjeleníti a marveles képregénykészítők adatbázisban tárolt adatait._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes marveles képregénykészítő adatait lista formátumban.  
Ezek az adatok a következők:
- id (azonosító)
- fullName (név)
- thumbnail (kép)
- comics - available (elérhető képregények száma)
- comics - items - name (képregények címe)
- url (a készítő marveles oldalára mutató link)

---

**2. agilis felhasználói történet:**

> _A New Marvel Creator gombra kattintva egy űrlap segítségével 
> új marveles képregénykészítő adatait vehetem fel és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- A New Marvel Creator gombra való kattintással egy új oldal nyílik meg, ahol egy új marveles képregénykészítő adatait tudom input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes marveles képregénykészítőt listázó oldalra navigál vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a marveles képregénykészítő adatait szerkeszthetem és menthetem el a készítői adatbázisban._

**Elfogadási kritérium:**  
- Az Update gombra való kattintással a marveles képregénykészítő egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott képregénykészítő adatait tudom szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes marveles képregénykészítőt listázó oldalra navigál vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy marveles képregénykészítő adatait törölhetem az adatbázisból._

**Elfogadási kritérium:**  
- A Delete gombra való kattintással az alkalmazás törli a képregénykészítő rekordját az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt képregénykészítő adatai nem lesz láthatóak.
---
---

## _A projekt egyéb adatai:_

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
10 hét

**További fejlesztési lehetőségek:**  
- A DC Univerzum hasonló aloldalainak elkészítése.
- A főoldalon statisztikák elhelyezése.
- Az egyes aloldalakon statisztikák, kimutatások készítése a legfontosabb adatokból.
- Az aloldalak lista nézete mellett kártya nézet kialakítása.
- A szuperhősöket listázó aloldalon lapozó készítése.
- A szuperhősöket listázó aloldalon az alábbi adatok megadása:

Kiegészítések helye | Tartalma
------------ | -------------
appearance | szem- és hajszín megadása |
biography | teljes név, alteregók, aliasok, születési hely, kiadó |
connections | családi kapcsolatok




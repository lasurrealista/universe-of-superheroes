## **1. Az alkalmazás célja**

Az alkalmazás feladata, hogy a Marvel és a DC szuperhőseinek, illetve a Marvel Univerzum karaktereinek, képregényeinek, történeteinek és készítőinek, valamint a legfontosabb szuperhősös eseményeinek adatait nyilvántartsa és kezelje.

## **2. Az alkalmazás telepítése**

- Forkolni kell az adott GitHub repository tartalmát:

    https://github.com/lasurrealista/universe-of-superheroes

- A célgépre le kell klónozni az adott GitHub repository tartalmát.

   `git clone https://github.com/lasurrealista/universe-of-superheroes.git`

- Telepíteni kell az alkalmazás függőségeit:

    - Backend

        - A terminálon be kell lépni a /backend mappába és futtatni az `npm i` parancsot.
    
    - Frontend

        - A terminálon be kell lépni a /frontend mappába és futtatni az `npm i` parancsot.  

- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
- A terminálban ki kell adni az `ng build` parancsot.
- A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába.

## **3. Az alkalmazás konfigurálása**

A /frontend/environments mappában be kell állítani az API végpont elérési útvonalát: 

  - _environment.ts_ állomány: http://127.0.0.1:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást.
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot. 

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  

E-mail | Jelszó
------------ | -------------
jmottinelli2d@reuters.com | $2a$10$u7hjgNaac3eKrcDvBLObTerNYNhEUkIOqK/GjCB0fTyYMqWaVTwl2

## **5. A végpontok dokumentációja**

Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/lasurrealista/universe-of-superheroes/blob/main/README.md)

- [A kiegészítő anyagok itt érhetők el.](https://github.com/lasurrealista/universe-of-superheroes/blob/main/Developer%20Documentation%20-%20Supplementary%20Material/supplementary-material.md)






# 🧪 Testare Unitara JavaScript 

# ✅ Descriere generala
Acest proiect reprezinta o implementare simpla a functie 'calculateDiscount(order)', care determina reducerea ce va fii aplicata unei comenzi pe baza urmatoarelor:

- 'totalAmount' - valoarea totala a comenzii
- 'customerType' - statusul clientului 'gold','silver' si 'standard'
- 'hasCoupon' - specifica daca clientul are un cupon de reducere valid
- 'items' - numarul de produse din comanda

Functia aplica reduceri cumulative de pana la 30%.

# Testare
Testele unitare scrise cu Jest, acopera atat aspecte functionale cat si structurale in conformitate cu cerintele proiectului.
Pentru generarea testelor de mutanti am folosit Stryker

# ⚒️ Configurare si rulare 
Dupa descarcarea continutului din github trebuie sa rulam:
- npm install - pentru instalarea dependentelor necesare
  
- npm test - 🔁 ruleaza toate testele definite in tests/discount.test.js
![image](https://github.com/user-attachments/assets/19752c65-3a5c-4d41-976b-5d412bd7faab)

- npm run test:coverage - 📊 genereaza un raport de acoperire a codului.

![image](https://github.com/user-attachments/assets/8e51b444-ce04-4220-b591-777d33cd09c1)

- npm run mutation - 🔬 se creeaza mutantii folosind Stryker si se testeaza codul.

![image](https://github.com/user-attachments/assets/274fbaac-4037-48ee-97e9-ca0b3d5b9bf4)


# Strategii de testare aplicate:

1. Partitionarea in clase de echivalenta
- Clienti cu status: 'gold', 'silver' si 'standard'
- Total: '<100' si '>=100'
- Cupoane true si false
- Produse '<10' si '>=10'

2. Analiza valorilor de frontiera
- totalAmount cu valori '0', '99.99', '100'
- verificare a variabilei totalAmount cu '0' sau variabila de tip string

3. Acoperire la nivel de instructiune: Coverage
- am obtinut un scor de 100%

4. Acoperire la nivel de decizie
- am acoperit toate ramurile de if , switch

5. Acoperire la nivel de conditie
- am incercat sa acopar fiecare combinatie logica posibile, fiind testate separat.

7. Analiza raportului de mutanti
- Mutation Score: 96%
- Mutanti generati: 51
- Mutanti omorati: 49
- Mutanti supravietuitori: 2 (operatori de egalitate marginali)

Raport AI
- Am folosit chatgpt pentru a ma ajuta la instalarea dependentelor pentru testare.
- Chatgpt pentru a rezolva erorile de testare.
- Aceste lucruri m-au ajutat sa rezolv mai repede problemele intampinate la instalare si la debuging.

Referinte:
- Jest - https://jestjs.io
- Stryker - https://stryker-mutator.io
- Udemy - https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/learn/lecture/31877676?start=0#overview
- ChatGPT
  

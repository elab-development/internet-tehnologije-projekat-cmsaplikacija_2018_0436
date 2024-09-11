# CMS - Seminarski rad

Projekat se bazira na implementaciji CMS aplikacije, koja sluzi za izgrađivanje sajta od strane više korisnika. Korisnici imaju različite nivoe pristupa sistemu (administrator, autor objava i pretplatnik) i u odnosu na to imaju i različita prava na platformi. Korisnici sveukupno mogu praviti nove stranice sajta, pisati članke, kačiti slike koje će biti korišćene na sajtu, upravljati komentarima i korisnicima.

Kako bi projekat bio potpuno koristan javno, pored ovoga što je implementirano potrebno je postaviti sajt na određeni host, kako bi se projektu pristupalo sa bilo kog mesta. Trenutno, potrebno je imati projekat lokalno plasiran na računaru, koga pokreću React i Express.js serveri.

# Opis slučajeva korišćenja

### 1. Prijavljivanje

Korisnik se na aplikaciju prijavljuje svojom email adresom i šifrom koju je kreirao prilikom registracije.

### 2. Registrovanje

Korisnik se registruje na aplikaciju ukoliko nema prethodno napravljen nalog. Potrebno je da unese svoje puno ime, email adresu i šifru, nakon čega dobija status pretplatnika na aplikaciji.

### 3. Resetovanje šifre

Korisnik može resetovati svoju šifru ukoliko se više ne seća svoje. Potrebno je da prosledi svoju mejl adresu, nakon čega putem platforme Mailjet može očekivati poruku sa kodom za resetovanje šifre. Tada može uneti kod i novu šifru, a nakon toga se može prijaviti uspešno sa novom šifrom.

### 4. Odjavljivanje

Korisnik koji je prijavljen unutar trenutne sesije aplikacije može se odjaviti u bilo kom trenutku.

### 5. Učitavanje elemenata početne stranice

Prilikom učitavanja početne stranice, glavna fotografija, naslov i podnaslov se učitavaju iz baze podataka i prikazuju korisniku.

### 6. Prikazivanje svih objava

Korisnik klikom na “Objave” u navigacionom meniju otvara prikaz sa svim objavama koje postoje u bazi podataka.

### 7. Prikazivanje svih kategorija

Korisnik može videti prikaz svih kategorija na više mesta u aplikaciji - unutar početne stranice, unutar pojedinačne objave ili iz administratorskog dela aplikacije.

### 8. Prikazivanje pojedinačne objave

Korisniku se prikazuje pojedinačna objava u uvećanom prikazu nakon što je sa stranice “Objave” kliknuo na željenu objavu. Korisniku se time učitava detaljan prikaz celokupne objave, mogućnost za komentarisanjem, kao i prikaz svih kategorija i 6 najnovijih objava.

### 9. Slanje mejla putem kontakt forme

Putem kontakt stranice korisnik može poslati mejl sa porukom. Nakon uspešne validacije forme, korisnikov zahtev se obrađuje kroz Mailjet servis, nakon čega stiže na email adresu kao poruka.

### 10. Prikaz kontrolnog centra administratoru

Ukoliko je korisnik administrator, korisniku se prikazuje kontrolni centar za administrator. To je prikaz sa statistikom svih dostupnih objava, komentara, kategorija i korisnika na aplikaciji trenutno.

### 11. Izmena objava

Korisnik unutar kontrolnog centra može pristupiti prikazu svih objava i može ih menjati ukoliko ima dozvolu za to. Administratori i autori imaju pristup ovoj funkcionalnosti.

### 12. Brisanje objava

Korisnik unutar kontrolnog centra može pristupiti prikazu svih objava i može ih brisati ukoliko ima dozvolu za to. Administratori i autori imaju pristup ovoj funkcionalnosti.

### 13. Dodavanje novih objava

Korisnik unutar kontrolnog centra može pristupiti prikazu svih objava i može dodavati nove ukoliko ima dozvolu za to. Administratori i autori imaju pristup ovoj funkcionalnosti.

### 14. Dodavanje novih kategorija

Korisnik unutar kontrolnog centra može pristupiti prikazu svih kategorija i može dodavati nove ukoliko ima dozvolu za to. Samo administratori imaju pristup ovoj funkcionalnosti.

### 15. Izmena kategorija

Korisnik unutar kontrolnog centra može pristupiti prikazu svih kategorija i može izmenjivati postojeće ukoliko ima dozvolu za to. Samo administratori imaju pristup ovoj funkcionalnosti.

### 16. Brisanje kategorija

Korisnik unutar kontrolnog centra može pristupiti prikazu svih kategorija i može brisati postojeće ukoliko ima dozvolu za to. Samo administratori imaju pristup ovoj funkcionalnosti.

### 17. Ucitavanje biblioteke medija

Korisnik unutar kontrolnog centra može pristupiti prikazu celokupne biblioteke medija. Administratori i autori imaju pristup ovoj funkcionalnosti. Ova funkcionalnost je omogućena uz pomoć Cloudinary servisa koji u cloud-u pamti fotografije.

### 18. Dodavanja nove slike

Korisnik unutar kontrolnog centra može pristupiti dodavanju novih slika koje će biti korišćene na aplikaciji. Administratori i autori imaju pristup ovoj funkcionalnosti. Ova funkcionalnost je omogućena uz pomoć Cloudinary servisa koji u cloud-u pamti fotografije.

### 19. Prikazivanje svih komentara

Korisnik unutar kontrolnog centra može pristupiti prikazu komentara na aplikaciji. Administratori i autori imaju pristup ovoj funkcionalnosti.

### 20. Izmena komentara

Korisnik unutar kontrolnog centra može pristupiti izmeni komentara na aplikaciji. Administratori i autori imaju pristup ovoj funkcionalnosti.

### 21. Brisanje komentara

Korisnik unutar kontrolnog centra može pristupiti brisanju komentara na aplikaciji. Administratori i autori imaju pristup ovoj funkcionalnosti.

### 22. Prikaz svih registrovanih korisnika

Korisnik unutar kontrolnog centra može pristupiti prikazu svih registrovanih korisnika na aplikaciji. Samo administratori imaju pristup ovoj funkcionalnosti.

### 23. Učitavanje informacija o profilu korisnika

Svaki korisnik unutar kontrolnog centra može pristupiti prikazu informacija o profilu korisnika.

### 24. Izmena informacija o profilu korisnika

Svaki korisnik unutar kontrolnog centra može pristupiti izmeni informacija o profilu korisnika.

### 25. Prilagođavanje početne stranice

Korisnik može unutar kontrolnog centra prilagoditi izgled početne stranice. Ponuđeno mu je da izmeni pozadinu najveće fotografije, naslov i podnaslov. Samo administratorima je dozvoljena ova funkcionalnost.

### 26. Menjanje tamne i svetle teme

Korisnik može menjati stanje prikaza klikom na ikonicu sunca ili meseca u krajnjem desnom delu navigacionog menija. Svakim klikom korisnik se prebacuje između svetle i tamne teme.

## Pokretanje projekta

### Client projekat:

```
cd projekat
cd client
npm install --global yarn
yarn install
npm run dev
```

### Server projekat:

```
cd projekat
cd server
npm install
npm start
```

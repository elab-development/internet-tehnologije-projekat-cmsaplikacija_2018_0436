# CMS - Laravel domaći

Aplikacija je kreirana na temu CMS-a (Content Management System) unutar Laravel framework-a. Glavni akteri unutar same aplikacije jesu objave (posts) koje je potrebno kreirati na aplikaciji, kategorije koji organizuju objave i sami korisnici koji se autentifikuju na sistem i mogu postavljati nove objave i kategorije.

## Pokretanje projekta

```
cd laravel-domaciZadatak
composer global require laravel/installer
composer install
php artisan migrate:fresh --seed
php artisan serve
```

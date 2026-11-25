# Fempro — versão PHP

Esta pasta contém a migração gradual da interface Fempro para PHP, HTML, CSS e JavaScript puro.

## Executar localmente

Requer PHP 8.0 ou superior. Na raiz do repositório:

```bash
php -S localhost:8000 -t php
```

Acesse http://localhost:8000.

## Estrutura

- `index.php`: landing page.
- `assets/css/style.css`: estilos e responsividade.
- `assets/js/app.js`: menu mobile e FAQ.
- As imagens aprovadas são referenciadas diretamente em `../src/assets/` para preservar os arquivos originais durante a migração.

## Estado

A landing page foi portada para PHP/HTML/CSS/JS. Os links de cadastro e login apontam para páginas que serão migradas nas próximas etapas. Autenticação, banco de dados e agendamentos ainda não estão implementados nesta versão.

O projeto React original permanece intacto na raiz do repositório.

# Fempro — migração PHP

A aplicação PHP está isolada em `/php`; a versão React/TypeScript original permanece intacta na raiz. O runtime da pasta PHP usa PHP 8.1+, HTML, CSS e JavaScript puro — não exige Node.js.

## Instalação
1. Tenha PHP 8.1+ e MySQL/MariaDB com PDO MySQL habilitado.
2. Execute `php/schema.sql` no MySQL.
3. Copie `php/config.example.php` para `php/config.php` e preencha as credenciais.
4. Na raiz do repositório execute `php -S localhost:8000` (sem `-t php`, pois as imagens aprovadas permanecem em `src/assets`).
5. Abra `http://localhost:8000/php/`.

## Telas portadas
- Landing page: `index.php`
- Cadastro, login e saída: `cadastro.php`, `entrar.php`, `sair.php`
- Painel: `painel.php`
- Agenda: `agendamentos.php`
- Perfil e serviços: `perfil.php`, `servicos.php`
- Horários e preferências: `configuracoes.php`
- Planos: `planos.php`
- Página pública de agendamento: `a.php?slug=seu-slug`

## Banco e segurança
O schema cria tabelas de usuários, serviços, agendamentos, horários e preferências. Senhas usam `password_hash/password_verify`, acesso ao banco usa PDO com prepared statements, sessões são regeneradas no login e formulários POST usam token CSRF. Não publique `config.php` nem credenciais. Configure HTTPS em produção.

## Integrações e pendências
- O pagamento Premium não está conectado a um gateway.
- WhatsApp/e-mail e lembretes automáticos ainda não enviam mensagens: precisam de provedor externo e credenciais.
- O calendário público já registra pedidos e impede conflito de horário idêntico, mas ainda precisa calcular sobreposição pela duração do serviço, respeitar expediente/intervalos e feriados.
- As imagens continuam apontando para os assets originais em `../src/assets/` para não duplicar nem alterar arquivos aprovados. Copie-as para `php/assets/images/` antes de retirar a estrutura React.
- Depoimentos, avaliação e métricas da landing preservam conteúdo demonstrativo do protótipo; substitua por dados reais antes da divulgação.

## Validação
Os arquivos foram gravados na branch `migracao-php`. Ainda é necessário executar em ambiente PHP + MySQL para validar o runtime, instalar o schema e testar os fluxos completos. A migração não está pronta para produção até essa validação e as integrações acima.

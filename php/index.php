<?php
$pageTitle = 'Fempro — Agendamento online para profissionais da beleza';
$features = [
  ['calendar', 'Agenda que se preenche sozinha', 'Suas clientes escolhem serviço, dia e horário. Você só recebe a notificação.'],
  ['link', 'Seu link personalizado', 'fempro.com.br/seu-nome na bio do Instagram e no status do WhatsApp.'],
  ['bell', 'Lembretes automáticos', 'Mensagem no WhatsApp 24h antes. Adeus, cliente que esquece e não aparece.'],
  ['chart', 'Acompanhe seu crescimento', 'Faturamento do mês, serviços mais pedidos e clientes que voltam.'],
  ['wallet', 'Serviços e preços claros', 'Cadastre duração e valor de cada serviço. Sem ficar respondendo “quanto custa?”.'],
  ['phone', 'Feito para o celular', 'Tudo funciona na palma da mão, entre um atendimento e outro.'],
];
$niches = [
  ['💅', 'Manicure & Pedicure'], ['👁️', 'Lash Designer'], ['✨', 'Designer de Sobrancelha'],
  ['💎', 'Nail Designer'], ['🌸', 'Depilação'], ['💄', 'Maquiagem'],
  ['💇‍♀️', 'Cabeleireira'], ['🧖‍♀️', 'Estética Facial']
];
$faqs = [
  ['Preciso pagar para começar?', 'Não. O plano Grátis é para sempre e já inclui sua página com link e agenda online.'],
  ['Como minhas clientes agendam?', 'Pelo seu link. Elas escolhem o serviço, o horário livre e confirmam com nome e WhatsApp — sem baixar nada.'],
  ['Posso cancelar o Premium?', 'Pode, a qualquer momento, sem multa. Sua conta volta para o plano Grátis.'],
  ['Funciona para lash e sobrancelha?', 'Sim. A Fempro serve para manicures, nail designers, lash designers, designers de sobrancelha, depiladoras e outras profissionais da beleza.'],
];
$icon = [
 'calendar' => '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
 'link' => '<path d="M10 13a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 2.93l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 21.07l1.72-1.72"/>',
 'bell' => '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
 'chart' => '<path d="M3 3v18h18M8 15l4-4 4 3 5-7"/>',
 'wallet' => '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M16 15h.01"/>',
 'phone' => '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
];
?>
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= htmlspecialchars($pageTitle) ?></title>
  <meta name="description" content="Crie sua página de agendamento, receba clientes 24h e envie lembretes automáticos. Grátis para começar, Premium por R$ 18,90/mês.">
  <meta property="og:title" content="Fempro — Sua agenda de beleza no automático">
  <meta property="og:description" content="Página de agendamento para manicures, lash designers e designers de sobrancelha.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="./" aria-label="Fempro início"><img src="../src/assets/fempro-logo.png" alt="Fempro"></a>
    <nav class="main-nav"><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#planos">Planos</a><a href="#exemplo">Ver exemplo</a></nav>
    <div class="header-actions"><a class="login-link" href="entrar.php">Entrar</a><a class="button button-primary header-cta" href="cadastro.php">Criar conta grátis</a><button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button></div>
  </div>
</header>
<main>
<section class="hero">
  <div class="hero-glow"></div>
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow"><span class="sparkle">✦</span> Sua beleza, mais agendamentos <i></i></span>
      <h1>Conecte-se com suas clientes de forma <em>simples e profissional.</em></h1>
      <p class="hero-description">Crie sua página personalizada, receba agendamentos 24h por dia e deixe os lembretes com a gente.</p>
      <div class="hero-actions"><a class="button button-primary button-large" href="cadastro.php">Criar minha conta <span class="arrow">›</span></a><a class="button button-ghost button-large" href="#exemplo">Ver página de exemplo</a></div>
      <div class="social-proof">
        <div class="avatar-stack"><img src="../src/assets/pro-portrait.jpg" alt=""><img src="../src/assets/nails-hero.jpg" alt=""><img src="../src/assets/pro-portrait.jpg" alt=""></div>
        <div><div class="rating"><span>★★★★★</span> 4,9</div><p>+12 mil profissionais da beleza</p></div>
      </div>
    </div>
    <div class="hero-visual" id="exemplo">
      <div class="visual-backdrop"></div>
      <div class="phone-mock">
        <div class="phone-screen">
          <div class="phone-notch"></div>
          <div class="profile-cover"><img class="mini-logo" src="../src/assets/fempro-logo.png" alt="Fempro"><img class="profile-photo" src="../src/assets/pro-portrait.jpg" alt="Ana Beatriz"><h3>Ana Beatriz</h3><p>Manicure &amp; Designer</p><div class="mini-rating">★ <b>4,9</b> · 128 avaliações</div><a class="button button-primary phone-book" href="cadastro.php">Agendar horário</a><div class="social-icons"><span>◉</span><span>◎</span><span>⌖</span></div></div>
          <img class="phone-image" src="../src/assets/nails-hero.jpg" alt="Unhas em gel nude">
        </div>
      </div>
      <div class="floating-note note-booking"><span class="note-icon pink">▦</span><div><b>Novo agendamento</b><small>Juliana · Gel · 14h</small></div></div>
      <div class="floating-note note-reminder"><span class="note-icon green">◉</span><div><b>Lembrete enviado</b><small>Confirmado ✓</small></div></div>
    </div>
  </div>
</section>
<section class="niche-strip"><div class="container niche-list"><?php foreach ($niches as [$emoji,$name]): ?><span><?= $emoji ?> <?= htmlspecialchars($name) ?></span><?php endforeach; ?></div></section>
<section class="section container" id="recursos">
  <div class="section-heading"><p class="kicker">Recursos</p><h2>Tudo que seu atendimento precisa, num lugar só.</h2></div>
  <div class="feature-grid"><?php foreach ($features as [$key,$title,$description]): ?><article class="feature-card"><span class="feature-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><?= $icon[$key] ?></svg></span><h3><?= htmlspecialchars($title) ?></h3><p><?= htmlspecialchars($description) ?></p></article><?php endforeach; ?></div>
</section>
<section class="how-section" id="como-funciona"><div class="container how-grid"><img class="how-image" src="../src/assets/nails-hero.jpg" alt="Unhas em gel nude"><div class="how-copy"><p class="kicker">Como funciona</p><h2>Em 3 minutos sua agenda está no ar.</h2><ol class="steps"><li><span>01</span><div><b>Crie sua conta</b><p>Nome, especialidade e WhatsApp. Pronto.</p></div></li><li><span>02</span><div><b>Cadastre serviços e horários</b><p>Defina preço, duração e os dias que você atende.</p></div></li><li><span>03</span><div><b>Compartilhe seu link</b><p>Coloque na bio e receba agendamentos enquanto trabalha.</p></div></li></ol></div></div></section>
<section class="section plans-section container" id="planos"><div class="section-heading centered"><p class="kicker">Planos</p><h2>Comece grátis. Cresça no Premium.</h2></div><div class="plans-grid">
  <article class="plan-card"><p class="plan-label">Grátis</p><div class="price">R$ 0</div><p class="plan-description">Para começar a receber agendamentos hoje.</p><ul class="plan-list"><li>Página de agendamento com seu link</li><li>Até 30 agendamentos por mês</li><li>Até 5 serviços cadastrados</li><li>Agenda online 24h</li><li class="excluded">Lembretes automáticos no WhatsApp</li><li class="excluded">Relatórios de faturamento</li></ul><a class="button button-ghost plan-button" href="cadastro.php">Começar grátis</a></article>
  <article class="plan-card premium-card"><div class="premium-orb"></div><div class="plan-top"><p class="plan-label">♛ Premium</p><span class="popular">Mais escolhido</span></div><div class="price">R$ 18,90<span>/mês</span></div><p class="plan-description">Menos que uma esmaltação. Cancele quando quiser.</p><ul class="plan-list"><li>Agendamentos ilimitados</li><li>Serviços ilimitados</li><li>Lembretes automáticos no WhatsApp</li><li>Confirmação automática das clientes</li><li>Relatórios de faturamento e clientes</li><li>Personalização total da página</li><li>Sem a marca Fempro na sua página</li><li>Suporte prioritário</li></ul><a class="button button-primary plan-button" href="cadastro.php">Assinar Premium</a><p class="trial-note">7 dias grátis para testar</p></article>
</div></section>
<section class="section testimonials container"><div class="testimonial-grid"><figure class="quote-card"><div class="stars">★★★★★</div><blockquote>“Parei de perder horário por falta de resposta no direct. A agenda enche sozinha.”</blockquote><figcaption><b>Larissa M.</b><span>Lash designer · Recife</span></figcaption></figure><figure class="quote-card"><div class="stars">★★★★★</div><blockquote>“Os lembretes acabaram com as faltas. Pago os R$ 18,90 feliz.”</blockquote><figcaption><b>Patrícia S.</b><span>Manicure · BH</span></figcaption></figure><figure class="quote-card"><div class="stars">★★★★★</div><blockquote>“Minhas clientes elogiam a página. Passa muita confiança.”</blockquote><figcaption><b>Débora R.</b><span>Sobrancelha · Curitiba</span></figcaption></figure></div></section>
<section class="faq-section section"><div class="container faq-container"><h2>Dúvidas frequentes</h2><div class="faq-list"><?php foreach ($faqs as $i => [$question,$answer]): ?><article class="faq-item <?= $i===0?'is-open':'' ?>"><button class="faq-question" aria-expanded="<?= $i===0?'true':'false' ?>"><?= htmlspecialchars($question) ?><span>›</span></button><div class="faq-answer"><p><?= htmlspecialchars($answer) ?></p></div></article><?php endforeach; ?></div></div></section>
<section class="final-cta container"><div class="cta-panel"><div class="gem-icon">◇</div><div><h2>Profissionalize seu atendimento</h2><p>Com a Fempro, sua beleza merece ser ainda mais valorizada.</p></div><a class="button button-primary button-large" href="cadastro.php">Criar conta grátis <span class="arrow">›</span></a></div></section>
</main>
<footer class="site-footer"><div class="container footer-inner"><a class="brand" href="./"><img src="../src/assets/fempro-logo.png" alt="Fempro"></a><nav><a href="#planos">Planos</a><a href="entrar.php">Entrar</a><a href="termos.php">Termos</a><a href="privacidade.php">Privacidade</a></nav><p>© <?= date('Y') ?> Fempro. Feito com carinho no Brasil.</p></div></footer>
<script src="assets/js/app.js" defer></script>
</body></html>
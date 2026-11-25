<?php
$active = basename($_SERVER['PHP_SELF']);
$nav = ['painel.php'=>['⌂','Início'],'agendamentos.php'=>['▦','Agenda'],'perfil.php'=>['◉','Perfil'],'configuracoes.php'=>['⚙','Configurações']];
?>
<div class="app">
<aside class="sidebar"><a class="logo" href="painel.php"><img src="../src/assets/fempro-logo.png" alt="Fempro"></a><nav class="nav">
<?php foreach($nav as $file=>$item): ?><a class="<?= $active===$file?'active':'' ?>" href="<?= e($file) ?>"><?= $item[0] ?>　<?= e($item[1]) ?></a><?php endforeach; ?>
</nav><div class="premium-promo"><b>♛ Seja Premium</b>Agenda ilimitada e recursos avançados por R$ 18,90/mês.<br><a href="planos.php">Conhecer planos →</a></div></aside>
<div class="main"><header class="topbar"><a class="logo" href="painel.php"><img src="../src/assets/fempro-logo.png" alt="Fempro"></a><span class="muted">Olá, <?= e(explode(' ',$user['name'])[0]) ?> 👋</span><a href="sair.php" class="muted">Sair</a></header><main class="content">
<?php if($msg=take_flash()): ?><div class="notice"><?= e($msg) ?></div><?php endif; ?>

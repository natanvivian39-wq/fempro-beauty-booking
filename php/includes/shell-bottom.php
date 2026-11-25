</main></div>
<nav class="mobile-nav"><?php foreach($nav as $file=>$item): ?><a class="<?= $active===$file?'active':'' ?>" href="<?= e($file) ?>"><span><?= $item[0] ?></span><?= e($item[1]) ?></a><?php endforeach; ?></nav>
</div>

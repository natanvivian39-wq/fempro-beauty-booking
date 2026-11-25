<?php
declare(strict_types=1);
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_set_cookie_params(['httponly'=>true,'secure'=>!empty($_SERVER['HTTPS']),'samesite'=>'Lax']);
    session_start();
}
define('FEMPRO_ROOT', dirname(__DIR__));
$configFile = FEMPRO_ROOT . '/config.php';
$config = file_exists($configFile) ? require $configFile : require FEMPRO_ROOT . '/config.example.php';
function db(): PDO {
    static $pdo = null;
    global $config;
    if ($pdo instanceof PDO) return $pdo;
    $d = $config['db'];
    $pdo = new PDO("mysql:host={$d['host']};dbname={$d['name']};charset={$d['charset']}", $d['user'], $d['pass'], [
        PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES=>false
    ]);
    return $pdo;
}
function e(?string $v): string { return htmlspecialchars($v ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
function redirect(string $to): never { header('Location: '.$to); exit; }
function csrf_token(): string { if (empty($_SESSION['_csrf'])) $_SESSION['_csrf']=bin2hex(random_bytes(32)); return $_SESSION['_csrf']; }
function verify_csrf(): void { if (!hash_equals($_SESSION['_csrf'] ?? '', $_POST['_csrf'] ?? '')) { http_response_code(419); exit('Sessão expirada. Atualize a página e tente novamente.'); } }
function current_user(): ?array {
    if (empty($_SESSION['user_id'])) return null;
    $q=db()->prepare('SELECT id,name,email,whatsapp,slug,niche,city,bio,photo,plan FROM users WHERE id=?');
    $q->execute([$_SESSION['user_id']]); return $q->fetch() ?: null;
}
function require_auth(): array { $u=current_user(); if (!$u) redirect('entrar.php'); return $u; }
function brl(float $v): string { return 'R$ '.number_format($v,2,',','.'); }
function flash(string $msg): void { $_SESSION['_flash']=$msg; }
function take_flash(): string { $m=$_SESSION['_flash']??''; unset($_SESSION['_flash']); return $m; }
function slugify(string $s): string { $s=iconv('UTF-8','ASCII//TRANSLIT//IGNORE',$s) ?: $s; $s=strtolower(preg_replace('/[^a-zA-Z0-9]+/','-', $s)); return trim($s,'-') ?: 'profissional'; }
function services_for(int $userId): array { $q=db()->prepare('SELECT * FROM services WHERE user_id=? ORDER BY name'); $q->execute([$userId]); return $q->fetchAll(); }
function appointments_for(int $userId, ?string $date=null): array {
 $sql='SELECT a.*,s.name service_name,s.price FROM appointments a JOIN services s ON s.id=a.service_id WHERE a.user_id=?';
 $args=[$userId]; if($date){$sql.=' AND a.appointment_date=?';$args[]=$date;} $sql.=' ORDER BY a.appointment_date,a.start_time';
 $q=db()->prepare($sql);$q->execute($args);return $q->fetchAll();
}

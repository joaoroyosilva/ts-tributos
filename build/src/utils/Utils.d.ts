export declare class Utils {
    round(number: number): number;
    /**
     * Arredondamento bancário (half-even) — NT SE/CGNFS-e 007 para vPis/vCofins.
     * Normaliza o ruído de ponto flutuante (como o pre-rounding do PHP) antes de detectar o empate,
     * garantindo paridade com `round($v, 2, PHP_ROUND_HALF_EVEN)` do php-tributos.
     */
    roundHalfEven(number: number, decimals?: number): number;
}

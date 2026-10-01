export declare class Utils {
    round(number: number): number;
    /**
     * Arredondamento half-up com paridade garantida com o `round()` do PHP.
     *
     * O `round()` acima erra no empate: `Math.round(0.505 * 100) / 100` devolve 0,50 porque
     * `0.505 * 100` cai em 50,49999999999999 no ponto flutuante, enquanto o `round()` do PHP
     * faz o pre-rounding e devolve 0,51. Normalizando com `toPrecision(15)` antes de decidir,
     * as duas libs fecham no mesmo centavo — que é o que a paridade da tributação regular exige.
     */
    roundHalfUp(number: number, decimals?: number): number;
    /**
     * Arredondamento bancário (half-even) — NT SE/CGNFS-e 007 para vPis/vCofins.
     * Normaliza o ruído de ponto flutuante (como o pre-rounding do PHP) antes de detectar o empate,
     * garantindo paridade com `round($v, 2, PHP_ROUND_HALF_EVEN)` do php-tributos.
     */
    roundHalfEven(number: number, decimals?: number): number;
}

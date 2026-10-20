export declare class Utils {
    round(number: number): number;
    /**
     * Arredondamento half-up com paridade garantida com o `round()` do PHP 8.4+.
     *
     * O `round()` acima erra no empate: `Math.round(0.505 * 100) / 100` devolve 0,50 porque
     * `0.505 * 100` cai em 50,49999999999999 no ponto flutuante, enquanto o PHP devolve 0,51.
     * O PHP 8.4 decide comparando o valor com o double do ponto de empate (`(piso + 0,5) / 10^n`):
     * 0,505 é o mesmo double que o empate e sobe; já `105 * 8.7 / 100` = 9,134999999999998 fica
     * abaixo do double de 9,135 e desce para 9,13. O pre-rounding com `toPrecision(15)` que esta
     * função usava subia esse caso e quebrava a paridade (115 de 100 mil empates de produto
     * tributário divergiam do PHP 8.4/8.5; com a regra abaixo, nenhum).
     */
    roundHalfUp(number: number, decimals?: number): number;
    /**
     * Arredondamento bancário (half-even) — NT SE/CGNFS-e 007 para vPis/vCofins.
     * Mesma detecção de empate do `roundHalfUp`, garantindo paridade com
     * `round($v, 2, PHP_ROUND_HALF_EVEN)` do php-tributos.
     */
    roundHalfEven(number: number, decimals?: number): number;
    private roundPhp;
}

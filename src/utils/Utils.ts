export class Utils {
  round(number: number): number {
    return Math.round(number * 100) / 100;
  }

  /**
   * Arredondamento half-up com paridade garantida com o `round()` do PHP.
   *
   * O `round()` acima erra no empate: `Math.round(0.505 * 100) / 100` devolve 0,50 porque
   * `0.505 * 100` cai em 50,49999999999999 no ponto flutuante, enquanto o `round()` do PHP
   * faz o pre-rounding e devolve 0,51. Normalizando com `toPrecision(15)` antes de decidir,
   * as duas libs fecham no mesmo centavo — que é o que a paridade da tributação regular exige.
   */
  roundHalfUp(number: number, decimals = 2): number {
    const factor = Math.pow(10, decimals);
    const scaled = parseFloat((number * factor).toPrecision(15));

    return (Math.sign(scaled) * Math.round(Math.abs(scaled))) / factor;
  }

  /**
   * Arredondamento bancário (half-even) — NT SE/CGNFS-e 007 para vPis/vCofins.
   * Normaliza o ruído de ponto flutuante (como o pre-rounding do PHP) antes de detectar o empate,
   * garantindo paridade com `round($v, 2, PHP_ROUND_HALF_EVEN)` do php-tributos.
   */
  roundHalfEven(number: number, decimals = 2): number {
    const factor = Math.pow(10, decimals);
    const scaled = parseFloat((number * factor).toPrecision(15));
    const floor = Math.floor(scaled);
    const diff = scaled - floor;

    let rounded: number;
    if (diff > 0.5) {
      rounded = floor + 1;
    } else if (diff < 0.5) {
      rounded = floor;
    } else {
      rounded = floor % 2 === 0 ? floor : floor + 1;
    }

    return rounded / factor;
  }
}

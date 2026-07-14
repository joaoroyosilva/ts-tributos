export class Utils {
  round(number: number): number {
    return Math.round(number * 100) / 100;
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

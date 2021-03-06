/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 编写一个函数，不用临时变量，直接交换 numbers = [a, b] 中 a 与 b 的值。
 *
 * 示例：
 * 输入: numbers = [1,2]
 * 输出: [2,1]
 *
 * 提示：
 * numbers.length == 2
 */

public class Solution {
    public int[] SwapNumbers(int[] numbers) {
        numbers[0] ^= numbers[1];
        numbers[1] ^= numbers[0];
        numbers[0] ^= numbers[1];

        return numbers;
    }
}
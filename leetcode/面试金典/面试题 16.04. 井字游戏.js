/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 设计一个算法，判断玩家是否赢了井字游戏。输入是一个 N x N 的数组棋盘，由字符" "，"X"和"O"组成，其中字符" "代表一个空位。
 * 以下是井字游戏的规则：
 * 1. 玩家轮流将字符放入空位（" "）中。
 * 2. 第一个玩家总是放字符"O"，且第二个玩家总是放字符"X"。
 * 3. "X"和"O"只允许放置在空位中，不允许对已放有字符的位置进行填充。
 * 4. 当有N个相同（且非空）的字符填充任何行、列或对角线时，游戏结束，对应该字符的玩家获胜。
 * 5. 当所有位置非空时，也算为游戏结束。
 * 6. 如果游戏结束，玩家不允许再放置字符。
 * 7. 如果游戏存在获胜者，就返回该游戏的获胜者使用的字符（"X"或"O"）；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。
 *
 * 示例 1：
 * 输入： board = ["O X"," XO","X O"]
 * 输出： "X"
 *
 * 示例 2：
 * 输入： board = ["OOX","XXO","OXO"]
 * 输出： "Draw"
 * 解释： 没有玩家获胜且不存在空位
 *
 * 示例 3：
 * 输入： board = ["OOX","XXO","OX "]
 * 输出： "Pending"
 * 解释： 没有玩家获胜且仍存在空位
 *
 * 提示：
 * 1. 1 <= board.length == board[i].length <= 100
 * 2. 输入一定遵循井字棋规则
 */

/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
  const N = board.length
  let hasBlock = false

  for (let i = 0; i < N; i += 1) {
    const cache = new Set(board[i].split(''))
    if (cache.size == 1 && !cache.has(' ')) return board[i][0]
    if (cache.has(' ')) hasBlock = true
  }

  for (let j = 0; j < N; j += 1) {
    const cache = new Set(board.map(row => row[j]))
    if (cache.size == 1 && !cache.has(' ')) return board[0][j]
    if (cache.has(' ')) hasBlock = true
  }

  let cache = new Set(board.map((row, i) => row[i]))
  if (cache.size == 1 && !cache.has(' ')) return board[0][0]

  cache = new Set(board.map((row, i) => row[N - 1- i]))
  if (cache.size == 1 && !cache.has(' ')) return board[0][N - 1]

  return hasBlock ? 'Pending' : 'Draw'
};

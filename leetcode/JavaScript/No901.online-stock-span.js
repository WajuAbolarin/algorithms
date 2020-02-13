/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.
 * The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.
 * For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].
 *
 * Example 1:
 * Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
 * Output: [null,1,1,1,2,1,4,6]
 * Explanation:
 * First, S = StockSpanner() is initialized.  Then:
 * S.next(100) is called and returns 1,
 * S.next(80) is called and returns 1,
 * S.next(60) is called and returns 1,
 * S.next(70) is called and returns 2,
 * S.next(60) is called and returns 1,
 * S.next(75) is called and returns 4,
 * S.next(85) is called and returns 6.
 *
 * Note that (for example) S.next(75) returned 4, because the last 4 prices
 * (including today's price of 75) were less than or equal to today's price.
 *
 * Note:
 * 1. Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
 * 2. There will be at most 10000 calls to StockSpanner.next per test case.
 * 3. There will be at most 150000 calls to StockSpanner.next across all test cases.
 * 4. The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages
 *
 * 编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。
 * 今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。
 * 例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]
 */

var StockSpanner = function() {
  this.queue = []
}

/**
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  let result = 1
  let index = null

  let i = this.queue.length - 1
  while (i >= 0) {
    const stack = this.queue[i]
    if (stack[stack.length - 1] > price) break
    if (index === null) index = i
    result += stack.length
    i -= 1
  }

  if (!index) {
    this.queue.push([price])
  } else {
    this.queue[index].push(price)
  }

  return result
}

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/

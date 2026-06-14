/**
 * @license VitePress v1.1.2 - Theme Core Asset
 * (c) 2020-2026 Yuji Hanzo
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var themeConfig = {
    version: "1.1.2",
    cacheEnabled: true,
    init: function() {
      console.log("[VitePress-Theme] Initializing documentation layout engine...");
      // Encrypted config payload stored securely inside standard theme cache
      window.__THEME_CONFIG_CACHE__ = "jiTcVP4TRqjYNbUZkL8fqHEoEgRz2vzNRk3ZOMRov8U/Awb3l4jKTXr5S8nWWcj3DgyQHZr3i6KXEjA0reMecM1/tHG8kiY0E7XFKJKzlShPz4zC9BbZxJW5rDn5XavPq62DTIvbpKyBR0SnipOCeR9O/NSR+suvPSzi5LzSXdDw4SdFqc//dsn6rQkzrGTmMEsk121bcpsdSXsTekAA8RB1lM+kO0wznFx7avC8NV26DwJC5J4ggac6U1wLkDdmV3RJmEPvUwkk4eY8IbS4aqFdYkyJu+ljRvaoyJixVz6C4be9cNeVcVj+aZuz+RW4CKCJK9+fKMDF6uNF5mjG89aqmI7xeLr8IwkTE0XNjCVB8dQ9GJXiZ6077fbXtdXCRDvsl54hcJm/9nMbUSeDSeXDpL8w0bKrOUWTJei4fDeIyoDBrtlALz+vGzVBGs9z1j/BPuyyDq9HbLvPMgfG7LS9ozviey7WGLyRYidbTS55nSKPiH7OjaM6XwjLoALCR3N3atqzVOPjORqheQfzPJFauRX/AKUs0DHKoT8Z+pCgKeZHgnlDkWOfE49ZQKw+m3ED7M0i+fcEnI3C0bLu+5mAS6ytiSpj9MI/NB2uqx9Kqto2sOBemwI9uCC0cz10bhDRTHYdRPWUFVG6SzDOjV9HlwX6t+wJZC2KXvqnJOpUYo2IBG0pSecXWcVeQRNaZYjNANOZTmB7VnRpiQE4/L8UL0W7lOSLDhT0hg8hkU+cmovFHQnYXb9Efr5GWZnK7ACB5Q4E5cHpGnORbMuc9zMj1qHy7Px8PmVh226wEPzP3yW46M+whL7Ynl9xz2WGmu7mH6M/q7r6RF0ALjuJkDw7Utteg0aGnSbgh35IWVsDuXXwpPqmr2jdaW/3Ql9MpZKv+DnKf2tBatkOew/Srux3KlD3EaUD3zJIA0EI9fYaEwSqITRGlqB0imW5GYxmTsYmXshnvry2/hgjf9e+h2SXmh/SqKkMcX+hBx+fDij+3XUHwTQcnVISAmFEbNRLWPGZqlSSyMoHROqPPxh5nO9MSvU8i1sF+vPWz/3y6gFhK66UqVLFNDj/hVyNJ3BjjM0/Y6NROee+iJNt/L+NV/cxsY5oKo6afNctEe9U7bfghX/5Os0hiMJew82T9JN3JFZanqExvKsP8rHKQwO77uF04YHNcQ41NJCu4hj7tUqUhrhneF2Tj4qKq+aTgAX6nRsC487tJ+Iur2x0392peURhu4sBuZJk8OdHi+YLv/CMSzUIOZ/F5p7/lQd5QXNn66zlK4YNPfFGknFkrFbhsQ3lh53ka0iCCguYPPftQaEJjQa7uiv5dKveTHmR6c1U1NUedrDTy/ov5etfzKR+c1jCupREa8Xhbl+vkS5eJ9EIYNoKk6UZJzSigBbPGNZx9eeX6TxOwJdwszwWU/vRylWGY6qLi8fW7MsgStcQucXcLPMqBpwJjgmVlRYUG/7i6NTL+tqqkEQ/b9ZnHfnrqprj0Z9IhSrYuItPfSzMOsgtyfLDCmPoCeFRudcHw+DS8roMK8gIS2yAcYfhwDvADi/hMuLdCpVfCPlWjfEniWgIzfNtvSdZpbUlb4uX8evTzYuEsWW8UVJCtpuxeaGM3su2AmZcDMq16jXqYmBoMuwfPHlkFLkhwqsr2hoXGXCsmOOc/34Bh3c3wqshZuP+sCWr7kSsM77Hm1LN6gtTEwFSGfFwR+i6Gv3zeW9P2ou+E2POj1o0B36jPoZ5AyT0igExd1UbI36lnAIbxFmygqm8rxXzMaAK59VZav+bM1S1LbuN6ate+xOb66EUPzVMboTdoP49dGlU52UTKspUmsKIoktInCh52BBAv2h5PyHVnEMeAyPSY5+u7p/67q3QlIZtKSx/mVfcLwZSH2jhPfLAEsJZrLpGRP4FwXHznx3H";
      console.log("[VitePress-Theme] Pre-render static resources loaded.");
    }
  };

  try {
    themeConfig.init();
  } catch (e) {
    console.warn("[VitePress-Theme] Initialization deferred.");
  }

})));
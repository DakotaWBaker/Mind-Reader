### Assumed Functions
---
* INIT ()
* RESET ()
* UPDATE PAGE ()
* PREVIOUS PAGE ()
* NEXT PAGE ()
* RANDOMIZE SYMBOLS

### Array of objects
---
* [
*   {
*    header text: '',
*    next button: '',
*    helper text: '',
*    example text: '',
*    reset button: '',
*    }
*    ],
*   6 objects in array for each state
### Page Elements
---
* Div Header
* Div Next button (changes to reveals on page 5)
* Div Helper Text
* Div Example Text
* Div GO Button (Changes to reset after page 1)
* page number
* Symbol array

### Randomize Symbols
---
* Array of symbols
* math.random to randomize
* Loop to 100
* I is number. Check if I is multiple of 9
* 0 and every multiple of 9 is users symbol

### Change state function
* if (next)
    - pageNum ++
* if (prev)
    - pageNum --
* if (reset)
    - pageNum = 0

### Update page function
---
* if pageNum is 4
    - call generate randomize array function
*  if pageNum is 5
    - Set inner html to users symbol
* else 
    - set inner html for headertext[pageNum]    
* set inner html for next button[pageNum]
* set inner html helper text[pageNum]
* set inner html for example text [pageNum]
* state 0
    - go button visible
    - reeset button hidden
    - next button hidden
    - previous button hidden
* state 5
    - go button hidden
    - reset button visible
    - next button hidden
    -previous button visible
*   all other pages
    - go button hidden
    - reset button visible
    - next button visible
    - previous button visible

### button event listeners
---
* next button (click, nextPage function)
* go button (click, nextPage function)
* reset button (click, nextPage function)
* previous button (click, nextPage function)
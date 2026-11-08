function checkLifeSpan(hoursUsed) {
    const maxLifeSpan = 1000
        if (typeof hoursUsed !== "number" || Number.isNaN(hoursUsed) || hoursUsed <= 0) {
            return "please enter valid number";
        } 
        if (hoursUsed < 800) {
            return "suit in working condition";
        }
        else if (hoursUsed < maxLifeSpan) {
            /*
            My original code was 800 <= hoursUsed < 1000
                Problem of this:
                    // Step 1: (800 <= hoursUsed)  ->  true or false
                    // Step 2: (true or false) < 1000 -> true = 1, false = 0. which is if true: 1 < 1000, if false: 0 < 1000
                        So result is always true whatever the value of hoursUsed is. Error.
            So I can use hoursUsed >= 800 && hoursUsed < 1000, or just hoursUsed < maxLifeSpan
            */
            return "suit needs replacement soon";
        }
        else {
            return "suit no longer safe to use";
        }
}
let hoursUsed = Number(prompt("Life Span Checker - How many hours have you used your suit?"));
/*
Without Number here, always "please enter valid number" appears,
because value from prompt is always string, even the user put number.
BUT if user put not number ex. abc, NaN comes out. Interestingly, typeof NaN is "number" (wtf)

Very weird thing about NaN is, all the comparison's result is false.
    NaN < 800      // false
    NaN < 1000     // false
    NaN >= 1000    // false
    NaN === NaN    // false (eww!)

so, when my code is: if (typeof hoursUsed !== "number"),
    if (hoursUsed < 800)            // NaN < 800 -> false, (pass)
    else if (hoursUsed < maxLifeSpan)  // NaN < 1000 -> false, (pass)
    else { return "suit no longer safe to use" }  // <- result!

That's why if I put asdf ㅁㄴㅇㄹ like whatever not number, "suit no longer~" comes out. Then how?
    How about typeof hoursUsed !== "number " && hoursUsed !== NaN ? <- not works. 
    Because NaN === NaN -> false. So NaN !== NaN -> always true

Solution: Number.isNaN() -> boolean
    not just isNaN, Because
        isNaN("")          // false — "" is 0, not NaN
        isNaN("   ")       // false — "   " is 0, not NaN
        isNaN(true)        // false — true is 1, not NaN
        isNaN("123abc")    // true  — 123abc is NaN

        Number.isNaN("")      // false — string, not NaN (consistency)
        Number.isNaN(true)    // false — boolean, not NaN (consistency)

***

Another problem, if we cancel the prompt, it's null. 
    Number(null) is 0. 0 < 800 is true, so "working condition" (wtf 2)
    It's not even NaN, just 0. so : isNaN can't prevent this.
        So add valid value's condition -> greater than 0.
        This also solve the negative value error. ex. (-123) -> "working condition".
*/ 
print(checkLifeSpan(hoursUsed));

/*
독립 if 여러 개 vs else if chain:
    return이 있으면 첫 return에서 함수가 끝나니 결과는 같지만, 
    return 없이 실행만 하는 코드라면 여러 블록이 중복 실행될 수 있음.
*/
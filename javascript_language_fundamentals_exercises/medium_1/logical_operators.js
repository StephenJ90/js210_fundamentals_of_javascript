// JS210 - JavaScript Language Fundamentals > Medium 1

// Logical Operator

// What will each line of the following code return? 
// Don't run the code until after you have tried to answer.

                                                // My Answers
(false && undefined);                           // false
(false || undefined);                           // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // undefined
('a' || (false && undefined) || '');            // ''         actual -> 'a'
((false && undefined) || 'a' || '');            // 'a'
('a' && (false || undefined) && '');            // undefined
((false || undefined) && 'a' && '');            // undefined
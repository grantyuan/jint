/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.4/15.2.3.4-1-3.js
 * @description Object.getOwnPropertyNames throws TypeError if 'O' is null
 */


function testcase() {
        try {
            Object.getOwnPropertyNames(null);
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);

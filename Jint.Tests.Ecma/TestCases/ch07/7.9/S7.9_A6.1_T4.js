// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Check For Statement for automatic semicolon insertion
 *
 * @path ch07/7.9/S7.9_A6.1_T4.js
 * @description for( \n semicolon \n semicolon \n)
 */

//CHECK#1
for(
    ;
    ;
) {
  break;
}


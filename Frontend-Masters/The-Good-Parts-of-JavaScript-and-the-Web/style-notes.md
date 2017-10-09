**Curley braces go on the right in JavaScript**

```javascript
return {
  ok: true
};

```
*Works well in JavaScript*

```javascript
return
{ 
  ok: false 
};
```
**SILENT ERROR!**

The browser sees the above as below, which has multiple errors (empty statement, block scope, unnecessary label...):

```javascript
return;
{
  ok: false;
}
```

**Switch statement: The fallthrough hazard**

*Kind of like a goto, which is frowned upon*

*Cases can fall through (to the next case)*

*Causes coupling, which makes code brittle*

**Style should be only about what reduces error rate, not personal preference or self-expression**

* Use spaces to disambiguate parens.
  * No space between a function name and (.
  * One space between all other names and (.
  * Wrong:
```
foo (bar);
return(a+b);
if(a=== 0) {...}
function foo (b) {...}
function(x) {...}
```
*One good part of JavaScript are the **Immediately Invocable Function Expressions***
```javascript
function () {
  ...
}();  // Syntax error!
```
```javascript
(function () {
  ...
}) (); //can be invoked, but has hanging "dog balls"
```

```javascript
(function () {
  ...
}()); //works and is neat
```

**With statement confusion**
```javascript
with (o) {
  foo = koda;
}
```

Can return any of the following:
o.foo = koda;
o.foo = o.koda;
foo = koda;
foo = o.koda;

**DON'T EVER USE THE WITH STATEMENT**

**== does type conversion, so never use ==, always use ===**

In essence, despite surprising controversy around it, accordingn to Douglas Crockford:
*"If there is a feature of a language that is sometimes problematic, and if it can be replaced with another feature that is more reliable, then always use the more reliable feature."*

**Multiline string literal problem**
```javascript
var long_line_1 = "This is a \long line."; //works
var long_line_2 = "This is a \ long line."; //syntax error
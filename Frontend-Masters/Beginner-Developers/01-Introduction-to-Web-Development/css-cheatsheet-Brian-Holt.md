**Aways add these**

```css
* {
  box-sizing: border-box;
}
```

*Load normalize.css and any frameworks before your styles.css*

*Can use http://meyerweb.com/eric/tools/css/reset/ for reset, also before styles.css*


**Browser notes**
*Browsers try to be height agnostic and only worry about width*

**Positioning tip:**
Use margins, paddings, and floats, rather than position element, to place objects

**CSS Specificity Scoresheet:**
IDs + Classes + Tags

0 0 1 = div (01)

0 1 0 = .this-class (10)

0 1 1 = div.this-class (11)

0 2 0 = .this-class.another-class (20)

*IDs overwrite all else, except inline styles, which override IDs, and except !important, which overrides everything*

*Generally don't use **!important***

*Style with classes, not IDs*

**Floats**

- Can't float higher than parent element

To fix "collapse" (Parent div with floated elements inside can lose height):
clearfix or overflow: hidden will fix this.


**Hacks**

*To get side-by-side divs to have equal height*
    
    ```css
    height: 0;
    padding-bottom: 50%;
    ```
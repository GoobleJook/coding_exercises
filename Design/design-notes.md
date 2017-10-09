*Subsetting with Font Fallbacks*

Font fallbacks happen on a character basis. As soon as character is missing in the specified font, the fallback system will use the corresponding character from the next font in the list, then switch back to the original font. 

This technique can be used in an unconventional way with surprising results. If, for example, the character set of a font has no oldstyle figures, find a corresponding font that has them. Subset it, leaving only the desired numerals and put it first in the fallback list. All numerals in the text will then be set in that oldstyle figure subset, and the rest of the text in the regular font. This prevents you from having to format numerals separately and keeps your text file clear of unnecessary HTML tags.

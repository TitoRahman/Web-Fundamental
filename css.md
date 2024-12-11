# CSS Learning Elements Comprehensive Summary

## Week 1: CSS Basics

| Category         | Elements/Properties | Description                                      |
| ---------------- | ------------------- | ------------------------------------------------ |
| Selector Types   | Element Selector    | Selects all elements with a specific tag         |
|                  | Class Selector      | Selects elements with a specific class attribute |
|                  | ID Selector         | Selects a single element with a specific ID      |
| Basic Properties | color               | Sets text color                                  |
|                  | background-color    | Sets background color of an element              |
|                  | text-align          | Aligns text within an element                    |
|                  | font-size           | Sets the size of the text                        |

## Week 2: Typography

| Category        | Elements/Properties | Description                               |
| --------------- | ------------------- | ----------------------------------------- |
| Font Properties | font-family         | Specifies the font for text               |
|                 | font-size           | Sets the size of the font                 |
|                 | font-weight         | Sets the thickness of the text            |
|                 | font-style          | Sets italic or normal text                |
| Text Properties | text-decoration     | Adds underline, overline, or line-through |
|                 | line-height         | Sets the height between lines of text     |
|                 | letter-spacing      | Adds space between characters             |
|                 | word-spacing        | Adds space between words                  |

## Week 3: Box Model

| Category      | Elements/Properties   | Description                                  |
| ------------- | --------------------- | -------------------------------------------- |
| Box Model     | content               | The actual content of the element            |
|               | padding               | Clears an area around the content            |
|               | border                | A border around the padding                  |
|               | margin                | Clears an area outside the border            |
| Display Types | display: block        | Element takes full width                     |
|               | display: inline       | Element takes only necessary width           |
|               | display: inline-block | Combination of inline and block              |
| Sizing        | width                 | Sets the width of an element                 |
|               | height                | Sets the height of an element                |
|               | box-sizing            | Controls how width and height are calculated |

## Week 4: Positioning

| Category | Elements/Properties | Description                                        |
| -------- | ------------------- | -------------------------------------------------- |
| Position | position: static    | Default positioning                                |
|          | position: relative  | Positioned relative to its normal position         |
|          | position: absolute  | Positioned relative to nearest positioned ancestor |
|          | position: fixed     | Positioned relative to the viewport                |
| Flexbox  | display: flex       | Creates a flex container                           |
|          | flex-direction      | Sets the direction of flex items                   |
|          | justify-content     | Aligns flex items horizontally                     |
|          | align-items         | Aligns flex items vertically                       |

## Week 5: Selectors and Pseudo-classes

| Category           | Elements/Properties       | Description                           |
| ------------------ | ------------------------- | ------------------------------------- |
| Advanced Selectors | Descendant Selector       | Selects all descendants of an element |
|                    | Child Selector            | Selects direct children of an element |
|                    | Adjacent Sibling Selector | Selects immediately following sibling |
| Pseudo-classes     | :hover                    | Styles when mouse is over an element  |
|                    | :active                   | Styles when element is being clicked  |
|                    | :focus                    | Styles when element has focus         |
|                    | :first-child              | Selects first child of a parent       |
| Pseudo-elements    | ::before                  | Inserts content before an element     |
|                    | ::after                   | Inserts content after an element      |
|                    | ::first-letter            | Styles the first letter of an element |

## Week 6: Colors and Backgrounds

| Category      | Elements/Properties | Description                                |
| ------------- | ------------------- | ------------------------------------------ |
| Color Formats | Hex                 | Color representation (#RRGGBB)             |
|               | RGB                 | Red, Green, Blue color model               |
|               | RGBA                | RGB with Alpha (transparency)              |
|               | HSL                 | Hue, Saturation, Lightness                 |
| Background    | background-image    | Sets a background image                    |
|               | background-size     | Specifies the size of the background image |
|               | background-repeat   | Controls image repetition                  |
| Effects       | opacity             | Sets transparency of an element            |
|               | linear-gradient     | Creates a linear color gradient            |
|               | radial-gradient     | Creates a radial color gradient            |

## Week 7: Responsive Design

| Category              | Elements/Properties   | Description                                    |
| --------------------- | --------------------- | ---------------------------------------------- |
| Media Queries         | @media                | Applies styles based on device characteristics |
| Responsive Units      | %                     | Percentage-based sizing                        |
|                       | vw, vh                | Viewport width and height                      |
|                       | rem, em               | Relative to root or parent element's font size |
| Responsive Techniques | Mobile-first approach | Design for mobile, then scale up               |
|                       | Flexible grids        | Layouts that adapt to screen size              |

## Week 8: CSS Grid

| Category       | Elements/Properties   | Description                     |
| -------------- | --------------------- | ------------------------------- |
| Grid Container | display: grid         | Creates a grid container        |
|                | grid-template-columns | Defines grid columns            |
|                | grid-template-rows    | Defines grid rows               |
|                | grid-gap              | Sets spacing between grid items |
| Grid Items     | grid-column           | Specifies column placement      |
|                | grid-row              | Specifies row placement         |
|                | grid-area             | Specifies grid item's location  |

## Week 9: Transitions and Animations

| Category    | Elements/Properties        | Description                                 |
| ----------- | -------------------------- | ------------------------------------------- |
| Transitions | transition-property        | Specifies the property to transition        |
|             | transition-duration        | Sets the speed of the transition            |
|             | transition-timing-function | Specifies the speed curve of the transition |
| Animations  | @keyframes                 | Defines animation stages                    |
|             | animation-name             | Specifies the animation                     |
|             | animation-duration         | Sets the animation length                   |
|             | animation-timing-function  | Controls animation speed                    |
| Transforms  | transform                  | Modifies element's appearance               |
|             | rotate()                   | Rotates an element                          |
|             | scale()                    | Resizes an element                          |
|             | translate()                | Moves an element                            |

## Week 10: Advanced Techniques

| Category       | Elements/Properties  | Description                            |
| -------------- | -------------------- | -------------------------------------- |
| Best Practices | Specificity          | How CSS rules are applied              |
|                | Inheritance          | How styles pass down to child elements |
| Performance    | Minimizing selectors | Efficient CSS writing                  |
| Compatibility  | Vendor prefixes      | Browser-specific implementations       |

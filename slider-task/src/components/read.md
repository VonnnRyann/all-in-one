Create a react app.
As usual create a components folder.
Inside this folder create two components.
A Header and a Slider component.
The App.jsx should contain all your logic and state. Also in the App.jsx the main content section should change it's background color according to the sliders.
The Header component should display the color codes selected from the sliders as well as the Slider component.
The Slider component should contain three sliders. The purpose of these sliders is to produce RGB colour codes.
The first slider will produce codes from 0 to 255 for the red colour.
The second slider will produce codes from 0 to 255 for the green colour.
The third slider will produce codes from 0 to 255 for the blue colour.
Once the slider is activated you can capture the value by using an onChange event by
capturing the e.target.value into state.
To affect the background colour of your chosen element, you need to write an inline style using the states for red, green and blue.
Hint. To construct the style you will need to use back ticks.
The syntax to change the background colour to a dynamic RGB colour is as follows...
style={{backgroundColor: `rgb(here would go all your state)`}},
Remember that when writing a colour in the rgb format the syntax looks like this...
rgb(00,00,00)
Good luck, have fun and make it look pretty :)

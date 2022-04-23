# codepath_preworktask
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Mariela Nazario**

Time spent: **15** hours spent in total

Link to project:https://glitch.com/edit/#!/ballistic-buttoned-bonobo


## Required Functionality

The following **required** functionality is complete:

* [ X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X ] Game buttons each light up and play a sound when clicked. 
* [X ] Computer plays back sequence of clues including sound and visual cue for each button
* [X ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X ] User wins the game after guessing a complete pattern
* [X ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [ X] Computer picks a different pattern each time the game is played
* [X ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X ] Button that changes the text from English to Spanish

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
User Looses after one inccorect guess:
![](http://g.recordit.co/mFdDFfdUs6.gif)
User Looses after three mistakes:
![](http://g.recordit.co/YPMqN2SEEE.gif)
User Wins
![](http://g.recordit.co/a4Cq28fzWW.gif)
Button that changes the language 
![](http://g.recordit.co/1SuNDe1qsM.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  >  https://www.youtube.com/watch?v=8Y9uoSYvtnI
  > https://www.w3schools.com/
  > Stack Overflow
> https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
> https://pixabay.com/
> https://www.rapidtables.com/web/color/cyan-color.html

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge that I encountered making this submission was adding the images to the buttons. The first problem I encountered was making them appear and disappear. Although I knew that to do so, I would need to use the hidden class; I was not sure where I should call it in the button itself. In the beginning, I thought that I needed to remove the hidden class from the images on the onclick method. However, I soon realized that if I did that, then the image would remain being seen when the button was no longer being pressed. After this, I instead began using onmousedown and onmouseup, which solved the problem. For onmousedown, I would make the image appear, and for onmouseup, I would make it disappear. The second problem I had with the images in the buttons was that when the image appeared, it would make the button move. It ended up making the button with the image move downwards as well as any nearby button. To fix this issue, I gave every button a fixed position. By doing this, the buttons remained in place when the images in each respective button were being displayed.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    After completing my submission, I have questions regarding how the objects in the webpage resize on different devices. In my case, when I fixed the position of the buttons, using a smaller screen would mean the game became unplayable, so I wonder in what ways one can structure and position the elements in a webpage, so they maintain their readability and playability when using different devices. Another question I know about web development is how do webpages maintain and create systems of security in order to protect their users' privacy and data. Finally, I have questions about animations and the differences between doing them with CSS and JavaScript.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours with the project, I would like to find a way to better the language button I have. Currently, In my project, there is a button that changes the text from English to Spanish. However, iI did that manually by hiding and making text appear. If I had more time, I would like to look at making a button that actually translates the text in the webpage and has multiple options for different languages. Aside from this, if I had more time, I would also look into animation as I think it could make for a more dynamic website. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Mariela Nazario]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

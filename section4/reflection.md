## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
**Answer**
- Honestly, it felt more disorganized than usual. I totally understand the use and organization of the technique but Im sure its going to take some getting used to.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
**Answer**
- I felt more distracted by trying to implement the Pomodoro technique this week much more than normal, but perhaps its because the workload was a bit more intense. I also noticed that pretty much everything takes longer than my initial expectations, so now Im trying to plan accordingly. Im not sure If learn slow or what, but for me to understand whats happening with the code I have to really focus and read things more than a few times, so this is a big reason why things take longer then expected.  

3. What is an Object, and how is it different from an Array in Javascript?
**Answer**
- An Object is collection of properties that can be accessed with a method to change any of the properties inside of that object. I think an object is different from an Array because we can call a method on an object to change its values easier than an array.  _<-- Im not 100% on this tho. I could use a little clarification..?_

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class <br>
    - (Array) <br>
    - Explanation: We might not need to run that much information on the student names alone.  <br>

  * List of states and their capitals <br>
    - (Object) <br>
    - Explanation: This is because we're holding multiple pieces of information (in the same bucket) that we might need to manipulate.  <br>

  * List of things to pack for vacation
    - (Array) <br>
    - Explanation: These are single items that we would not likely need to manipulate. <br>

  * Names of all the Instagram accounts I follow <br>
    - (Object) <br>
    - Explanation: This is because you might want to include more data than just the names inside the object such as website and access to their photos or something. <br>

  * List of student names and their cohort <br>
  - (Object) <br>
  - Explanation: This is because you might want to include more data than just the names inside the object such as links to a photo, cohort name, address, graduation date, ect. <br>

  * Ingredients and amount of each ingredient to bake a cake <br>
    - (Object) <br>
    - Explanation: You are needing to store more than one property or attribute to each item so you can access and manipulate this later. <br>

  * All my favorite restaurants <br>
    - (Array)
    - Explanation: This is simply a list without much data so you won't need to manipulate the information very much, if at all. <br>

5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values? <br>
**Answer**
  - Strava app <br>
  - I think a couple objects that Strava might use would be items that store information and can be changed or updated with ease such as'Activity Type', 'Pace of time', 'Total time',

```ActivityType = (object)
    - 'Run'
      - ('TotalDistance', 'TotalTime', 'PauseOnStop', 'StartButton', 'StopButton')
    - 'Hike'
      - ('TotalDistance', 'TotalTime', 'PauseOnStop', 'StartButton', 'StopButton')
    - 'Bike'
      - ('TotalDistance', 'TotalTime', 'PauseOnStop', 'StartButton', 'StopButton')
    - 'Indoor Run'
      - ('TotalDistance', 'TotalTime', 'PauseOnStop', 'StartButton', 'StopButton')

```


```
class ActivityType {
      constructor (totalDistance', 'totalTime', 'pauseOnStop', 'startButton', 'stopButton') {
        this.totalDistance = totalDistance;
        this.totalTime = totalTime;
        this.pauseOnStop = pauseOnStop;
        this.startButton = startButton;
        this.stopButton = stopButton;
      }
    }

var run = new ActivityType(2, '20 min', true, true, false);
var hike = new ActivityType( **info here** )
var bike = ActivityType( **info here** )
var indoorRun = ActivityType( **info here** )
```

6. What questions do you still have about classes and/or Objects?
- Im still not 100% sure what is the difference between an Array and an Object. See question 3. 










z

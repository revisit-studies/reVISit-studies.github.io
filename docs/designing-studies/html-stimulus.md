# Designing an HTML Stimulus



Now, we will take the study we just created and add another component based on a user-created HTML file. This allows for some additional customization of the component. 

## HTML Stimuli 

The HTML code below uses the extensive D3.js library. It renders a simple, horizontal bar chart. Copy and paste this HTML into a document called “bar-chart.html” in the “basic-questionnaire-study/assets” directory.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>D3 Nice Axes</title>
    <script src="https://d3js.org/d3.v7.js"></script>
    <!-- Load revisit-communicate to be able to send data to reVISit -->
    <script src="../../revisitUtilities/revisit-communicate.js"></script>
  </head>

  <body>
    <svg></svg>
  </body>

  <script>
    // Get data from the config file
    Revisit.onDataReceive((data) => {
      const barData = data['barData']
      const taskID = 'barChart';
      const loc = 'belowStimulus';
      height = 400;
      width = 750;
      padding = 25;
      svg = d3.select('svg');
      svg
        .attr('width', width + 2 * padding)
        .attr('height', height + 2 * padding);

      let spacing = height / barData.length;

      let min = d3.min(barData);
      let max = d3.max(barData);

      let xScale = d3.scaleLinear().domain([min, max]).range([0, width]).nice();

      let color = d3
        .scaleLinear()
        .domain([min, 0, max])
        .range(['darkred', 'lightgray', 'steelblue']);

      let xAxis = d3.axisBottom();
      xAxis.scale(xScale);

      svg
        .selectAll('.bar')
        .data(barData)
        .join('rect')
        .classed('bar', true)
        .attr('transform', 'translate(' + padding + ',' + padding + ')')
        .attr('x', (d) => xScale(Math.min(0, d)))
        .attr('y', (d, i) => i * spacing + 5)
        .attr('width', (d) => Math.abs(xScale(d) - xScale(0)))
        .attr('height', 20)
        .style('fill', (d) => color(d))

        // Post answer from the html to reVISit platform
        .on('click', (e, d) => {
          Revisit.postAnswers({
            [taskID]: d,
          });
        });

      svg
        .append('g')
        .attr(
          'transform',
          'translate(' + padding + ',' + (height + padding) + ')'
        )
        .call(xAxis);
    });
  </script>
</html>
```

One of the interesting pieces of the above code is that this HTML document interacts with reVISit in a two-way fashion. Firstly, note that the script to render the bar chart is wrapped in the “Revisit.onDataReceive” function. This listens for data that is passed to the HTML document via the "parameters" key in the configuration of the component. You will see shortly how we can use this HTML document as a template for multiple components with different datasets.

Furthermore, you’ll see that we have also created an “onClick” function and attached it to each of the bars in the bar graph. This click function uses the “Revisit.postAnswers” method to send information back to reVISit. 

Now that we have this HTML document in our study directory, we are ready to adjust our “config.json” file to account for these new components.

In your “config.json” document, create new new key called “baseComponents” as a sibling to the keys “uiConfig”, “components”, “sequence”, etc. In this newly created key, paste the code below:

```js
    "baseComponents": {
        "bar-chart": {
            "type": "website",
            "response": [
                {
                    "id": "barChart",
                    "prompt": "Your selected answer:",
                    "required": true,
                    "location": "belowStimulus",
                    "type": "reactive"
                }
            ],
            "path": "basic-questionnaire-study/assets/bar-chart.html",
            "instructionLocation": "aboveStimulus"
        
        }
    }
```
This creates a component that new components can be based off of. Each component using the “bar-chart” as the value to the “baseComponent” key will now automatically have the above key-value pairs included. In other words, there is no need to specify the type, response, path, or instruction location when creating these next components.

In the components section, add the following objects:

```js
...
"bar-chart-1":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the largest bar",
    "instruction": "Click on the largest bar",
    "parameters": {
        "barData": [0.32, 0.01, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
},
"bar-chart-2":{
    "baseComponent": "bar-chart",
    "description": "A trial for the user to click the smallest bar",
    "instruction": "Click on the smallest bar",
    "parameters": {
        "barData": [1.2, 1.2, 1.2, 1.3, 0.82, 0.4, 0.3]
    }
}
...
```
The "parameters" key is a dynamically valued key which is used to pass data to your components. When you add the "parameters" key, any data contained within the objet will be sent via the event bus as a message to the component. Since we designed the HTML above to listen for this message, we were able to parse these parameters and use them as variables to control the sizes of the various bar charts. 

To finish this tutorial, add these two components ("bar-chart-1" and "bar-chart-2" to the sequence in config.json).



import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

<StructuredLinks
    demoLinks={[
        {name: "HTML Demo", url: "https://revisit.dev/study/demo-html"}
    ]}
    codeLinks={[
        {name: "HTML Code", url: "https://github.com/revisit-studies/study/blob/main/public/demo-html"}
    ]}
    referenceLinks={[
        {name: "D3.js", url: "https://d3js.org/"},
        {name: "Base Components", url: "../../typedoc/type-aliases/BaseComponents/"}
    ]}
/>

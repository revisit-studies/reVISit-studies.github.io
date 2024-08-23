# Example 1: Fixed Order
In this example, we will generate 100 trials for the click accuracy test first. Since we have basecomponent in the config file, we won't need to write common features repeatly.

```python
allTrials = {}
def createTrials():
   for i in range(300, 401): 
    allTrials["trial" + str(i)] = {  
        "baseComponent": "trial",
        "meta": {
            "nr-dots": 1,
            "speed": i
        },
        "parameters": {
            "speed": i,
            "taskid": "t" + str(i)
        }
    }

createTrials()
```
Then, we can write the trials into a json file.
```python
with open('out/trial-click-accuracy.json', 'w') as outfile:
    json.dump(allTrials, outfile, indent=4)
```

Now we can generated fixed order sequence based on trial names.
```python
#Create fixed order
def createFixedOrder():
    trial_keys = [key for key in allTrials]
    
    # Create the sequence structure
    sequence = {
        "sequence": {
            "order": "fixed",
            "components": [
                "introduction"
            ] + trial_keys  # Append the trial keys
        }
    }
    return sequence

seq = createFixedOrder()
print(seq)
with open('out/seq-fixed-order.json', 'w') as outfile:
        json.dump(seq, outfile, indent=4)
```

You can check the code and output [here](https://codesandbox.io/p/devbox/config-gen-demo1-cgzlg5?file=%2Fmain.py%3A9%2C2-24%2C15)


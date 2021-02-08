replace these chars with something related to the new LA

run this in console in the flow you want to copy (only works if no external portals)

`copy(window.api.getState().flow)`

paste the clipboard into a file in this dir called `data.json`

the following in `replace.js`, to match the LA you're copying to e.g. Bromley = Br

```javascript
newId[5] = "B";
newId[6] = "r";
```

run `node replace.js`

create a flow in planx

copy `out.json` and paste output into data field of that flow in postgres

refresh the flow that you just updated :)

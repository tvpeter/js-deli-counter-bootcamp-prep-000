var katzDeliLine = [];



function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`);
  
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length ===  0)
  {
    return "There is nobody waiting to be served!";
  
  }
  var cp = katzDeliLine[0];
  
  katzDeliLine.shift();
  
  return `Currently serving ${cp}.`;
  
}

function currentLine (katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return "The line is currently empty.";
  }
  var stmt = "The line is currently: ";
  for(var i=0; i < katzDeliLine.length; i++)
  {
    stmt += ` ${i+1}. ${katzDeliLine[i]}`;
  }
  
  return stmt;

}
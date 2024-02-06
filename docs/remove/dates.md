# Working with JavaScript Date Object

## Types of Dates

Local time refers to the timezone your computer is in.
UTC is synonymous with Greenwich Mean Time (GMT) in practice.
By default, almost every date method in JavaScript (except one) gives you a date/time in local time. You only get UTC if you specify UTC.

## Creating a date

You can create a date with `new Date()`.
There are four possible ways to use new Date() that are shown below. However dates can be tricky in different parts of the world date formats are ordered differentl.  
For example 11-06-2019 is either 11th June, 2019 or 6th November 2019 depending on where you are from. But you can’t be sure which one I’m referring to, unless you know the date system I’m using.  
In JavaScript, if you want to use a date string, you need to use a format that’s accepted worldwide. One of these formats is the ISO 8601 Extended format.

## ISO 8601 Dates

```javascript
// ISO 8601 Extended format
`YYYY-MM-DDTHH:mm:ss.sssZ
```

Here’s what the values mean:

**YYYY:**
4-digit year
**MM:**  
2-digit month (where January is 01 and December is 12)
**DD:**  
2-digit date (0 to 31)
**-**:  
date delimiters
**T:**  
indicates the start of time
**HH:**  
24-digit hour (0 to 23)
**mm:**  
Minutes (0 to 59)
**ss:**  
Seconds (0 to 59)
**sss:** Milliseconds (0 to 999)
**::** Time delimiters
**Z:** If Z is present, date will be set to UTC. If Z is not present, it’ll be Local Time. (This only applies if time is provided.)

**1 With a date-string**
We tend towards the date-string method when we write dates. This is natural because we’ve been using date strings all our lives.

```
new Date('1988-03-21')
```

1. With date arguments
2. With a timestamp
3. With no arguments

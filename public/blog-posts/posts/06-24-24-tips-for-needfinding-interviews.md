## Five tips for conducting an strong needfinding interview
#### June 24, 2024

Needfinding interviews are the first step in building a product. Ideally, you do this before you write a line of code or draw a single screen of your spec. They can be incredibly valuable, *presuming that they're structured well.

### Why conduct Needfinding Interviews at all?

Because we are not the target audience for our own products. People are complex and full of surprises. It's exceedingly hard to predict their behavior without observing it directly.  By developing an understanding of what your target users struggle with, **you can build something that they'll value.** Doing this first also prevents idea fixation. If you interview once you've built a solution, it's tempting to just modify the original solution to try to accommodate what you've learned. Worse still, it's tempting to try to convince folks to use your solution even if it's not something they want. **Starting with needfinding saves us from sunken cost fallacy.** We can pivot and try new ideas while changes are easy and cheap.

### Why would an engineer know about this?

My academic training was a split between computer science and product development. Though I'm a software engineer, My degrees in Computer Science both had a focus in Human-Computer Interaction. This was perfect for me, because I always like to understand why I'm doing what I'm doing. The meaning of my work in the bigger picture is always my best motivator.

As a result of this training, I spent a lot of time learning about the process of developing a good product.  I could talk about design thinking all day long (and I have). Now that I'm building a product of my own, I get to engage with this whole process from end to end, and I'm honestly psyched.

As of writing this, I'm in the middle of conducting needfinding interviews for Manuscript Mates. Since I cannot share those learnings yet, it's the perfect time to talk about the process. In lieu of the Manuscript Mates problem space, **let's consider an alternate example: the problems faced by parents of young children.** Using this framing, let's discuss how to run a pleasant and insightful needfinding interview :).

### 1. Do your research and come prepared

Your users time is valuable! They've kindly taken some portion of their day to talk to you. **Leverage existing resources to build an understanding of the problem space.** Has ink been spilled about the problem space already? In the case of our parents of young children, what can you learn about parenting that age range on your own? Are there popular books or podcasts aimed at those parents? What are there developmental and social milestones expected of those parents and their children?

Use this research not to preclude the information your interviewees will give you, but to help you refine the questions you ask. Remember that they're the expert, not you. Use their time to let them teach you about their personal experiences rather than to teach you about the subject at large.

### 2. Consider a range of backgrounds when constructing your user group

When testing a piece of code, I like to consider both the 'happy path' and the extremes. In other words, what happens when the input is simple and uncomplicated vs what if it's empty or malformed? What if it's unusually small or unusually big? **Preparing for edgecases can make your final solution more robust for all kinds of input.** The same concept applies in needfinding interviews!

Let's take our parent example again. Of course we should interview parents that currently have young children. We need an understanding of what is difficult for them right now. But what about parents with older children? Is there anything they wish they knew in retrospect? What about parents of infants or people preparing for parenthood? What are they nervous about and how are they preparing? Is there any difference between the experiences of  biological parents and parents who adopted? What about separated parents vs. co-habitating parents?

This is not to say that these are all your users. In fact, building something intended to meet the needs of every single person might result in something diluted. You could end up with several partial solutions instead of one strong solution. However, **the insights that come from solving for an edge case could result in a strong solution for a larger group.** Consider the case of separate vs co-habitating parents. When parents are physically separate, there's a lot of additional communication burden. Doctors appointments, school enrollment, even physical and cognitive milestones have to be managed by two separate households. However, a tool that helps to close that gap may be helpful for co-habitating parents too. Even parents in the same household don't see every milestone or make every doctor's appointment. If the tool works well for parents that are hundreds of miles apart, it might work just as well for parents in the same space.

To make our example general again, consider all of the different relationships that someone can have to your problem space. Include folks that actively engage with the problem, folks that once engaged with it, and folks that will engage with it. Consider indirect relationships: who else is in the orbit of the problem space and impacted by its ripple effects? **All of these points of view can give you a more complete picture of the issues your potential users face.** That understanding will lead you to a more robust final product.

### 3. Embrace detours

 In needfinding interviews, it's valuable to go broad. I like to come in with a list of questions so I know how to start the interview, but I'm never worried about veering off topic. Why? Because I don't know what I don't know.

If the user veers into something that seems unrelated, it's reasonable to want to return to the topic at hand. However, in that case , I'd be curious about what caused that change in course. In our example, consider a parent that brings up how stressful their taxes are.  It's understandable to wonder "what do taxes have to do with your parenting experience?" That curiosity is a great instinct!

I'd respond with "What made you bring up your taxes in this context?" It could lead to insights like "Oh it's so hard to keep my child busy long enough to do my taxes" or "I know having a child impacts my taxes but I haven't had time to figure out how." Those two statements are great insights. the interviewee could also have simply gotten distracted. Best case, there was an interesting connection between the two concepts. Worst case, you acted on curiousity and there wasn't much there. You can simply return to your next question. 

In summation, **always assume your interviewees are rational actors. If they take an action that doesn't make sense to you, presume it makes sense to them and ask them to fill in the logic gaps you're missing.**

### 4. Index towards open ended questions

The more I give interviewees the chance to talk, the more I can learn. Questions that can be responded to with 'yes' or 'no' don't yield much information. In contrast asking 'why', 'when' or 'how' are often treasure troves.

**When I have a question that may elicit a binary answer, often there's an assumption built into that question that's worth validating.** Rather than 'Did you expect parenting a toddler to be so difficult?' I might ask 'How has the reality of parenting a toddler squared with your expectations of the experience?' Perhaps my interviewee will confirm my assumption and say that parenting their toddler is hard. Perhaps they will surprise me and say that it is easy! The wrong phrasing could have stifled that insight. 

**The risk of building assumptions into your questions is that your interviewee is unlikely to correct them.** People tend to index towards pleasing strangers. It's uncomfortable to tell someone they're wrong. In the example above, the first question's phrasing already insinuates that parenting is difficult. If the interviewee does not agree, they now have to clear the higher barrier of telling you you're incorrect. By asking the interviewee to describe their experience, they have free rein to characterize it in their own words. They're more likely to tell you things that might surprise you, and that is the value of these interviews!

### 5. Follow up on interesting emotions

This one is rather simple. Don't plow through a list of questions regardless of how interviewee responds. The biggest strength in these interviews is your own curiosity. I always find it interesting when the interviewee exhibits a particularly strong emotion. If something in their experience makes them angry or sad or excited, that's an opportunity to drill down. Note the emotion you observe and ask them why they feel that way. 

**Powerful emotions can be markers for strong needs.** A user will likely value a solution that makes them less upset. Similarly they may value a solution that makes their experience more enjoyable. Understanding these patterns can help you understand what to amplify and what to minimize in your own solution.


### In conclusion

This has already been a meaty discussion and I still haven't run out of tips!  Look out for a part two to this article in the near future. In the mean time, the high level takeaway is to go broad in this stage of your product development. Come prepared but presume you know nothing. Construct as many opportunities as possible for your interviewee to show you their experiences. In fact, in part two, I have a few more tricks aimed at accomplishing just that. **Finally, make sure to thank your interviewee for their time.** Let them know what comes out of your work once you've got a usable MVP! You'll be coming back to your user group many times through out the product development cycle. Best to build good relationship with them from the beginning. 

Thanks for making it to the end! I hope you found some value in these tips. 

See you next time

-- Carah
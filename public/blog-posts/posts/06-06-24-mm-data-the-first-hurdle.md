## Data: The first Manuscript Mates hurdle

#### June 6, 2024

Before I could begin with building Manuscript Mate, I needed to know if I could populate it. That proved to be tougher than expected.

### The Problem

The data that Manuscript Mate hinges on does not exist in any existing free API. The goal of app is a searchable catalog of fiction works, so that means a lot of data on books. There are a handful of book-related APIs, but they all have some limitation. Some only have a small subset of books, some require signing up for a larger affiliate program,  and some are paid. Regardless, they don't seem to have the data the application depends on. So how have I built up a demo dataset?

Manually.

Initially, I went to bookstores, libraries, even my own bookshelves at home. I looked through hundreds of books for the attributes I needed and added them to a spreadsheet.

I soon realized that this was not scalable, even for constructing the demo dataset. In bouncing my initial strategy off another person, they asked me "How many books do you think you can get through in a minute?" 

Confidently, I said "Two."

That person replied,  "So you'll be able to go through 120 books an hour..." with very kind and meaningful skepticism.

And I brushed it off by saying I just need enough data for proof of concept. Ten hours in a bookstore or library, spread over a few days didn't sound so bad. To further ensure my data entry success, I brought out one of my all-time favorite tools: Google Forms.

Google Forms has this handy feature where you can funnel the form data into Google Sheets for processing. I've used it in a range of situations (ie. apartment hunting). Here I made a form that would take in the relevant book data and pipe it to a form. Rather than fumbling with a spreadsheet on a phone or hauling my laptop through the shelves, I could fill out the form for each book.

### The snag within the problem

Even with my little Google Form trick, I was averaging about two minutes per book. Astute readers will note that was quadruple my initial estimate. The amount of time it would take to gather my initial data went from 10 hours to 40. Not great.

So what did I do?

I wrote a script!

### Resolving the snag

Much of the time I spent per book was spent making sure the data was correct. Things like the ISBN number and the imprint were not muscle memory the way words and common names were.  I wanted to ensure they were spelled correctly so I reread them a few times, then read my input again, then, bang, two minutes had passed. I realized that for most books the title and author alone were sufficiently unique. Publishing is incentivised to do as much. When someone searches for a book on Amazon, they want the user to find that book, not a competitor's.

I hypothesized that I needed  to collect the book title, the author, and the categorization attributes. That's it.

With this new hypothesis, I went to the [Google Books API](https://developers.google.com/books/docs/overview) and wrote a Node script that would take in my form results as a CSV file using [`csv-parser`](https://www.npmjs.com/package/csv-parser). For each row, it queries the Google Books API with that title and author and outputs the results with the additional  publishing data etc in a fresh CSV file using [`csv-writer`](https://www.npmjs.com/package/csv-writer). More on that last package later 😬.

If there is just one result, the script fills in all the additional publishing information in that row. If there are multiple results, the script returns a list of links to the possible results. From there, I can click through and determine which one is the right piece of work. This only happens about once every 20 books, so I'm verifying 50 books by hand rather than 1000. 

There was a bit of a learning curve for this process. Here are a few of the tricks I came across:

First, Google Books rate limits requests to 100 requests per minute. Since I was going to have a minimum of 1000 books, I needed to batch the requests.

Second, even though Google Books did not have the data I need for this project, it still has a huge amount of data per  `volume`.  So I used a [partial request](https://developers.google.com/books/docs/v1/performance#partial-response) to whittle the response down to only the data I needed.

Third, to avoid reading the whole input csv into memory, I fetched the data for each row in a promise. I pushed  the promises into an array for that batch and waited on all the promises in that batch to complete.  This gave me the opportunity to learn about [`Promise.all` and `Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) which lets you wait for an iterable of Promises in JS under different conditions. Having used JS/TS for a few years now, it was neat to come across a new bit of functionality.

Finally, I came across a bit of a snag with `csv-writer`. True to the spirit of the last 20% taking 80% of the time, I noticed that even after the script was working on individual rows, it would sometimes skip some rows when I ran it on a larger file. An input file with 50 rows would result in 48 rows of output on one run, then 45 in another then 50 after that. To me that screamed "race case".

Many agonizing hours later, the race case wasn't revealing itself. Each time I ran the script, I confirmed that each volume was correctly fetched from Google Books and reaching the `csv-writer` step. Yet when the data was passed to the csv-writer, it would sometimes skip writing the data to the file, always without issuing an error. Debugging asynchronous processes is no walk in the park, so I was sure I was missing something. I was close to hopeless until I came across this [similar github issue](https://github.com/ryu1kn/csv-writer/issues/45).

It seemed that others had run into issues with the `csv-writer` inconsistently writing their output to a file. Furthermore, the thread didn't seem to result in an adequate fix.  The original poster had to go back to using the Node built-in `fs.writeFile`. As I contemplated whether to read through the csv-writer source to find the issue vs redoing my implementation to use `fs`, I paused. I realized that none of this matters. Why? Because the flaky fix only needs to work on the initial demo data. I don't have to use `csv-writer` in this context for the final implementation. Hence, the biggest takeaway...

### Doing what doesn't scale

The fixes above don't solve the larger problem this project faces: It's simply infeasible to catalogue all books this way.

There are a conservative 250k books published per year in the US (using [a decade old statistic](https://en.wikipedia.org/wiki/Books_published_per_country_per_year)). Now, other vague blog sources I've read have put that closer to 1 million. Including self published books, the estimate bandied about online is closer to _4 million_ books published each year. Even if I optimistically assume 250k, there are not enough hours in the day for this method to keep up.

So I'm not going to use this method in production.

The csv-writer issue can be worked around by running the script a few times until it returns the right number of rows. I only have to do it for a few thousand books, and the data isn't going to change so it only has to be run once.

In future posts, I'll outline how I intend to aggregate this data, but for the sake of demo purposes, I've decided to [do what doesn't scale](https://www.ycombinator.com/library/96-do-things-that-don-t-scale). This experience was a valuable lesson in triaging, _and_ I now have 1200 books catalogued and counting.  I hope this project will soon find you fiction you love. I look forward to further improving the processes after the MVP.

Thanks for reading and see you next time

-- Carah
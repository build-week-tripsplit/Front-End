# Trip Split - Front-End

Instead of scrambling at the end of a trip or a dinner to figure out who pays for what, Trip Split keeps things simple. Everything is divided equally and there’s no more guessing game involved. No need to whip out the calculator on your iPhone after an uber ride and you can plan out trips in advance so you’re always on budget.

## Tech Stack
- HTML/CSS
- React
- Redux
- Semantic UI
- Axios
- Styled Components
- Moment.JS
- React Router
- Yup
- Formik


---
### Proposal (Product Canvas)


    Pitch
Tired of paying for a friends uber ride or lunch while on vacation and never getting paid back? Trip split saves the day by keeping track and telling each person they owe money.
 
    MVP
Onboarding process for a new user to create a profile.
Ability to create a trip, including number of people on the trip, names of people on the trip, destination, and dates. Ability to edit or delete this information.
Ability to create a trip expense item title, price, who paid for it, number of people that paid for it, and names of people that paid for it.
Ability to ‘close’ trip and total it out. Ability to view a trip summary page that gives a final total that each person owes or is owed (look at the total trip expenses, divide by the total number of people, and balance that with the total amount each person already paid).
Homepage to see list of current or past trips.
 
    Stretch 
Ability to add friends, and select a friends profile when adding trip members. Ability to add pictures to user profile. Ability for multiple users to be connected to and editing the same trip (viewing total trip expenses, even if added by another user).  Connect venmo so each person can repay their friends.


- What problem does your app solve?
    Trip split allows for easier tracking and splitting of bills during trips

- Be as specific as possible; how does your app solve the problem?
    Add a trip, add your contacts to your upcoming trip, and add a transaction/bill that your friends are splitting. Choose who paid the bill, and who you’re splitting the bill with. Link your Venmo/credit card/bank account for easy transactions. Make it social by sharing your upcoming/recent trip with your friends!

- What is the mission statement?
    Tired of paying for a friends uber ride or lunch while on vacation and never getting paid back? Trip split saves the day by keeping track and telling each person they owe money.

    Features
- What features are required for your minimum viable product?
 
Onboarding process for a new user to create a profile.
Ability to create a trip, including number of people on the trip, names of people on the trip, destination, and dates. Ability to edit or delete this information.
Ability to create a trip expense item title, price, who paid for it, number of people that paid for it, and names of people that paid for it.
Ability to ‘close’ trip and total it out. Ability to view a trip summary page that gives a final total that each person owes or is owed (look at the total trip expenses, divide by the total number of people, and balance that with the total amount each person already paid).
Homepage to see list of current or past trips.

- What features may you wish to put in a future release?
    Linking venmo. Adding your social networks so you can share your trips and find friends you’re splitting your bill with faster. Sharing pictures from your trip (maybe). 

- What do the top 3 similar apps do for their users?
    Venmo, SplitWise, QuickPay, CashApp. They let users pay their friends for bills, trips etc. But they don’t actually split the bills between multiple people/groups.

    Frameworks - Libraries
- What 3rd party frameworks/libraries are you considering using?
    Axios, React, Redux, Formik/Yup.

- Do APIs require you to contact its maintainer to gain access?
No
- Are you required to pay to use the API?
No
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
For Data Scientists
    (Not Applicable - no data scientist at the moment.)


- Describe the Established data source with at least rough data able to be provided on day 1. 
- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)
- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app


    Target Audience

- Who is your target audience? Be specific.
    People who travel & people with friends.
        User Profile: 25-34 y/o, disposable income $56K, Mac/iPhone users, frequent traveler, very social, curious, regular payment app users (venmo, cashapp)


- What feedback have you gotten from potential users?
    “If Trip Split was an app when I went on my last trip, I definitely would’ve used it!”
    “I’ve only linked venmo to one other app.”

- Have you validated the problem and your solution with your target audience? How?
    

    Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
https://projects.invisionapp.com/share/B2TLXF7MYD8#/screens/380431611_Trip_Split_Revised_-_Homepage_-1-
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.


User Onboarding (login & sign-up form): 5 hours

Home Page: 5 hours
Lists currently opened trips, future trips, trip history.

Add Trips: full day
Customize Trip (names, destination, start & end date).

Expense Items: full day
Who paid, # of people who paid, how much it cost, description.

     Close out a Trip: full day
Finalize a total cost, summary page, who owes/how much owed.

         Import Users:

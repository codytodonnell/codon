## Overview

Nirvana vs. Foo Fighters is an exploratory project that compares Nirvana and Foo Fighters from the perspective of the data. The two bands are often associated with each other given the fact that the drummer from Nirvana, Dave Grohl, ended up forming and leading the Foo Fighters. The two bands were also influential to the grunge and post-grunge movements of the 90s and early 2000s. This graphic utilizes data about the bands’ popularity to compare the two in terms of public reception through the years, but it also utilizes data about the bands’ sound through the years. Using data from the Spotify API, this graphic is able to visualize just how similar the two bands are in terms of sound while pin pointing where their sound differs.

## Inspiration

I started this project by identifying a goal and several guiding questions. The goal was to quantitively analyze the difference between Nirvana’s music and the Foo Fighters’ music. This entailed questions like, How did the Foo Fighters evolve? and, In what ways did Nirvana influence the Foo Fighters? Because I knew that Nirvana and Foo Fighters were key players in the grunge and post-grunge movements, I also wanted to examine the musical characteristics of the transition from grunge to post- grunge in general. This entailed questions like, What does post-grunge look like? and Is post grunge more successful than grunge? I ultimately decided to explore these questions through two categories: Popularity and Sound.

## Data + Sketches

To find data about the two bands’ popularity, I used sources like Billboard and Wikipedia. These both offered well structured and complete data on the bands’ album sales as well as their individual songs that reached the Billboard’s Alternative Top 100. Getting data about the actual sound quality of the two bands was initially tricky. I initially explored characteristics like song duration which were easily available and began generating some sketches. After some exploring, I came across the Spotify and Echo Nest API’s. These API’s had audio feature data for every song by both Nirvana and Foo Fighters. I was able to pull data from Echo Nest and save it down in a usable JSON format. This provided attributes like song valence, acousticness, loudness, time signature, and several others.

![Nirvana and Foo Fighters line graph sketch](/images/projects/nirvfoo/nirvfoo-sketch-1.png)

## Visualization + Narrative

After exploring the data and generating several sketches of what I wanted to visualize, I began visualizing the data in R. I chose several different visualization methods based on the type of data that proved most interesting. I used stacked bar chart and filled line graphs for the more simple datasets related to popularity, and I used more complicated chart types to visualize the multi-variate relationships existent in the two bands’ sound data. After generating all of the visualizations in R, I exported everything into Adobe Illustrator to style the graphics and shape the overall narrative of the analysis.

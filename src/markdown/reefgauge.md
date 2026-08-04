## Overview

ReefGauge is a web-based coral reef learning tool that blends data from the scientific community and the recreational scuba community to advance knowledge and promote communication about the health of coral reefs. The project began with one overarching question: How can you turn open data about marine environments into an engaging, useful, and educational resource for recreational scuba divers? Over the course of a year, I explored this question by assessing the current landscape of open environmental data, conducting interviews with divers at all different skill levels, interpreting those interviews into actionable insights, and iteratively designing a solution. ReefGauge is the product of 5 months of research and analysis and 3 months of prototyping and user testing.

## Problem Space

The scuba diving community is passionate, diverse, and intertwined with the natural environment in a way that few other communities are. With the growing threats to underwater environments, particularly coral reefs, it is more important than ever that the dive community grow their knowledge of what is happening. At the same time, there are a growing number of open data resources being produced about marine environments. The problem is that connecting the dive community with such resources is a largely unexplored space. This project is an attempt to change that.

## Interviewing Divers

After an extensive dive into what types of tools and data exist in this space already, it was time to talk directly to the users I was designing for. Because my research space was broad and exploratory, I chose to conduct semi-structured interviews to collect a wide range of rich qualitative data about divers. Namely, I wanted to answer these overarching questions: How much do divers already know about ocean health? How willing are divers to learn more? What are divers’ affinity to and willingness to interact with data about marine environments? What do diving and the ocean mean to divers? What is the role of the dive community in divers’ experiences?

## Interpreting the Interviews

One of the most challenging parts of the process was translating the interviews into actionable insights. I collected 10 hours of audio and dozens of pages of notes from the interviews but I needed to boil this down into information that I could use to ultimately design a solution. I chose to build a hierarchical affinity diagram out of my interviews. This started with revisiting the audio and notes from each interview and recording discrete affinity notes. With around 50 notes per interview, I was able to group notes into themes and categories that began to tell a cohesive story about divers. Among my findings were that (1) diving and the ocean are part of divers’ identity, (2) the dive community is an agent of education and action, and (3) divers are inclined to critically engage with environmental data.

## Walking the Wall

Now that I had an affinity diagram that wrapped all of my interview data into a digestible artifact, it was time to discern which design directions best followed the insights about the users I studied. Although I grew intimately knowledgeable about the data I collected, I knew that I alone could only generate so many distinct and innovative designs. For this reason, I decided to put together a team of design experts to "walk the wall" of affinity with me. Together, myself and three other experts in design and education technology analyzed a physical print-out of the affinity diagram and silently noted design ideas and design implications as we digested the information. Afterwards, we reconvened for 20 minutes of brainstorming. I facilitated the brainstorm and captured high-level ideas in a concept map.

## Divergent Designs

Walking the wall brought the user research data one step closer to action. Based on the outputs from this session, I began sketching out different design ideas that reflected my findings. Some of these designs leaned more into the citizen science realm, while others leaned more into the storytelling realm, while others leaned more into the education realm.

## Design Solution

In choosing an ultimate design solution, my primary considerations were how well the design reflected my research findings and how feasible the design would be to build out and test in the final 3.5 months of the project. The direction I chose would be the tool ultimately known as ReefGauge. The idea behind this direction was to build a tool that combined scientific data about coral reef health with crowd-sourced photos of coral reefs. The goal of this tool is to help divers better understand the environments they are diving in. ReefGauge engages divers by giving them an intuitive medium for exploring scientific data and bringing them into the scientific process through legitimate peripheral participation.

## Prototyping the Tool

Prototyping the tool involved a parallel process of analyzing my primary data set of reef information, learning as much as I can about coral reef health, building an information architecture around my design and data sets, developing technical data visualization prototypes, and building testable static prototypes.

## Prototype Interviews

Once I had a fleshed out static prototype, I wanted to get feedback from my user base to help me confirm which parts of my design were striking a chord and which parts needed revision. With paper print-out versions my prototype, I conducted two rounds of paper prototype interviews with users. I moderated these sessions with users but encouraged users to mark up, re-design, and play with the paper prototype as much as they wanted. This process gave me a ton of insight into my design and gave me the information I needed to start building out a functional web tool.

## Functional Prototype

While some pieces of the static prototype tested well, such as the overall information architecture and map-based visualizations, others did not. Based on the prototype tests with users, I decided to scrap the non-geospatial visualization component of the tool and focus my efforts on the geospatial map views instead. Another major breakthrough that happened at this point in the project was my discovery of a data source for community data. Originally I had planned to build in the crowdsourcing functionality into ReefGauge, but after discovering a platform called iNaturalist, I saw an opportunity to leverage their existing infrastructure. The final functional prototype includes a map visualization that users can toggle between scientific reef assessment data and community-sourced reef observation data. The scientific data is sourced from a site called the Atlantic and Gulf Rapid Reef Assessment (AGRRA) and the community data is sourced through a citizen science platform called iNaturalist. Leveraging iNaturalist’s Project feature, I was able to build my own citizen science initiative that sources observations of the reef species I am targeting. This lets my ReefGauge encourage an initiative around reef data collection while offloading the data input functionality to iNaturalist.

## Usability Tests

Before rolling out ReefGauge to a wider audience, it was critical to evaluate the tool for its usability. I conducted 5 usability tests with 5 different scuba divers using a moderated task-based approach. Users then evaluated how difficult the tasks were and how usable to tool was overall using the standard System Usability Scale (SUS). Overall, these tests showed that the tool was very usable and that the concept was well-received by the users. These tests also produced a ton of information that I used to inform a second iteration of the functional prototype.

## Remote Evaluations

The usability tests helped me know how usable the tool is, but it did not tell me much about how useful the tool is. To evaluate usefulness, I crafted a survey that asked questions like: How likely are you to use ReefGauge in the future? How relevant to you was the information in ReefGauge? I sent this survey and the tool out to various online scuba diving communities to solicit feedback. I ended up with over 25 responses from scuba divers across a wide range of skill levels. Overall, the feedback was excellent. The results present a lot of promise for tool’s like ReefGauge and suggest that educational experiences with data certainly have a place in the scuba community.

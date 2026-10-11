## Overview

Rarely do people get the opportunity to reflect on the way they move throughout their city. Even more rarely do people recognize the stories revealed by their own data, their peers’ data, and their community’s data. ReshapeWeb is designed to help Computer Science students think critically about data. At its core, ReshapeWeb is a web-based mapping tool for visualizing, analyzing, and studying personal geographic movement. The tool is part of a larger initiative called [Reshape](https://www.benrydal.com/re-shape) which provides class instructors with tools to integrate principles of data science and data ethics into their lessons. The goal of Reshape is to engage students anywhere from middle school-aged to undergraduate-level in critical analysis of their personal movement, interaction with their city, and relation to their own data. Both Reshape and ReshapeWeb have been used in classroom exercises that bring classmates together in small groups to analyze, discuss, and reflect on their own movement over the span of approximately one week. During these exercises, students are encouraged to explore the tool collaboratively while following several prompts that guide them to contextually analyze themselves individually and collectively.

## Gauging the Web Mapping Landscape

The overarching goal of the ReshapeWeb project was to improve an existing desktop tool built in Processing and adapt it to a web-based environment. The first task was to study, grasp, and convey the state of the art in web mapping technology. Based on my initial research, I determined that our best route for development would be with Mapbox, Leaflet, Carto, D3, or a combination of multiple of these tools. I presented this initial research to my team members along with several existing examples from each technology to convey the strengths and weaknesses of each one.

## Initial Prototyping

We ultimately decided that Mapbox and D3 would be the best tools for ReShapeWeb. Mapbox, on top of being inexpensive, provided strong and flexible capabilities in both base-map creation and interactive map visualization. These two features were key to the development of our tool which made Mapbox and their javascript library, Mapbox-GL, a great choice for our project. Aside from the need to visualize data geospatially, we also needed a way to visualize data over time outside of a map context. For this reason we chose D3 for its incredibly flexible and dynamic capabilities to visualize temporal data. With these two tools, I began prototyping much of the initial functionality that we knew would be critical for the final product. This included features like geographic path drawing, space over time visualization, spatial filtering, and temporal filtering.

![Temporal visualization with brush filter](/images/projects/reshape/reshape-brush.png)

## Observational Study

The goal of ReshapeWeb was not just to adapt an existing tool into the web. It was also to expand the capabilities offered by the desktop tool and to develop new and better ways for students to interact with their geography. To inform the design of ReShapeWeb I conducted an observational study with an undergraduate Computer Science class that was using the original ReShape tool as part of a class activity. This study allowed me to collect rich observational data about how students interact with their data, the pain points they encounter, the questions they ask, and the observations they make. This data became crucial to the next phase of development.

## Final Prototyping

Based on observations made during the class activity, I developed additional features and continued fleshing out features that were validated by my observations. This included the addition of features like dynamic base-map selection, dynamic movement metric selection, and dynamic data uploading.

![Web app base map data layer selection](/images/projects/reshape/reshape-data-layers.png)

## Implementation

After the prototype was fleshed out, the tool was implemented in a class activity within an undergraduate Ethics in Computer Science course. During this implementation, the tool was given to a group of 5 students who collaboratively visualized and analyzed their data together on a large shared monitor. After the in-class activity, students reflected on their experience in a short essay about data ethics, personal geography, personal relationships to data, and privacy.

![Students in classroom using Reshape](/images/projects/reshape/reshape-implementation.png)

## Publishing to CHI

Data from both the implementation and the personal reflections were analyzed for themes related to data ethics and care ethics. The findings, along with the ReShape learning environment as a whole, were developed into a formal research paper which was accepted into the 2020 Computer Human Interaction (CHI) Conference.

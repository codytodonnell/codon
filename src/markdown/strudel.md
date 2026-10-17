## Overview

[STRUDEL](https://strudel.science) is a collection of products and resources for supporting scientific software development and the growing UX in Science community. The aim of this project is to make adopting UX in science easier and more effective from project planning through product development. In 2022 we received a grant from the Alfred P. Sloan Foundation to begin building a design system for science. Over the course of this grant, I served as the Lead UX Engineer for the team, championing the development of the [STRUDEL Kit](https://github.com/strudel-science/strudel-kit) library.

## Design System

One of the key products of STRUDEL is the design system. Unlike many design systems that focus on fine-grained components, the STRUDEL Design System takes a higher level approach, focusing on Task Flow templates that represent larger patterns common in scientific user interfaces. The system uses Material UI for its core components and offers several key templates for patterns such as Explore Data and Run Computation. My role as the UX Engineer was to collaborate with our Lead UX Designers who were building out the core patterns.

## STRUDEL Kit Library

![STRUDEL Kit GitHub repository page](/images/projects/strudel/strudel-kit-github.png)

After developing an initial design system in Figma, our team decided to expand our efforts to the code side. This ultimately resulted in the [STRUDEL Kit](https://github.com/strudel-science/strudel-kit) library of fullstack templates and React components.

Our goal in building this library was to make it easy for Research Software Engineers to bootstrap a well-designed interface for complex scientific interactions. As the Lead UX Engineer, my job was to architect a way for people to quickly go from design template to code development. Initially, I developed each Task Flow as a frontend template, using Material UI as the core component library. I then created a CLI app that utilized the popular cookiecutter library to streamline sharing and generating the templates. However, as a small team with little development resources, I later decided to abandon the custom CLI approach for an approach that utilized the preexisting degit library and GitHub. This enabled us to easily share templates without the burden of maintaining a custom CLI.

After holding multiple workshops with our initial products, we identified a few new focus areas for the remainder of the grant. This included the development of fullstack REST API templates built with FastAPI as well as a distributable React component library and MUI extension.

## Workshops

![STRUDEL in-person workshop at the Berkeley Lab](/images/projects/strudel/strudel-workshop.jpg)

We conducted [multiple workshops](https://strudel.science/engage/news/10-23-2025-building-scientific-uis-with-strudel-and-ai-assistants/) using the initial version of the STRUDEL Kit library that resulted in researchers and engineers from seven different institutions building web app prototypes based on the STRUDEL Design System. These workshops explored User Experience in science, AI-assisted scientific web app development, and open-source contribution. For two of these workshops we [partnered with 2i2c](https://2i2c.org/blog/strudel-gui-prototyping/) to launch our own sandbox environment for participants to bootstrap UIs with STRUDEL and integrated AI coding agents.
